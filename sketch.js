
let randomIndex;
let animating = false;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];
let roster = [];
let firstTime = true;

function  setup() {

cnv = createCanvas(600,600);
cnv.parent("#canvasDiv");
textSize(30);
textStyle(BOLD);
background(255);
fill(0);

startRandomizerButton = select("#randButton");
startRandomizerButton.mousePressed(buttonPressed);

addMoreButton = select("#addMoreButton");
addMoreButton.mousePressed(addAnotherInput);

for (let i = 0; i < 3; i++) {
nameInputs.push(createInput());
nameInputs[nameInputs.length - 1].parent("#inputFields");
}

}

function draw() {
  if(animating == true){
    fill(255);
    noStroke();
    ellipse(random(width), random(height), random(40, 300));
  }
}

function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}

function randomizer(){
  animating = false;
  if (roster[0]) {
  background(random(255));
randomIndex = int(random(roster.length));
text(roster[randomIndex],300,300);
roster.splice(randomIndex,1);
} else {
  background(0);
  textSize(50);
  text("nothing left.", 250, 550);
  fill(random(255), random(255), random(255));
}
}

function buttonPressed() {

if (firstTime == true){
  for (let i = 0; i < nameInputs.length; i++) {
    roster.push(nameInputs[i].value());
  }
  firstTime = false;
}

  animating = true;
setTimeout(randomizer, 2000);
}
