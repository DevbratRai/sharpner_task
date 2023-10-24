console.log("Person1: Shows Tickt");
console.log("Person2: Shows Tickt");

const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ticket");
    },3000)
})

const getPopcorn = promiseWifeBringingTicks.then((t)=>{
    console.log("wife: I have the ticks");
    console.log("Husband: we should go in");
    console.log("wife: no i am hungry");
    return new Promise((resolve,reject)=> resolve(`${t} popcorn`))
})
const getButter = getPopcorn.then((t)=>{
    console.log("husband: I got some popcorn");
    console.log("Husband: we should go in");
    console.log("wife: I need butter in my popcorn");
    return new Promise((resolve,reject)=> resolve(`${t} butter`))
}) 

const getColdDrinks = getButter.then((t)=>{
    console.log("husband: I got butter ");
    console.log("Wife: I want coldDrinks");
    return new Promise((resolve,reject)=> resolve(`${t} coldDrinks`)) 
})

getColdDrinks.then((t)=> console.log(t));

console.log("person4:shows ticket");
console.log("person5:shows ticket");



