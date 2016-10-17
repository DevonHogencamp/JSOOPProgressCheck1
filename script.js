// Create the main class of JDM Tuner
var JDMTuner = function (make, model, engine, owner) {
    this.make = make;
    this.model = model;
    this.engine = engine;
    this.owner = owner;
    this.gear = 1;
    this.speed = 0;
    this.accelerationBase = 50;
    this.acceleration = 0;
};

JDMTuner.prototype.shift = function (gear) {
    if (this.gear < gear) {
        // If they shift up
        return "You shifted up, your current gear is " + gear;
    }
    else {
        // If they shifted down]
        return "You shifted down, your current gear is " + gear;
    }
};

JDMTuner.prototype.speedUp = function () {
    this.acceleration = this.accelerationBase / this.gear;

    this.speed = this.speed + this.acceleration;

    return "You speed up and your current speed is " + this.speed;
};

JDMTuner.prototype.slowDown = function () {
    this.acceleration = this.accelerationBase * this.gear;

    this.speed = this.speed - this.acceleration;

    return "You slowed down and your current speed is " + this.speed;
};

JDMTuner.prototype.displayVehicle = function (){
    document.write("<p>This car is a " + this.make + " " + this.model + " with a " + this.engine + " engine, and the owner is " + this.owner + "</p>");
};

// toyotaSupra burnout
function toyotaSupra(make, model, engine, owner, rpm) {
    JDMTuner.call(this, make, model, engine, owner);

    this.rpm = rpm;
}

// nissanSkyline drift
function nissanSkyline(make, model, engine, owner, handbrake) {
    JDMTuner.call(this, make, model, engine, owner);

    this.handbrake = handbrake;
}

// subaruSTI rev
function subaruSTI(make, model, engine, owner, rpm) {
    JDMTuner.call(this, make, model, engine, owner);

    this.rpm = rpm;
}

// mazdaRX7 race
function mazdaRX7(make, model, engine, owner, gears) {
    JDMTuner.call(this, make, model, engine, owner);

    this.gears = gears;
}

mazdaRX7.prototype.shift = function (gear) {
    JDMTuner.prototype.shift.call(this, gear);
};

mazdaRX7.prototype.speedUp = function () {
    JDMTuner.prototype.speedUp.call(this);
};

toyotaSupra.prototype.constructor = toyotaSupra;
nissanSkyline.prototype.constructor = nissanSkyline;
subaruSTI.prototype.constructor = subaruSTI;
mazdaRX7.prototype.constructor = mazdaRX7;

toyotaSupra.prototype.burnout = function () {
    if (this.rpm >= 5000) {
        document.write("<p>You are doing a sick burnout!</p>");
    }
    else {
        document.write("<p>Your burnout is terrible</p>");
    }
};

toyotaSupra.prototype.displayVehicle = function (){
    document.write("<h3>This car is a " + this.make + " " + this.model + " with a " + this.engine + " engine, and the owner is " + this.owner + "</h3>");
};


nissanSkyline.prototype.drift = function () {
    if (this.handbrake === true) {
        document.write("<p>Your drifting!</p>");
    }
    else {
        document.write("<p>Your not drifting :(</p>");
    }
};

nissanSkyline.prototype.displayVehicle = function (){
    document.write("<h3>This car is a " + this.make + " " + this.model + " with a " + this.engine + " engine, and the owner is " + this.owner + "</h3>");
};

subaruSTI.prototype.rev = function () {
    if (this.rpm >= 5000) {
        document.write("<p>Your reving so good!</p>");
    }
    else {
        document.write("<p>Your rev is so quite</p>");
    }
};

subaruSTI.prototype.displayVehicle = function (){
    document.write("<h3>This car is a " + this.make + " " + this.model + " with a " + this.engine + " engine, and the owner is " + this.owner + "</h3>");
};

mazdaRX7.prototype.shift = function (gear) {
    if (this.gear < gear) {
        // If they shift up
        return "You shifted up, your current gear is " + gear;
    }
    else {
        // If they shifted down]
        return "You shifted down, your current gear is " + gear;
    }
};

mazdaRX7.prototype.speedUp = function () {
    this.acceleration = this.accelerationBase / this.gear;

    this.speed = this.speed + this.acceleration;

    return "You speed up and your current speed is " + this.speed;
};

mazdaRX7.prototype.slowDown = function () {
    this.acceleration = this.accelerationBase * this.gear;

    this.speed = this.speed - this.acceleration;

    return "You slowed down and your current speed is " + this.speed;
};

mazdaRX7.prototype.race = function (){
    for (this.gears; this.gear <= this.gears; this.gear++) {
        document.write("<p>" + this.shift(this.gear) + " " + this.speedUp() + "</p>");
    }
};

mazdaRX7.prototype.displayVehicle = function (){
    document.write("<h3>This car is a " + this.make + " " + this.model + " with a " + this.engine + " engine, and the owner is " + this.owner + "</h3>");
};

function toyota() {
    var _toyotaSupra = new toyotaSupra("Toyota", "Supra", "2JZ", "Devon Hogencamp", 8000);

    document.write("<h1>Toyota Supra</h1>")
    _toyotaSupra.displayVehicle();
    _toyotaSupra.burnout();
}

function nissan() {
    var _nissanSkyline = new nissanSkyline("Nissan", "Skyline", "R34", "Brandon Ching", true);

    document.write("<h1>Nissan Skyline</h1>")
    _nissanSkyline.displayVehicle();
    _nissanSkyline.drift();
}

function subaru() {
    var _subaruSTI = new subaruSTI("Subaru", "STI", "EJ25", "Devon Hogencamp", 7000);

    document.write("<h1>Subaru STI</h1>")
    _subaruSTI.displayVehicle();
    _subaruSTI.rev();
}

function mazda() {
    var _mazdaRX7 = new mazdaRX7("Mazda", "RX7", "13B", "Brandon Ching", 5);

    document.write("<h1>Mazda RX7</h1>")
    _mazdaRX7.displayVehicle();
    _mazdaRX7.race();
}
