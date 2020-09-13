var hr , mn,sec 
var mnAngle , hrAngle , scAn

function setup() {
  createCanvas(800,800);
}

function draw() {
  //angleMode(DEGREES);
  background(0,0,0);
  translate(200,200)
rotate(-90)
  hr = hour();
  mn = minute();
  sec = second();

  scAngle  = map(sec,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr % 12,0,12,0,360)

    push();
    rotate(scAngle)
  stroke(0,0,255) 
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(mnAngle)
  stroke(255,255,0)
  strokeWeight(7)
  line(0,0,75,0)
pop()

push()
rotate(hrAngle)
stroke(255,100,0)
strokeWeight(7)
line(0,0,50,0)
pop()



stroke(0,0,255)
point(0,0)
strokeWeight(7)
noFill()
stroke(0,0,255)
arc(0,0,300,300,0,scAngle)

stroke(255,255,0)
arc(0,0,280,280,0,mnAngle)

stroke(255,100,0)
arc(0,0,260,260,0,hrAngle)



  drawSprites();
}