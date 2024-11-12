import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import NodeCache from 'node-cache';

// Initialize Supabase and OpenAI clients
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY as string
);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY as string });


// Cache setup - ensure caching for 5 mins
const searchCache = new NodeCache({ stdTTL: 300, checkperiod: 60 }); 

// Helper -- generate embeddings
async function getEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: [text.replace(/\n/g, ' ')],
  });
  return response.data[0].embedding;
}

// Search handler
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');
  const page = parseInt(searchParams.get('page') || '0', 10);
  const matchCount = 10; // Reduced to 10 events per page to increase results response time
  const cacheKey = `search:${query}:page:${page}`; // cacheing key 

  if (!query) return NextResponse.json({ message: 'Query is required' }, { status: 400 });

  try {
    // Check cache first
    const cachedResults = searchCache.get(cacheKey);
    if (cachedResults) {
      console.log('Cache hit for query:', query);
      return NextResponse.json(cachedResults);
    }

    console.log('Cache miss for query:', query);

    // Query text embedding
    const queryEmbedding = await getEmbedding(query);

    // Similarity search in Supabase
    const { data, error } = await supabase.rpc('match_events', {
      query_embedding: queryEmbedding,
      similarity_threshold: 0.65,
      match_count: matchCount,
      page_offset: page,
      search_term: query
    });

    if (error) {
      console.error('Error performing search:', error);
      return NextResponse.json({ message: 'Error performing search' }, { status: 500 });
    }

    // Cache results
    const responseData = { results: data, page };
    searchCache.set(cacheKey, responseData);

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error processing query:', error);
    return NextResponse.json({ message: 'Error processing query' }, { status: 500 });
  }
}