


// Presents date in a user friendly format - Month Date Year Start Time - End Time  
export const formatEventDate = (startDate: string, endDate: string): string => {
  const optionsDate: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  const optionsTime: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Localize date and time using the user's current locale
  const locale = navigator.language;

  // Format start date and time
  const formattedStartDate = start.toLocaleDateString(locale, optionsDate);
  const formattedStartTime = start.toLocaleTimeString(locale, optionsTime);

  // Format end time
  const formattedEndTime = end.toLocaleTimeString(locale, optionsTime);

  // Combine everything
  return `${formattedStartDate} ${formattedStartTime} - ${formattedEndTime}`;
};