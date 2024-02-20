const distanceElement = document.getElementById('distance')
console.log(distanceElement.value);

const ageElement = document.getElementById('age')
console.log(ageElement.value);

document.querySelector('button').addEventListener('click',
function(){
    console.log(distanceElement.value * 0.21);
})