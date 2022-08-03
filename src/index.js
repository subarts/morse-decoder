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
    "**********": " ",
};
const dotDash={
    10: ".",
    11: "-",
    "**": "**",
    00: "00",
 
}
let a=[]
let b=[]
let c=[]
let g=0
let h=[]
let j=[]
function decode(expr) {
    let words=""
    for(let i=0;i<expr.length;){
        a=expr.slice(i,i+10)
        i=i+10
        for(let i=0;i<10;){
            b=a.slice(i,i+2)
            c=c.concat(b)
            h=h.concat(dotDash[(c[g])])
            if(h.length==5){
                j=j.concat(h.join(""))
                words=words.concat(MORSE_TABLE[(j[0])])
                h=[]
                j=[]
            }
        i=i+2
        g=g+1
        }
       
    }
return words

}
module.exports = {
    decode
}