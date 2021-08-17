class snow{

constructor (x,y,width,height){

var options={
friction:3,
density:1,

}

this.body=Matter.Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
this.image = loadImage ("snow4.webp")

Matter.World.add(world,this.body)

 }

 display(){


    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height) 


 }





  }