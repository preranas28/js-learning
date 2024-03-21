

const set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(20);
set.add(50);
console.log(set);
console.log(`total elements in set : ${set.size}`);

console.log(`-----------Delete an element from set----------`);
set.delete(30);
console.log(set);

console.log(`-----------to check element available or not set----------`);
const is50Available = set.has (50);
console.log(`${is50Available}`);

const is100Available = set.has (100);
console.log(`${is100Available}`);


console.log(`----------Traversing set--------------`);
for (const element of set) {
    console.log(element);
}


