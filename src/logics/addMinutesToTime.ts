export const addMinutesToTime = (
  timeString: string,
  minutesToAdd: number,
): string => {
  // Parse the hours and minutes from the time string
  let timeParts = timeString.split(':');
  let hours = parseInt(timeParts[0], 10);
  let minutes = parseInt(timeParts[1], 10);

  // Create a new Date object with the input time
  let date = new Date();
  date.setHours(hours, minutes, 0, 0);

  // Add the number of minutes to the date
  date.setMinutes(date.getMinutes() + minutesToAdd);

  // Format the new time as "hh:mm"
  let hoursResult = date.getHours().toString();
  let minutesResult = date.getMinutes().toString().padStart(2, '0');
  let result = hoursResult + ':' + minutesResult;

  return result;
};
