const array1 = [5, 12, 8, 130, 44];

const found = array1.find(el => {
    return el > 10
})

console.log(found)

var inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

console.log(inventory.find(fruit => fruit.name === 'cherries'))