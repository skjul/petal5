let angle = 0;

function setup() {

createCanvas(400,400);
angleMode(DEGREES);


}

  
 function draw() {
  background (255);
  
  push();
  translate (200,200);
  rotate (-angle);
  push();
  ellipseMode(CENTER);
  noStroke();
  fill(230,255,100);
  ellipse(0,0,140);
  fill(0);
  ellipse(-25,-20,6);
  fill(0);
  ellipse(25,-20,6);
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(0, 10, 50, 50, 0, 180)
   pop();
  
   pop();

   // purp flowers
   push();
push();
  translate(100,100);
  rotate(-angle);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    fill(228,200,239);
    ellipse(0, 15, 15, 40);
    rotate(180/5);
  }
   pop();
   
   push();
  translate(300,100);
  rotate(-angle);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    fill(228,200,239);
    ellipse(0, 15, 15, 40);
    rotate(180/5);
  }
   
  pop();
   
    push();
  translate(100,300);
  rotate(-angle);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    fill(228,200,239);
    ellipse(0, 15, 15, 40);
    rotate(180/5);
  }
   
  pop();
   
     push();
  translate(300,300);
  rotate(-angle);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    fill(228,200,239);
    ellipse(0, 15, 15, 40);
    rotate(180/5);
  }
   
  pop();
   
   
   // greenflowers
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
   
  
   // yellow circle
 
 push();
  
  translate(200, 200); 
//DELETE BELOW DASHES TO ACTIVATE 
  // rotate(angle);
   push();
  noStroke();
  fill(230,255,100);
  ellipse(100,100,30);
  angle = angle + 1;
  pop();
   pop();
   
      push();
  
  translate(300, 100); 
//DELETE BELOW DASHES TO ACTIVATE 
  // rotate(angle);
   push();
  noStroke();
  fill(230,255,100);
  ellipse(0,0,30);
  pop();
   pop();
 
   
    push();
  
  translate(100, 100); 
//DELETE BELOW DASHES TO ACTIVATE 
  // rotate(angle);
   push();
  noStroke();
  fill(230,255,100);
  ellipse(0,0,30);
  pop();
   pop();
   
     
    push();
  
  translate(100, 300); 
//DELETE BELOW DASHES TO ACTIVATE 
  // rotate(angle);
   push();
  noStroke();
  fill(230,255,100);
  ellipse(0,0,30);
  pop();
   pop();
   
   // blu circle 
   
     push();
  
  translate(200, 60); 
//DELETE BELOW DASHES TO ACTIVATE 
  // rotate(angle);
   push();
  noStroke();
  fill(212,237,250);
  ellipse(0,0,30);
  pop();
   pop();
   
     push();
  
  translate(340, 200); 
//DELETE BELOW DASHES TO ACTIVATE 
  // rotate(angle);
   push();
  noStroke();
  fill(212,237,250);
  ellipse(0,0,30);
  pop();
   pop();
   
   
     push();
  
  translate(60, 200); 
//DELETE BELOW DASHES TO ACTIVATE 
  // rotate(angle);
   push();
  noStroke();
  fill(212,237,250);
  ellipse(0,0,30);
  pop();
   pop();
   
   
     push();
  
  translate(200, 340); 
//DELETE BELOW DASHES TO ACTIVATE 
  // rotate(angle);
   push();
  noStroke();
  fill(212,237,250);
  ellipse(0,0,30);
  pop();
   pop();
   
  
   // smiles 
   
push();
  translate(300, 300); 
//DELETE BELOW DASHES TO ACTIVATE 
  rotate(-angle);
  ellipseMode(CENTER);
  push();
  fill(0);
  ellipse(-05,-05,2);
  fill(0);
 ellipse(5,-05,2);
  noFill();
  stroke(0);
  strokeWeight(2);
arc(0, 2, 10, 10, 0, 180)
pop();
   pop();
   
   push();
  translate(100, 100); 
//DELETE BELOW DASHES TO ACTIVATE 
  rotate(-angle);
  ellipseMode(CENTER);
  push();
  fill(0);
  ellipse(-05,-05,2);
  fill(0);
 ellipse(5,-05,2);
  noFill();
  stroke(0);
  strokeWeight(2);
arc(0, 2, 10, 10, 0, 180)
pop();
   pop();
   
     push();
  translate(300, 100); 
//DELETE BELOW DASHES TO ACTIVATE 
  rotate(-angle);
  ellipseMode(CENTER);
  push();
  fill(0);
  ellipse(-05,-05,2);
  fill(0);
 ellipse(5,-05,2);
  noFill();
  stroke(0);
  strokeWeight(2);
arc(0, 2, 10, 10, 0, 180)
pop();
   pop();
   
       push();
  translate(100, 300); 
//DELETE BELOW DASHES TO ACTIVATE 
  rotate(-angle);
  ellipseMode(CENTER);
  push();
  fill(0);
  ellipse(-05,-05,2);
  fill(0);
 ellipse(5,-05,2);
  noFill();
  stroke(0);
  strokeWeight(2);
arc(0, 2, 10, 10, 0, 180)
pop();
   pop();
   
   //unhappies 
   
   push();
  translate(200, 60); 
//DELETE BELOW DASHES TO ACTIVATE 
  rotate(angle);
  ellipseMode(CENTER);
  push();
  fill(0);
  ellipse(-05,-05,2);
  fill(0);
 ellipse(5,-05,2);
  noFill();
  stroke(0);
  strokeWeight(2);
   push();
   rotate(180);
arc(0, -6, 10, 10, 0, 180)
   pop();
pop();
   pop();

    push();
  translate(60, 200); 
//DELETE BELOW DASHES TO ACTIVATE 
  rotate(angle);
  ellipseMode(CENTER);
  push();
  fill(0);
  ellipse(-05,-05,2);
  fill(0);
 ellipse(5,-05,2);
  noFill();
  stroke(0);
  strokeWeight(2);
   push();
   rotate(180);
arc(0, -6, 10, 10, 0, 180)
   pop();
pop();
   pop();
 
 push();
  translate(340, 200); 
//DELETE BELOW DASHES TO ACTIVATE 
  rotate(angle);
  ellipseMode(CENTER);
  push();
  fill(0);
  ellipse(-05,-05,2);
  fill(0);
 ellipse(5,-05,2);
  noFill();
  stroke(0);
  strokeWeight(2);
   push();
   rotate(180);
arc(0, -6, 10, 10, 0, 180)
   pop();
pop();
   pop();
   
    push();
  translate(200, 340); 
//DELETE BELOW DASHES TO ACTIVATE 
  rotate(angle);
  ellipseMode(CENTER);
  push();
  fill(0);
  ellipse(-05,-05,2);
  fill(0);
 ellipse(5,-05,2);
  noFill();
  stroke(0);
  strokeWeight(2);
   push();
   rotate(180);
arc(0, -6, 10, 10, 0, 180)
   pop();
pop();
   pop();
  
}
