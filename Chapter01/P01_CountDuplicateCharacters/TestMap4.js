
const map = new Map();
map.set('wp1', { user: 'rudy', email: 'rudy.rs231@gmail.com', status: true })
map.set('wp2', { user: 'Lu', email: 'lucianit@gmail.com', status: false })
map.set('wp3', { user: 'Faby', email: 'fabi@gmail.com', status: true })
map.set('wp4', { user: 'Ara', email: 'araceli@gmail.com', status: false })
map.set('wp5', { user: 'kevin', email: 'kevin1@gmail.com', status: true })

console.log(map.has('wp4'))
console.log(map.get('wp5'))
console.log(map.set('wp5', { user: 'kargel', email: 'kargel2@gmail.com' }))
console.log(map.get('wp5'))

console.log(`size= ${map.size}`)

map.forEach((value, key) => {
    console.log(`key=${key} name=${map.get(key).user}`)
})

for (const [key, value] of map) {
    console.log(`key=${key} name=${value.user} status=${(value.status) ? 'Enable' : 'Disabled'}`)
}

for (const value of map.values()) {
    console.log(`email: ${value.email}`)
}