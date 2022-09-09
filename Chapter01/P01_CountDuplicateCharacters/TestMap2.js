
const map01 = new Map();
map01.set('b', 1)
map01.set('a', 5)

console.log(map01)
console.log(map01.get('a')) // 5
map01.has('b') //return true
map01.delete('c') // return false
map01.size // 2

map01.forEach((value, key) => {
    console.log(`${key}=${value}`);
})

for (const [key, value] of map01.entries()) {
    console.log(`${key}=${value}`); // b = 1      a = 5
}

for (const key of map01.keys()) {
    console.log(`key=${key}`); // key=b    key=a
}

for (const value of map01.values()) {
    console.log(`value=${value}`); //value=1   value=5
}
map01.clear();

console.log(map01)