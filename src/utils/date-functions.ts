


// Presents date in a user-friendly format - Month Date Year Start Time - End Time
export const formatEventDate = (startDate: string, endDate: string, timeZone: string = 'Europe/Copenhagen'): string => {
  const optionsDate: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  const optionsTime: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Danish time zone (or any other provided time zone)
  const locale = navigator.language; // or use a specific locale like 'da-DK' for Danish

  // Format start date and time
  const formattedStartDate = new Intl.DateTimeFormat(locale, { ...optionsDate, timeZone }).format(start);
  const formattedStartTime = new Intl.DateTimeFormat(locale, { ...optionsTime, timeZone }).format(start);

  // Format end time
  const formattedEndTime = new Intl.DateTimeFormat(locale, { ...optionsTime, timeZone }).format(end);

  // Combine everything
  return `${formattedStartDate} ${formattedStartTime} - ${formattedEndTime}`;
};
