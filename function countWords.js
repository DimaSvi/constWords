const fs = require('node:fs');

fs.readFile('undertale.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const wordCount = countWords(data);
    console.log("Кількість слів", wordcount);
});

function countwords(text) { 
    const words = text.trim().split(/\s+/);
return text.trim() ?
words.length : 0;
}