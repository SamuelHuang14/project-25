class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          friction:0.5,
          density:1.2,
      }
      this.radius = 120;
      this.body = Bodies.circle(x, y, (this.radius-20), options);
      this.image = loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
  };