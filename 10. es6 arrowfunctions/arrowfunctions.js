let evens = [0, 2, 4, 6]

console.log(odds  = evens.map(v => v + 1));
console.log(pairs = evens.map(v => ({ even: v, odd: v + 1 })))
console.log(nums  = evens.map((v, i) => v + i))
