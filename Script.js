let body = document.querySelector("body");
const bulb = document.querySelector('.bulb');
const button = document.querySelector('button');
let light = 'off';

button.addEventListener('click', function() {
    if(light === 'off') {
        bulb.style.backgroundColor = "yellow"
        bulb.style.boxShadow = "0 0 30px 10px yellow"
        bulb.style.transform = "scale(1.03)"
        body.style.backgroundColor = "black"
        button.innerHTML = "Turn OFF"
        button.style.backgroundColor = "blue"
        button.style.color = "white"
        button.style.border = "1px solid white"
        light = 'on';
        document.querySelector("h1").style.color = "white"
        document.querySelector(".down-line-1").style.backgroundColor = "white"
        document.querySelector(".down-line-2").style.backgroundColor = "white"
        document.querySelector(".down-line-3").style.backgroundColor = "white"
        document.querySelector(".down-line-4").style.backgroundColor = "white"
        
    
    } else {
        body.style.backgroundColor = "white"
        bulb.style.backgroundColor = 'transparent';
        bulb.style.transform = "none"
        document.querySelector("h1").style.color = "black"
        bulb.style.boxShadow = "none"
        button.innerHTML = "Turn ON"
        button.style.border = "1px solid black"
        light = 'off';
        document.querySelector(".down-line-1").style.backgroundColor = "rgb(77, 67, 67)"
        document.querySelector(".down-line-2").style.backgroundColor = "rgb(77, 67, 67)"
        document.querySelector(".down-line-3").style.backgroundColor = "rgb(77, 67, 67)"
        document.querySelector(".down-line-4").style.backgroundColor = "rgb(77, 67, 67)"
    }
});






