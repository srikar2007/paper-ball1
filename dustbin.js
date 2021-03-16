class Dustbin{
constructor(x,y){
    this.x=x
    this.y=y
    this.dustinWidth=200
    this.dustbin.height=213
    this.wallThickness=20

    this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true});
    this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness);

    this.rightWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness);

    World.add(world,this.bottomBody)
    World.add(world,this.rightWallBody)
    World.add(world,this.leftWallBody)
}
display(){
    var posBottom = this.bottomBody.position;
    var posRight = this.rightWallBody.position;
    var posLeft = this.leftWallBody.position;

    push()
    translate(posLeft.y,posLeft.x)
    rectMode(CENTER)
    strokeWeight(4);
    angleMode(RADIANS);
    fill(255)
    rotate(this.angle)
    rect(0,0,this.wallThickness,this.dustbinHeight);
    pop()

    push()
    translate(posLeft.y,posLeft.x)
    rectMode(CENTER)
    strokeWeight(4);
    angleMode(RADIANS);
    fill(255)
    rotate(-1*this.angle)
    rect(0,0,this.wallThickness,this.dustbinHeight);
    pop()

    push()
    translate(posBottom.x,posBottom.y+10)
    rectMode(CENTER)
    strokeWeight(4);
    angleMode(RADIANS);
    fill(255)
    rect(0,0,this.wallThickness,this.dustbinHeight);
    pop()

}
}