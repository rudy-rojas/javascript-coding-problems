const reverseString = (text) => {
    let reverse = '';
    let beginIndex = 0;
    let endIndex = 0;
    let currentWord = '';
    for(let i = 0; i < text.length; i++) {
        if(text.charAt(i) == " " ||  i == text.length -1) {
            endIndex =(text.length -1)==i? i+1 :i;
            currentWord = text.substring(beginIndex, endIndex);
            // console.log('current: -' + currentWord+"-");
            beginIndex = i + 1;
            reverse += ' ' + reverseWord(currentWord);
        }
    }

    return reverse;
}


const reverseWord = (word) => {
    let answer = '';
    for(let i = word.length -1; i >= 0; i--) {
        answer += word.charAt(i);
    }
    return answer;
}
let text = 'Hello Rudy, are you there?';
console.log(reverseString(text));
// console.log(reverseString('hello world.'))