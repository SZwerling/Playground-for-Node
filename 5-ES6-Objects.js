//object property shorthand

const name = 'Slim'
const userAge = 46


// const user = {
//     name: name,
//     userAge: userAge,
//     location: "Guadalajara"
// }
// can omit or shorten if property name and variable are the exact same word

const user = {
    name,
    userAge,
    location: "Guadalajara"
}

console.log(user)

//object destructuring

const product = {
    label: 'red notebook',
    price: '$25',
    stock: 201,
    salePrice: undefined
}

const { label:productLabel, price, stock, salePrice, notInObject } = product //can reassign variable name like label:productLabel 

//can also destructure in a function
const robot = {
    name: 'fred',
    humanoid: false
}

const isDeathMachine = (year, {name, humanoid}) => {
    if(!humanoid){
    console.log(`${name} is not a death machine in the year ${year}`)
    }
}

isDeathMachine(2022, robot)

