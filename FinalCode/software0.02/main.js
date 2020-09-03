
let console, on, speed, speedometer, interval;
let temp_speed = 0;
let set = false;

function loadParams() {
    console = document.getElementById("log");
    speedometer = document.getElementById("speedometer");
    on = false;
    speed = 0;
    interval = 90;
}

function setSpeed() {
    if(!on) return;
    if(set){
        if(speed > 0) sendMessage("Decreasing Speed");
        decreaseSpeed();
    }else{
        temp_speed = speed;
        sendMessage("Set speed to " + speed);
        set = true;
    }
}

function sleep(milliseconds) {
    sendMessage("Speed" + speed);
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function resSpeed() {
    if(!on) return;
    if(set){
        sendMessage("Increasing Speed");
        increaseSpeed();
    }else{
        if(temp_speed == 0) return;
        sendMessage("Resetting Speed");
        if(speed < temp_speed){
            while(speed < temp_speed){
                increaseSpeed();
            }
        }else{
            while(speed > temp_speed){
                decreaseSpeed();
            }
        }
    }
}

function turnOn() {
    if(!on) {
        sendMessage("Turning on");
        on = true;
    } else {
        sendMessage("Turning off");
        on = false;
        temp_speed = 0;
    }
}

function turnOff() {
    sendMessage("Turning off");
    on = false;
    set = false;
    temp_speed = 0;
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
    if(set)sendMessage("Speed not set anymore")
    set = false;
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