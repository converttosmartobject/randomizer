
let randomIndex;
let animating = false;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];

let roster = [];

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
    fill(random(255), random(255), random(255));
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
  background(random(200, 255));
randomIndex = int(random(roster.length));
text(roster[randomIndex],300,300);
// text(roster[randomIndex].book,200,200);
// text(roster[randomIndex].movie,400,400);
roster.splice(randomIndex,1);
} else {
  background(0);
  textSize(100);
  text("nothing left.", 10, 700);
  fill(255);
}
}
function buttonPressed() {
  animating = true;
setTimeout(randomizer, 2000);
}
