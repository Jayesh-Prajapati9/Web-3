const crypto = require('crypto');

let input = ""
let count = 0;
while (true) {
    input="harkirat => Raman | Rs 100 Ram => Ankit | Rs 10"+count.toString();
    const hash = crypto.createHash('sha256').update(input).digest('hex');
    if (hash.startsWith("00000")) {
        console.log(hash)
        break;
    }
    count++;

}
console.log(input)
