class Mango {
    constructor(x,y,width,height) {
      this.image = loadImage("sprites/mango.png");
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    }
  };
