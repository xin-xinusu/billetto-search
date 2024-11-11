// src/types/event.ts
export interface Event {
  id: string;
  title: string;
  description: string;
  url: string;
  image_link: string;
  availability: boolean;
  organiser_name: string;
  minimum_price: number;
  currency: string;
  category: string;
  subcategory: string;
  event_type: string;
  location_name: string;
  address_line: string;
  city: string;
  postal_code: string;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
  start_date: string;
  end_date: string;
  vector_embedding: number[];
}
