export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Checking if endpoint is already in the weakMap
  const currentCount = weakMap.get(endpoint) || 0;

  // Incrementing count of the endpoint
  weakMap.set(endpoint, currentCount + 1);

  // Throw an error if current count is more than 4
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
