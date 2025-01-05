// Ye function ek hex string ko byte array mein convert karta hai
function hexToArray(hexString) {
    // Step 1: Naya byte array banayenge
    // hexString.length/2 isliye hai kyunki har byte 2 hex characters se banta hai
    // Example: "48" = 1 byte, toh "48656c6c6f" (10 characters) = 5 bytes
    const bytearray = new Uint8Array(hexString.length / 2);
    
    // Step 2: Har byte ke liye loop chalayenge
    for (let i = 0; i < bytearray.length; i++) {
        // Step 3: Har iteration mein:
        // i*2 se start karke 2 characters nikalenge hex string se
        // Example: Pehli baar "48", dusri baar "65", teesri baar "6c"...
        const hexPair = hexString.substr(i * 2, 2);
        
        // Step 4: parseInt(hexPair, 16) hex ko decimal number mein convert karta hai
        // "48" (hex) = 72 (decimal)
        // "65" (hex) = 101 (decimal)
        // "6c" (hex) = 108 (decimal)
        bytearray[i] = parseInt(hexPair, 16);
    }
    
    return bytearray;
}

// Example usage:
// "48656c6c6f" ye hex string hai jo "Hello" represent karti hai
const hex = "48656c6c6f";

// Is hex string ko byte array mein convert karenge
const StoringArrayFromHex = hexToArray(hex);

// Result print karenge
console.log(StoringArrayFromHex);