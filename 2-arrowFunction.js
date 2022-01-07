const square = function(x){
    return x * x
}

const squareArrow = (x) => x * x;

const eventThing = {
    name: 'birthday party',
    guesList: ['John', 'Mary', 'Janice', 'Paul'],
    guestList(){
        console.log('Guest list for ' + this.name);
        this.guesList.forEach((guest) => {
            console.log(`${guest} is attending the ${this.name}`)
        })
    }
}

eventThing.guestList()