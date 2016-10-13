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

// toyotaSupra burnout
function toyotaSupra(make, model, engine, owner, rpm) {
    JDMTuner.call(this, make, model, engine, owner);

    this.rpm = rpm;
}

// nissanSkyline drift
function nissanSkyline(make, model, engine, owner, handbrake) {
    JDMTuner.call(this, make, model, engine, owner);

    this.rpm = rpm;
    this.handbrake = handbrake;
    this.turn = turn;
}

// subaruSTI rev
function subaruSTI(make, model, engine, owner, rpm, exhaust) {
    JDMTuner.call(this, make, model, engine, owner);

    this.rpm = rpm;
    this.exhaust = exhaust;
}

// mazdaRX7 race
function mazdaRX7(make, model, engine, owner, gears) {
    JDMTuner.call(this, make, model, engine, owner);

    this.gears = gears;
}

toyotaSupra.prototype.constructor = toyotaSupra;
nissanSkyline.prototype.constructor = nissanSkyline;
subaruSTI.prototype.constructor = subaruSTI;
mazdaRX7.prototype.constructor = mazdaRX7;

toyotaSupra.prototype.burnout = function () {
    if (this.rpm >= 5000) {
        return "You are doing a sick burnout!";
    }
    else {
        return "Your burnout is terrible";
    }
};

nissanSkyline.prototype.drift = function () {
    if (this.handbrake === true) {
        return "Your drifting!";
    }
    else {
        return "Your not drifting :(";
    }
};

subaruSTI.prototype.rev = function () {
    if (this.rpm >= 5000) {
        return "Your reving so good!";
    }
    else {
        return "Your rev is so quite";
    }
};

mazdaRX7.prototype.race = function (){
    for (var gear = this.gear; gear <= gears; gear++) {
        document.write(shift(gear) + " " + speedUp());
    }
};


function main() {

}
