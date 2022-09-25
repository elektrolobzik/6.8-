const trafficLightEl1 = document.querySelector('#trafficLight1');
function makeRed() {
    trafficLightEl1.style.background = ('Red');
    trafficLightEl1.removeEventListener('click', makeRed);
    trafficLightEl1.addEventListener('click', makeGreen);
}
trafficLightEl1.addEventListener('click', makeRed);


const trafficLightEl2 = document.querySelector('#trafficLight2');
function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', makeRed);
}
trafficLightEl2.addEventListener('click', makeYellow);

const trafficLightEl3 = document.querySelector('#trafficLight3');
function makeGreen() {
    trafficLightEl3.style.background = ('green');
    trafficLightEl3.removeEventListener('click', makeGreen);
    trafficLightEl3.addEventListener('click', makeYellow);
}
trafficLightEl3.addEventListener('click', makeGreen);

const generLight = document.querySelector('#generLight');

// не получилось