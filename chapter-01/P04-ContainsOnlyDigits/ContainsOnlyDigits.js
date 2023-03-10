const isOnlyDigits = (str) => {
	return (/(^[0-9]+$)/.test(str))
}

// const input = '133432'
// console.log(isOnlyDigits(input))

module.exports = isOnlyDigits;