'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import DOMPurify from 'dompurify';

interface EventDetailsProps {
  description: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ description }) => {

  console.log('description', description)
  const [isExpanded, setIsExpanded] = useState(false);

  // Sanitize the markdown for safe rendering
  const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <div className='lg:col-span-2'>
      <div className="sm:rounded-lg bg-gray-800 p-4 lg:p-6 space-y-4">
        {/* Section Title */}
        <h2 className="text-white font-bold leading-4 m-0">Description</h2>

        {/* Description Container */}
        <div
          className={`text-gray-300 overflow-hidden relative`}
          style={{
            maxHeight: isExpanded ? '1000px' : '6rem',
            transition: 'max-height 0.5s ease-in-out',
          }}
        >
          {/* Render Markdown */}
          <ReactMarkdown className="prose prose-invert">
            {sanitizedDescription}
          </ReactMarkdown>

          {/* Fade effect */}
          {!isExpanded && (
            <div
              className={`absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-800 to-transparent`}
              style={{
                opacity: 1,
                pointerEvents: 'none',
                transition: 'opacity 0.5s ease-in-out',
              }}
            />
          )}
        </div>

        {/* Toggle Button */}
        <button
          className="mt-4 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-lg transition-all duration-300"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
