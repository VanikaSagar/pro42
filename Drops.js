class Drops{
    constructor(x,y){
        var options={
            friction:0.1
        }
        this.radius=5
        this.rain=Bodies.circle(x,y,this.radius,options)
        World.add(world,this.rain)
    }

    showDrop(){
        fill("blue")
        ellipseMode(CENTER)
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
    }

    update(){
        if(this.rain.position.y>height){
            Matter.body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
}