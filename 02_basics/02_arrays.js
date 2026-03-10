const mcu = ["thor" , "ironman"] 

const dc  =["batman" , "superman"]

// mcu.push(dc)

// console.log(mcu)
// console.log(mcu[2][0])

const all = mcu.concat(dc)

console.log(all)  

/// spread  method 

const alll = [...mcu , ...dc]
// console.log(alll)

const another_array=  [1,[1,2,3],[1,3,[4,5]]]
const eal_another_array = another_array.flat(Infinity)
// console.log(eal_another_array)


console.log(Array.isArray("piyush"))
console.log(Array.from("piyush"))

console.log(Array.from({name:"hitesh"}))    /// hitesh 
let score1 = 100
let score2 = 200
let score3= 300

console.log(Array.of(score1,score2,score3))