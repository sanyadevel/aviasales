export const getUtcTimestampToLocalTimezone = (
  timestamp: string,
  timezone = 'America/Los_Angeles',
): string => {
  const date = new Date(timestamp);
  const localDate = new Date(
    date.toLocaleString('en-US', { timeZone: timezone }),
  );

  const formattedTime = localDate.toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
  });

  return formattedTime;
};
