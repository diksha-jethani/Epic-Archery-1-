class CannonBall{
constructor(x,y){
    var option={
        isStatic:true
    }
    this.r=30;
    this.body=Bodies.circle(x,y,this.r,option)
    this.image=loadImage("./assets/cannonball.png");
    World.add(world,this.body);
}
    display(){
    var pos=this.body.position;
    push();
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r,this.r);
    pop();
    }

    shoot(){
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:20,y:-10});
    }
}