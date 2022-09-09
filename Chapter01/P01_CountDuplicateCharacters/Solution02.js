class CountDuplicateCharacters {
    uniqueCharacters = new Map();
    constructor(txt) {
        this.text = txt;
    }

    countDuplicates() {
        const size = this.text.length;
        for(let i = 0; i < size; i++) {
            let currentChar = this.text.charAt(i);
            if(!this.uniqueCharacters.has(currentChar)) {
                let count = this.text.split(currentChar).length - 1;
                this.uniqueCharacters.set(currentChar,count);
            }
        }

        this.uniqueCharacters.forEach((value, key) => {
            console.log(`${key}=${value}`)
        })
    }


}


const test01 = new CountDuplicateCharacters('hello world')
test01.countDuplicates();