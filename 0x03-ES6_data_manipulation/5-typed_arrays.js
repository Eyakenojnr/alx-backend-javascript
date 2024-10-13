export default function createInt8TypedArray(length, position, value) {
  // Creating ArrayBuffer of specified length
  const buffer = new ArrayBuffer(length);
  // Creating a DataView to manipulate the buffer
  const int8 = new DataView(buffer);

  // Throw error if position is out of range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set the Int8 value at the specified position
  int8.setInt8(position, value);

  // Return the DataView
  return int8;
}
