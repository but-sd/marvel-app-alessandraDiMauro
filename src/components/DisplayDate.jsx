import { format } from "date-fns";

/**
 * Display a formatted date
 * @param {*} date
 * @returns The formatted date if it is valid, or an error message if it is invalid
 */
export function DisplayDate( {date }) {
  // Handle invalid dates gracefully
  if (isNaN(new Date(date))) {
    return <span>Invalid Date</span>;
  }

  return format(new Date(date), "PP");
}