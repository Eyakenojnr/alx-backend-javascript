export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  return [...set]
    .filter((value) => value.startsWith(startString)) // Filter values that start with startString
    .map((value) => value.slice(startString.length)) // Remove the startString from the value
    .join('-'); // Join the remaining parts with '-'
}
