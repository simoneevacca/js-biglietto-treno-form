
const distanceElement = document.getElementById('distance')
const ageElement = document.getElementById('age')
const passengerName = document.getElementById('name')
const minorsDiscount = 0.2;
const over65Discount = 0.4;
console.log("LOG TEST " + distanceElement.value);
console.log("LOG TEST " + ageElement.value);
console.log("LOG TEST " + passengerName.value);













document.querySelector('button').addEventListener('click',
function(){
    let ticketPrice = distanceElement.value * 0.21;
    
    console.log(distanceElement.value * 0.21);
    console.log(ageElement.value)
    console.log(passengerName.value);

    
    document.getElementById('ticketname').innerHTML = passengerName.value




    if (ageElement.value < 18) {
        
        ticketPrice = ticketPrice - ticketPrice * minorsDiscount
        
    } else if (ageElement.value > 64) {
        
        ticketPrice = ticketPrice - ticketPrice * over65Discount
        
    }
    
    console.log("ticket price is: " + ticketPrice);
})
