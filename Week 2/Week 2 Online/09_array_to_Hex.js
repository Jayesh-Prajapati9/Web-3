// This function converts a byte array into a hexadecimal string
function arrayToHex(byteArray) {
    // Initialize an empty string to store the final hex values
    let hexString = '';
    
    // Loop through each byte in the array
    for (let i = 0; i < byteArray.length; i++) {
        // For each byte:
        // 1. toString(16) converts the number to hex (base-16)
        // 2. padStart(2, '0') ensures each hex number is 2 digits by adding leading zeros if needed
        // For example: 5 becomes "05", 10 becomes "0a"
        hexString += byteArray[i].toString(16).padStart(2, '0');
    }
    
    // Return the complete hex string
    return hexString;
}

// Create a sample byte array with values from 1 to 10
const byteArray = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Convert the byte array to hex string by calling our function
const hexString = arrayToHex(byteArray);

// Print the result
console.log(hexString); // Prints: "0102030405060708090a"