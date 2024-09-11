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
  const hours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
  const minutes = Math.floor(
    (timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((timeDifferenceMs % (1000 * 60)) / 1000);
  //timeDifferenceMs calculates the difference between the two timestamps in milliseconds.
  //hours calculates the number of hours by dividing the total milliseconds by the number of milliseconds in an hour (1000 * 60 * 60).
  //minutes calculates the remaining minutes after subtracting the hours, using a similar approach.
  //seconds calculates the remaining seconds after subtracting hours and minutes.

  return { hours, minute, second };
}
const categorySelect = document.getElementById("activity");
const selectedCategory = categorySelect.value;
// access the selected category
