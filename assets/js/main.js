
const distanceElement = document.getElementById('distance')
const ageElement = document.getElementById('age')
const passengerName = document.getElementById('name')
const minorsDiscount = 0.2;
const over65Discount = 0.4;
console.log("LOG TEST " + distanceElement.value);
console.log("LOG TEST " + ageElement.value);
console.log("LOG TEST " + passengerName.value);




document.getElementById('calc').addEventListener('click',
    function () {
        let ticketPrice = distanceElement.value * 0.21;

        console.log(distanceElement.value * 0.21);
        console.log(ageElement.value)
        console.log(passengerName.value);


        document.getElementById('ticketname').innerHTML = passengerName.value
        document.getElementById('nc').innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById('cp').innerHTML = Math.floor(Math.random() * 99998) + 1;


        if (ageElement.value < 18) {

            ticketPrice = ticketPrice - ticketPrice * minorsDiscount
            document.getElementById('offer').innerHTML = 'Sconto minorenni'
            

        } else if (ageElement.value > 64) {

            ticketPrice = ticketPrice - ticketPrice * over65Discount
            document.getElementById('offer').innerHTML = 'Sconto pensionati'
        
        } else {
            document.getElementById('offer').innerHTML = 'Biglietto Standard'

        }

        console.log("ticket price is: " + ticketPrice);
        document.getElementById('cost').innerHTML = ticketPrice.toFixed(2) + '€';

    })

    

    document.getElementById('del').addEventListener('click',
    function () {

        distanceElement.value = '';
        ageElement.value = '';
        passengerName.value = '';
        document.getElementById('ticketname').innerHTML = '-';
        document.getElementById('nc').innerHTML = '-';
        document.getElementById('cp').innerHTML = '-';
        document.getElementById('cost').innerHTML = '-';
        document.getElementById('offer').innerHTML = '-';

    })