// 01. Counting duplicate characters: Write a program that counts duplicate
// characters from a given string.

class CountDuplicateCharacters {

    constructor(text) {
        this.text = text;
    }

    countDuplicates() {
        // text = 'hello world'
        const arrayUniqueCharacters = new Array();
        const length = this.text.length;
        for (let i = 0; i < length; i++) {
            if (!this.isThere(this.text.charAt(i), arrayUniqueCharacters)) {
                arrayUniqueCharacters.push(this.text.charAt(i));
            }
        }
        const arrayCountingCharacters = new Array(arrayUniqueCharacters.length)
        for (let i = 0; i < arrayUniqueCharacters.length; i++) {
            const currentChar = arrayUniqueCharacters[i];
            arrayCountingCharacters[i] = this.getTotalRepetition(currentChar);
        }

        let answer = '';
        for (let i = 0; i < arrayUniqueCharacters.length; i++) {
            answer += arrayUniqueCharacters[i] + "=" + arrayCountingCharacters[i] + ", "
        }
        console.log(answer)
    }

    getTotalRepetition(char) {
        let count = 0;
        for (let i = 0; i < this.text.length; i++) {
            if (char == this.text.charAt(i)) {
                count++;
            }
        }
        return count;
    }

    isThere(char, array) {
        let i = 0;
        let found = false;
        while (i < array.length && !found) {
            if (char == array[i]) {
                found = true;
            }
            i++;
        }

        return found
    }


}

const txt = 'Programing, the limit is your imagination';
const obj = new CountDuplicateCharacters(txt);
obj.countDuplicates()
