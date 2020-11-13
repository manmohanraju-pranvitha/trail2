class Paper {
    constructor(x,y,r){
var option={
    isStatic:false,
    friction:0.5,
    restitution:0.3,
    density:1.2
}

this.body=Bodies.circle(x,y,r/5,option);
this.x=x;
this.y=y;
this.r=r/2
this.image=loadImage("paper.png");


World.add(world,this.body);
    }
    display(){
var paperpos=this.body.position;
push();
translate(paperpos.x,paperpos.y);
imageMode(CENTER);
image(this.image,0,0,this.r,this.r);
pop();
    }
}