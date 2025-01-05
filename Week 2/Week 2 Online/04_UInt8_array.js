let bytes = new Uint8Array([0, 255, 127, 128]);

// Uint8Array is a typed array that represents an array of unsigned 8-bit integers (bytes).
// Each value must be between 0 and 255 (inclusive), as it represents a single byte.
// It is commonly used to handle binary data or byte arrays, with each element being a byte.
// For example:
//   0   -> 00000000  (binary representation)
//  255  -> 11111111  (binary representation)
//  127  -> 01111111  (binary representation)
//  128  -> 10000000  (binary representation)
console.log(bytes);
