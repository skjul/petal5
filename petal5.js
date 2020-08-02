let angle = 0;
function setup() {
createCanvas(400,400);
angleMode(DEGREES);

}

 function draw() {
  background (255);
  push();
  noStroke();
  fill(255, 255, 0);
  ellipse(200,200,140);
  fill(0);
  ellipse(175,180,6);
  fill(0);
  ellipse(225,180,6);
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(200, 210, 50, 50, 0, 180)
   pop();
   // flowers
   push();
push();
  translate(100,100);
  rotate(angle);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    fill(228,200,239);
    ellipse(0, 15, 15, 40);
    rotate(180/5);
  }
   pop();
   push();
  translate(300,100);
  rotate(angle);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    fill(228,200,239);
    ellipse(0, 15, 15, 40);
    rotate(180/5);
  }
  pop();
    push();
  translate(200,60);
  rotate(angle);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    fill(0,255,100);
    ellipse(0, 15, 15, 40);
    rotate(180/5);
  }
  pop();
       push();
translate(200,340);
  rotate(angle);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    fill(0,255,100);
    ellipse(0, 15, 15, 40);
    rotate(180/5);
  }
  pop();
   push();
  translate(100,300);
  rotate(angle);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    fill(228,200,239);
    ellipse(0, 15, 15, 40);
    rotate(180/5);
  }
  pop();
    push();
  translate(300,300);
  rotate(angle);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    fill(228,200,239);
    ellipse(0, 15, 15, 40);
    rotate(180/5);
  }
  pop();
     push();
  translate(60,200);
  rotate(angle);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    fill(0,255,100);
    ellipse(0, 15, 15, 40);
    rotate(180/5);
  }
  pop();
    push();
translate(340,200);
  rotate(angle);
  noStroke();
  for (let i = 0; i < 10; i ++) {
  fill(0,255,100);
    ellipse(0, 15, 15, 40);
    rotate(180/5);
  }
  pop();
   // end flowers 
   // yellow circle
 push();
  translate(200, 200); 
//DELETE BELOW DASHES 4 A SURPISE 
  // rotate(angle);
   push();
  noStroke();
  fill(230,255,100);
  ellipse(100,100,30);
  angle = angle + 1;
  pop();
   pop();
   // smile 
push();
  translate(200, 200); 
//DELETE BELOW DASHES 4 A SURPISE  
  // rotate(angle);
   push();
  fill(0);
  ellipse(95,95,2);
  fill(0);
 ellipse(105,95,2);
  noFill();
  stroke(0);
  strokeWeight(2);
arc(100, 102, 10, 10, 0, 180)
pop();
   pop();
 }
