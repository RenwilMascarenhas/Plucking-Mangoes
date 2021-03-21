class Tree {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/tree.png");
    }
  };

  class Tree {
    constructor(x,y,width,height) {
      this.image = loadImage("sprites/tree.png");
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