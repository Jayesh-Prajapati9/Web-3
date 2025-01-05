// Function that converts a byte array (Uint8Array) to an ASCII string
function bytesToAscii(byteArray) {
    // Use the TextDecoder API to decode the byte array into a string
    return new TextDecoder().decode(byteArray);
  }
  
  // Example usage:
  const bytes = new Uint8Array([72, 101, 108, 108, 111]); // A Uint8Array with ASCII byte values corresponding to "Hello"
  const asciiString = bytesToAscii(bytes); // Calls the function to decode the byte array into a string
  console.log(asciiString); // Output: "Hello"
  