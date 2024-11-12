

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

export const getInitials = (name: string): string => {
  if (!name) return "A"; // Fallback to 'A' if the name is empty

  const parts = name.trim().split(/\s+/); // Split by whitespace
  const firstInitial = parts[0]?.[0]?.toUpperCase() || ""; // First character of the first name
  const lastInitial = parts.length > 1 ? parts[parts.length - 1][0]?.toUpperCase() : ""; // First character of the last name

  return `${firstInitial}${lastInitial}`; // Combine first and last initials
};

export const getRandomColor = (): string => {
  const colors = [
    "#F59E0B", "#EC4899", "#14B8A6", "#6366F1", "#A855F7", // Original Colors
    "#E11D48", "#EF4444", "#F97316", "#84CC16", "#10B981", // Extended Colors
    "#06B6D4", "#3B82F6", "#8B5CF6", "#9333EA", "#EAB308", 
    "#F43F5E", "#4ADE80", "#22D3EE", "#60A5FA", "#A78BFA",
    "#FB923C", "#34D399", "#38BDF8", "#818CF8", "#C084FC",
    "#D97706", "#059669", "#2563EB", "#7C3AED", "#A3E635", 
    "#DC2626", "#FACC15", "#F472B6", "#5EEAD4", "#D946EF"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};