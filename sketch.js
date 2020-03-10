// guitars I've owned


let guitars = [{
  name: "Gibson",
  color: "ebony"
}, {
  name: "Fender",
  color: "snow white"
}, {
  name: "Ibanez",
  color: "natural satin"
}, {
  name: "Musicman",
  color: "gold"
}, {
  name: "Epiphone",
  color: "teaburst"
}];

let randomIndex;
let animating = false;
let guitar = [];
let imageCounter = 0;
let button;

function preload() {

  for (let i = 0; i <= 18; i++) {
    guitar[i] = loadImage("guitar_" + i + ".jpg")

  }

}


function setup() {
  createCanvas(700, 700);
  background(220);
  textSize(36);
  imageMode(CENTER);
  frameRate(8);

  text("click to random");

 
  button = select('#randButton')
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");


}

function draw() {

  if (animating == true) {
    clear();
    image(guitar[imageCounter], width / 2, height / 2);

    if (imageCounter < guitar.length - 1) {
      imageCounter++;
  
    } else {
      imageCounter = 0;
    }
  }
}


function randomizer() {
  animating = false;

  if (guitars[0]) {

    clear();
    randomIndex = int(random(guitars.length));
  

    image(random(guitar), width / 2, height / 2);
    text(guitars[randomIndex].name + "'s best color is " + guitars[randomIndex].color, 100, 50);
    guitars.splice(randomIndex, 1);

  } else {
    background(random(200, 255));
    image(random(guitar), width / 2, height / 2);
    text("ROCK ON!", 70, 100);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
