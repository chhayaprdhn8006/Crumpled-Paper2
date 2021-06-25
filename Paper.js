class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius,options);
      this.radius = radius;
      World.add(world, this.body); 
      this.image = loadImage("paper.png");
      
    }
    display(){
      var pos = this.body.position;
      //var angle = this.body.angle;
      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      circle(pos.x, pos.y, this.radius);
      //pop();
      image(this.image, pos.x, pos.y, 80, 80);
    }
  };