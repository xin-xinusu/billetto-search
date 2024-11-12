

// Create Tags off of the categorization and location data - for example - Music in Copenhagen
export const generateTags = (categorization: any, location: any): string[] => {
  const tags: string[] = [];

  // Add location-based tags
  if (location.city) {
    tags.push(`Events in ${location.city}`);
  }
  if (categorization.type_localized && location.city) {
    tags.push(`${categorization.type_localized} in ${location.city}`);
  }
  if (categorization.category_localized && location.city) {
    tags.push(`${categorization.category_localized} in ${location.city}`);
  }
  if (categorization.subcategory_localized && location.city) {
    tags.push(`${categorization.subcategory_localized} in ${location.city}`);
  }

  return tags;
}