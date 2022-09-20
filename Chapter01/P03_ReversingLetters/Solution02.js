const reverseStringV2 = (text) => {
    let reverse = '';
    let words = text.split(String.fromCharCode(32));
    for(i = 0; i < words.length; i++) {
        if( i > 0) {
            reverse += ' ';
        }
        reverse += reverseWord(words[i]);
    }
    return reverse;
}

const reverseWord = (word) => {
    let ans = '';
    let i = word.length - 1;
    //let i = 0;
    while(i >= 0) {
        ans += word.charAt(i);
        i--;
    }
    return ans;
}

const text = 'Hello JS is Awesome!';
console.log(reverseStringV2(text));