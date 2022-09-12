
class FindFirstNonRepeatedChar {

    constructor(text) {
        this.text = text;
    }

    getFirstNonRepeatedChar() {
        let ans = '';
        let i = 0;
        while (i < this.text.length && ans == '') {
            if (this.#getRepeatedQuantities(this.text.charAt(i)) == 1) {
                ans = this.text.charAt(i);
            }
            else {
                i++;
            }
        }
        return ans;
    }

    #getRepeatedQuantities(char) {
        let count = 0;
        const size = this.text.length;
        for (let i = 0; i < size; i++) {
            if (char == this.text.charAt(i)) {
                count++;
            }
        }
        return count;
    }

    #getRepeatedQuantitiesV2(char) {
        let count = 0;
        let i = 0;
        let size = this.text.length;
        while (i < size && count <= 1) {
            if (char == this.text.charAt(i)) {
                count++;
            }
            i++;
        }
        return count;
    }

}

const text = 'how are you today? h';
const test2 = new FindFirstNonRepeatedChar(text);
console.log(test2.getFirstNonRepeatedChar());