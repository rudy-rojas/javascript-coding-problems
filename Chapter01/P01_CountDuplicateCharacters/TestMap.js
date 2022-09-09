
const map01 = new Map();
map01.set('a', 23);
map01.set('b', 3);
map01.set('c', 87);
map01.set('d', 7);

console.log(map01.get('c'));

map01.set('c', 100);


console.log(map01.get('c'));

console.log(map01.size)
map01.delete('c')

console.log(map01.size)
console.log(map01)


const contacts = new Map();
contacts.set('Lucianita', {phone: 79712345, address:'123 N 1st ave'})
contacts.set('Fabiola', {phone: 79232432, address:'Av. America N 23'})
contacts.set('Rudy', {phone: 79712441, address:'Calle. Chaco 22'})
contacts.set('Kevin', {phone: 79722111, address:'Av. Galindo 112'})
contacts.set('Ruben', {phone: 79799878, address:'Av. Galindo 119'})


console.log(contacts.has('Rudy'))
console.log(contacts.has('Peter'))
console.log(contacts.get('Lucianita'))

console.log(contacts.size)


for( const [key, value] of contacts.entries()) {
    console.log( key +  '=' + value.phone  )
}



for (const [key, value] of contacts.entries()) {

}

for( const key of contacts.keys()) {

}

for( const value of contacts.values()) {

}



















