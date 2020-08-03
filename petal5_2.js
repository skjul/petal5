
let angle = 0;
// var face 

function setup() {

createCanvas(400,400);
angleMode(DEGREES);

}

 // function mousePressed(){
 //   face.clicked();
 // }

// var hues = [color('#CDEBF9'), color('#939EF0'), color('#9AC7F0'), color('#4EF31E'), color('#e5e6ec'), color('#12D98C'), color('#FA5DD0'), color('#94FBD4'), color('#EBFFA6'), color('#C3F765'), color('#0A28E1')];
 
// var hue = hues [int(random(0,hues.length))]

// translate (200, 200);
// noStroke();
// fill(hues[int(random(0, hues.length))]);
// ellipse(0,0,140);


   
//  // big smile 
//   push();
//   rotate (-angle);
//   push();
//   noStroke();
//   fill(0);
//   ellipse(-25,-20,6);
//   fill(0);
//   ellipse(25,-20,6);
//   noFill();
//   stroke(0);
//   strokeWeight(2);
//   arc(0, 10, 50, 50, 0, 180)
//    pop();
  
//    pop();
   
//    // big smile end
  

  
 function draw() {
 
  background (255);
   

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
  
  translate(300, 300); 
//DELETE BELOW DASHES TO ACTIVATE 
   rotate(angle);
   push();
  noStroke();
  fill(230,255,100);
  ellipse(0,0,30);
  angle = angle + 1;
  pop();
   pop();
   
      push();
  
  translate(300, 100); 
//DELETE BELOW DASHES TO ACTIVATE 
    rotate(angle);
   push();
  noStroke();
  fill(230,255,100);
  ellipse(0,0,30);
  pop();
   pop();
 
   
    push();
  
  translate(100, 100); 
//DELETE BELOW DASHES TO ACTIVATE 
  rotate(angle);
   push();
  noStroke();
  fill(230,255,100);
  ellipse(0,0,30);
  pop();
   pop();
   
     
    push();
  
  translate(100, 300); 
//DELETE BELOW DASHES TO ACTIVATE 
    rotate(angle);
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
   rotate(angle);
   push();
  noStroke();
  fill(212,237,250);
  ellipse(0,0,30);
  pop();
   pop();
   
     push();
  
  translate(340, 200); 
//DELETE BELOW DASHES TO ACTIVATE 
   rotate(angle);
   push();
  noStroke();
  fill(212,237,250);
  ellipse(0,0,30);
  pop();
   pop();
   
   
     push();
  
  translate(60, 200); 
//DELETE BELOW DASHES TO ACTIVATE 
    rotate(angle);
   push();
  noStroke();
  fill(212,237,250);
  ellipse(0,0,30);
  pop();
   pop();
   
   
     push();
  
  translate(200, 340); 
//DELETE BELOW DASHES TO ACTIVATE 
   rotate(angle);
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
    

// face
   
//    function mousePressed(){


// var hues = [color('#CDEBF9'), color('#939EF0'), color('#9AC7F0'), color('#4EF31E'), color('#e5e6ec'), color('#12D98C'), color('#FA5DD0'), color('#94FBD4'), color('#EBFFA6'), color('#C3F765'), color('#0A28E1')];
 
// var hue = hues [int(random(0,hues.length))]

// translate (200, 200);
// noStroke();
// fill(hues[int(random(0, hues.length))]);
// ellipse(0,0,140);

   // //   // big blu
   push();
  translate(200,200);
 noStroke();
 fill('#9AC7F0');
 ellipse(0,0,140);
   pop();
   
   
if (mouseIsPressed){
 
push();
var hues = [color('#CDEBF9'), color('#939EF0'), color('#9AC7F0'), color('#4EF31E'), color('#e5e6ec'), color('#12D98C'), color('#FA5DD0'), color('#94FBD4'), color('#EBFFA6'), color('#C3F765'), color('#0A28E1')];
 
var hue = hues [int(random(0,hues.length))]

translate (200, 200);
noStroke();
fill(hues[int(random(0, hues.length))]);
ellipse(0,0,140);
pop();
  
    }
   
   

   
//  // big smile 
  push();
  translate (200, 200);
  rotate (-angle);
  push();
  noStroke();
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
   
//    // big smile end
  
   
   // clicked() {
   // let d = dist(mouseX, mouseY, 200, 200);
   // if (d < 70) {
   //   console.log("clicked on face");
     

}
