// Function that converts an array of byte values to an ASCII string
function bytesToAscii(byteArray) {
    // The map function processes each byte in the array.
    // It converts each byte to a character using String.fromCharCode().
    // The join() method combines the array of characters into a single string.
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
  }
  
  // Example usage:
  const bytes = [72, 101, 108, 108, 111]; // Corresponds to ASCII values of "H", "e", "l", "l", "o"
  const asciiString = bytesToAscii(bytes); // Calls the function to convert the byte array to a string
  console.log(asciiString); // Output: "Hello"
  