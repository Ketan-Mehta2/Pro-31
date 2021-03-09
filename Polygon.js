class Polygon{
    constructor(x, y, r) {
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("octagon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 30, 30);
        pop();
      }
}