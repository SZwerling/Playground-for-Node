setTimeout(() => {
    console.log("yummy!")
}, 2000)


const names = ['Slim', 'Captain', 'Wilfredo', 'Pa'];

const shortNames = names.filter((name) => {
    return name.length <= 5;
})

console.log(shortNames)

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            address: address,
            lattitude: 0,
            longitude: 0
        }
        callback(data) //this says were calling the callback with data as the argument
    }, 2000)
}

geocode('Los Angeles', (getMe) => {  //getMe will take data and console.log data
    console.log(getMe)
})

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!



const add = (a, b, callback) => {
    setTimeout(() => {
        const total = a + b;
        callback(total)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})