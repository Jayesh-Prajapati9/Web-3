// Function that converts an ASCII string to an array of byte values
function asciiToBytes(asciiString) {
    // Initialize an empty array to store the byte values
    const byteArray = [];
    
    // Loop through each character in the ASCII string
    for (let i = 0; i < asciiString.length; i++) {
      // Convert the character at index 'i' to its corresponding byte value (ASCII code)
      byteArray.push(asciiString.charCodeAt(i));
    }
  
    // Return the array of byte values
    return byteArray;
  }
  
  // Example usage:
  const ascii = "Hello"; // A string that we want to convert to byte values
  const byteArray = asciiToBytes(ascii); // Calls the function to convert the string to byte array
  console.log(byteArray); // Output: [72, 101, 108, 108, 111]
  