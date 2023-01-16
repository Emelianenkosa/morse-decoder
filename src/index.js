const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arrayExpr = expr.match(/.{1,10}/g);
    
    
    for(let i=0; i<arrayExpr.length; i++) {
        arrayExpr[i] = arrayExpr[i].replace(/00/g, '');
        arrayExpr[i] = arrayExpr[i].replace(/10/g, '.');
        arrayExpr[i] = arrayExpr[i].replace(/11/g, '-');
        arrayExpr[i] = arrayExpr[i].replace('**********', 'space');
    }
    
    for(let i=0;i<arrayExpr.length; i++) {
        if (arrayExpr[i] === 'space') {arrayExpr[i] = ' ' } else
        arrayExpr[i] = MORSE_TABLE[arrayExpr[i]];
    };

    let str = arrayExpr.join('');
    //str = str.replace(/place/g, ' ');

    return str;
}

module.exports = {
    decode
}