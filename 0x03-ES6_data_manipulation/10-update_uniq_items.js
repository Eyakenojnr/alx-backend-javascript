export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    return map.forEach((value, key) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
  }

  // Throws an error if argument is not a map
  throw new Error('Cannot process');
}
