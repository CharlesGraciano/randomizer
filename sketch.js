// guitars I've owned

//array
let guitars = [];//{
 // name: "Gibson",
 // color: "ebony"
//}, {
 // name: "Fender",
//  color: "snow white"
//}, {
//  name: "Ibanez",
//  color: "natural satin"
//}, {
//  name: "Musicman",
//  color: "gold"
//}, {
//  name: "Epiphone",
//  color: "teaburst"
//}];

let randomIndex;
let animating = false;
let guitar = [];
let imageCounter = 0;
let button;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;


function preload() {

  for (let i = 0; i <= 18; i++) {
    guitar[i] = loadImage("guitar_" + i + ".jpg")

  }

}


function setup() {
  cnv = createCanvas(700, 700);
  cnv.parent("#canvasDiv");

  background(220);
  textSize(36);
  imageMode(CENTER);
  frameRate(8);

  text("click to random");


  button = select('#randButton')
  button.mousePressed(buttonPressed);
  
  addMoreButton = select('#addMoreButton')
  addMoreButton.mousePressed(addANotherInput);
  //button.class("randomizerButton");
  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
}

function draw() {

  if (animating == true) {
    clear();
    image(guitar[imageCounter], width / 2, height / 2);

    if (imageCounter < guitar.length - 1) {
      imageCounter++;
      //console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }
}

function addAnotherInput(){
  nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");

}

function randomizer() {
  animating = false;

  if (guitars[0]) {

    clear();
    randomIndex = int(random(guitars.length));


    image(random(guitar), width / 2, height / 2);
    text(guitars[randomIndex],width / 2, height - 55);
    //text(guitars[randomIndex].name + "'s best color is " + guitars[randomIndex].color, 100, 50);
    guitars.splice(randomIndex, 1);

  } else {
    background(random(200, 255));
    image(random(guitar), width / 2, height / 2);
    text("ROCK ON!", 70, 100);
  }
}

function buttonPressed() {
  
  if (firstTime == true)
  for(let i = 0; i < nameInputs.length; i++){
    guitars.push(nameInputs[i].value());
  
  } 
  
  firstTime == false;
  
  }
  
  animating = true;
  setTimeout(randomizer, 2000);

}
