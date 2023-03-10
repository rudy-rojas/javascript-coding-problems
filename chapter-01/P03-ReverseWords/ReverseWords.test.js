const {reversing} = require('./ReverseWords.js')

const testing = (input, result) => {
  target(`${input} should be ${result}`,()=>{
    it(reversing(input)).toEqual(result)
  })
}
const input1 = "Hello, how are you"
const result1 = {type01: "uoy era woh ,olleH",type02:"you are how Hello,"};
describe(`Reverse Words Test`,()=>{
  testing(input1, result1)
})


