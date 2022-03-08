// NO COLLAR

// TODO: Need to fix getPlates as it does not calculate some numbers eg 332
var largePlate = 450;

var twenty_five = {
  width: 64,
  height: 450,
  weight: 25,
  xi: 546,
  yi: 45,
}

var twenty = {
  width: 54,
  height: 450,
  weight: 20,
  xi: 610,
  yi: 45,
}

var fifteen = {
  width: 42,
  height: 450,
  weight: 15,
  xi: 664,
  yi: 45,
}

var ten = {
  width: 34,
  height: 450,
  weight: 10,
  xi: 706,
  yi: 45,
}

var five = {
  width: 26.5,
  height: 230,
  weight: 5,
  xi: 740,
  yi: 156,
}

var two_five = {
  width: 19,
  height: 190,
  weight: 2.5,
  xi: 767,
  yi: 165,
}

var two = {
  width: 19,
  height: 190,
  weight: 2,
  xi: 786,
  yi: 176,
}

var one_five = {
  width: 18,
  height: 175,
  weight: 1.5,
  xi: 805,
  yi: 183,
}

var one = {
  width: 15,
  height: 160,
  weight: 1,
  xi: 823,
  yi: 190,
}

var zero_five = {
  width: 13,
  height: 135,
  weight: 0.5,
  xi: 838,
  yi: 204
}

var collar = {
  width: 77,
  height: 101,
  weight: 2.5,
  xi: 851,
  yi: 220,
}

var weights = [25, 20, 15, 10, 5, 2.5, 2, 1.5, 1, 0.5];

var xi = 66;
var yi = 171;
var barWeight = 20;
var plate = [];
var sleeveLength = 415;

function setup() {
  createCanvas(1024, 768);
  input = createInput();
  input.position(20, 65);
  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(getPlates);

  text1 = createElement('h2', 'Enter weight:');
  text1.position(20, 5);
  textAlign(CENTER);
  textSize(50);
}

// TODO: ADD COLLAR TO getPlates

function getPlates() {
  var weight = input.value();
  text1.html(weight);
  input.value('');

  // TODO: Change weight limit 
  if (weight <= 20 || weight >= 275) {   
    text1.html('not possible');
  } else {
    var toRack = [];
    var left = weight - barWeight;
    var time = 0;
    while (left > 0) {
      var found = false;
      for (var i = 0; i < weights.length; i++) {
        var amt = weights[i] * 2;
        if (amt <= left) {
          left -= amt;
          toRack[time] = weights[i];
          time++;
          found = true;
          break;
        }
      }
      if (!found) {
        toRack = []
        break;
      }
      text1.html(toRack)
      console.log(weight);  // Delete this later
    }
    plate = toRack;
  }
}



function draw() {
  background(255); // TODO: Change to black
  drawBarbell();
  drawPlates();
}

function drawBarbell() {
  // Barbell
  // TODO: Add knurling lines

  fill(220);
  rect(0, 384, 36, 25); // shaft
  rect(66, 371, 415, 51); // sleeve (length: 415)
  rect(35, 346, 32, 101); // sleeve lip
}



function drawPlates() {
  for (var i = 0; i <= plate.length; i++) {

    // Previous plates
    var pl0 = twenty_five.width;
    if (plate[i - 1] == 20) {
      pl0 = twenty.width;
    } else if (plate[i - 1] == 15) {
      pl0 = fifteen.width;
    } else if (plate[i - 1] == 10) {
      pl0 = ten.width;
    } else if (plate[i - 1] == 5) {
      pl0 = five.width;
    } else if (plate[i - 1] == 2.5) {
      pl0 = two_five.width;
    } else if (plate[i - 1] == 2) {
      pl0 = two.width;
    } else if (plate[i - 1] == 1.5) {
      pl0 = one_five.width;
    } else if (plate[i - 1] == 1) {
      pl0 = one.width;
    } else if (plate[i - 1] == 0.5) {
      pl0 = zero_five.width;
    }

    /******************************************************/

    if (plate[i] == 25) {
      fill(255, 0, 0);
      translate(pl0, 0);
      rect(0, twenty_five.yi + 126, twenty_five.width, twenty_five.height);
    } else if (plate[i] == 20) {
      fill(0, 0, 255);
      translate(pl0, 0);
      rect(0, twenty.yi + 126, twenty.width, twenty.height);
    } else if (plate[i] == 15) {
      fill(255, 255, 0)
      translate(pl0, 0);
      rect(0, fifteen.yi + 126, fifteen.width, fifteen.height);
    } else if (plate[i] == 10) {
      fill(0, 255, 0)
      translate(pl0, 0);
      rect(0, ten.yi + 126, ten.width, ten.height);
    } else if (plate[i] == 5) {
      fill(255)
      translate(pl0, 0);
      rect(0, five.yi + 126, five.width, five.height);
    } else if (plate[i] == 2.5) {
      fill(255, 0, 0)
      translate(pl0, 0);
      rect(0, two_five.yi + 126, two_five.width, two_five.height);
    } else if (plate[i] == 2) {
      fill(0, 0, 255)
      translate(pl0, 0);
      rect(0, two.yi + 126, two.width, two.height);
    } else if (plate[i] == 1.5) {
      fill(255, 255, 0)
      translate(pl0, 0);
      rect(0, one_five.yi + 126, one_five.width, one_five.height);
    } else if (plate[i] == 1) {
      fill(0, 255, 0)
      translate(pl0, 0);
      rect(0, one.yi + 126, one.width, one.height);
    } else if (plate[i] == 0.5) {
      fill(255)
      translate(pl0, 0);
      rect(0, zero_five.yi + 126, zero_five.width, zero_five.height);
    }
  }
}

