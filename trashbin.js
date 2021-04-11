class Trash {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 250, 250, options);
      this.width = 250;
      this.height = 250;
      this.image = loadImage("Dustbin.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      strokeWeight (0.01);
      stroke("white");
      fill(255);
      image(this.image, 1000, 540, this.width, this.height);
    }
  };
