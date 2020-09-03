
let console, on, speed, speedometer, interval;

function loadParams() {
    console = document.getElementById("log");
    speedometer = document.getElementById("speedometer");
    on = false;
    speed = 0;
    interval = 90;
}

function turnOn() {
    if(!on) {
        sendMessage("Turning on");
        on = true;
    } else {
        sendMessage("Turning off");
        on = false;
    }
}

function turnOff() {
    sendMessage("Turning off");
    on = false;
}

function sendMessage(message) {
    var node = document.createElement("p");
    node.innerHTML = "<br /><b>CC:</b> " + message;
    console.appendChild(node);
    console.scrollTop = console.scrollHeight;
}

function accelerate() {
    interval = setInterval(increaseSpeed, interval);
}

function stopAccelerate() {
    clearInterval(interval);
    interval = 90;
}

function increaseSpeed() {
    speed++;
    printSpeed();
}

function brake() {
    if(on) turnOff;
    interval = setInterval(decreaseSpeed, interval);
}

function stopBrake() {
    clearInterval(interval);
    interval = 90;
}

function decreaseSpeed() {
    if(speed > 0) speed--;
    printSpeed();
}

function printSpeed() {
    speedometer.innerHTML = speed + "mph";
}