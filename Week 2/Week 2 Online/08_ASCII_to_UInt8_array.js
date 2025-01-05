// Function that converts an ASCII string to a byte array (Uint8Array)
function asciiToBytes(asciiString) {
    // Spread the string into an array of characters, then map each character to its corresponding ASCII byte value
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
  }
  
  // Example usage:
  const ascii = "Rohan Dev"; // The ASCII string to convert
  const byteArray = asciiToBytes(ascii); // Calls the function to convert the string to a byte array
  console.log(byteArray); // Output: Uint8Array [82, 111, 104, 97, 110, 32, 68, 101, 118]
  