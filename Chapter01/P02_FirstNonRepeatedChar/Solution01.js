
class FirstNonRepeated {
    constructor(txt) {
        this.text = txt;
    }

    findFirstNonRepeatedChar() {
        let answer = '';
        let i = 0;
        const sizeString = this.text.length;
        while (i < sizeString && answer == '') {
            if (this.#getRepetitionOfChar(this.text.charAt(i)) == 1) {
                answer = this.text.charAt(i);
            } else {
                i++;
            }
        }
        return answer;
    }

    #getRepetitionOfChar(char) {
        return this.text.split(char).length - 1;
    }

}

const text = 'hello world, hi'
const test = new FirstNonRepeated(text);
console.log(test.findFirstNonRepeatedChar())