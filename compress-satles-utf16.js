const LZString = require('lz-string');
const fs = require('fs');

const currentJson = fs.readFileSync('new-satles-shuffled.json', 'utf8');

// Re-compress with UTF16 method (text-safe and excellent compression)
const newCompressed = LZString.compressToUTF16(currentJson);

// Write the new compressed file
fs.writeFileSync('public/satles-encoded.lz', newCompressed);

console.log('Successfully re-encoded satles-encoded.lz with UTF16 compression!');
