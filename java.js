// Function to calculate the difference between start and end times
function calculateTimeDifference(startTime, endTime) {
  // Convert time strings to Date objects
  const startDateTime = new Date(`1970-01-01T${startTime}`);
  const endDateTime = new Date(`1970-01-01T${endTime}`);
  //These lines create two new Date objects, startDateTime and endDateTime, from the input startTime and endTime strings.
  //The Date constructor takes a string argument representing a date and time.
  //The format used here, 1970-01-01T${startTime}, combines the fixed date "1970-01-01" with the provided startTime string using template literals.
  // This ensures that both start and end times are compared using the same base date.

  // Calculate the time difference in milliseconds
  const timeDifferenceMs = endDateTime - startDateTime;
}
