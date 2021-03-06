class Box 
{
  constructor(x, y, width, height)
  {
      var options = 
      {
        'restitution':0,
        'friction':1,
        'density':1.0
      }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255
    this.image = loadImage("download (7).png");
    World.add(world, this.body);
  }
  display()
  {
    var pos = this.body.position
    var angle = this.body.angle;
    if (this.body.speed < 3)
    {
      push();
      translate(this.body.position.x, this.body.position.y);
      fill("yellow")
      rotate(angle);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else
    {
      World.remove(world, this.body);
      //this.visibility -= 5;
      /*push();
      fill("yellow")
      imageMode(CENTER);
      image(this.body.position.x, this.body.position.y, this.width, this.height)
      pop();*/
    }
  }
}
