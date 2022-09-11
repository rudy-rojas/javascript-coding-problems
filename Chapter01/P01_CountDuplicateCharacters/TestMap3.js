
const users = new Map();
users.set(1, { name: 'Lucianita', email: 'lucianita@gmail.com', age: 1 })
users.set(2, { name: 'Fabiola', email: 'fabiola@gmail.com', age: 32 })
users.set(3, { name: 'Rudy', email: 'rudy@gmail.com', age: 36 })
users.set(4, { name: 'Kevin', email: 'kevin@gmail.com', age: 28 })
users.set(4, { name: 'Ruben', email: 'ruben@gmail.com', age: 22 })

console.log(`size: ${users.size}`)
console.log(`has id 3 ${users.has(3)}`);
console.log(`delete id 3 ${users.delete(3)}`)
console.log(`delete id 3 again ${users.delete(3)}`)

// method 01
users.forEach((value, key) => {
    console.log(`User name: ${value.name} Email: ${value.email}`)
})

// method 02
for (const [key, value] of users.entries()) {
    console.log(`id=${key}  name=${value.name}`)
}

// method 03
for (const key of users.keys()) {
    console.log(`key: ${key}`)
}

for (const value of users.values()) {
    console.log(`email: ${value.email}`)
}
console.log(users)
users.clear();
console.log(users)



