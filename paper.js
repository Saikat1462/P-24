class Paper {
    constructor(x,y,radius) {
        var options = {
            'density':1.5,
            'friction': 1.0,
            'restitution':0.5
            
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world, this.body);
    }
    display() {
        var pos =this.body.position;
        fill("green")
        circle(pos.x,pos.y,this.radius)
    }
}