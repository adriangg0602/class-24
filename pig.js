class pig {
    constructor(x,y,width,height)
    {
        var options={
            restitution: 1,
            'friction':0.3,
          'density':1.0
        }
        this.body= Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width=width;
        this.height=height;
    }
    display()
    {
        var pos=this.body.position
        push();
        rotate(this.body.angle);
        rectMode(CENTER)
        fill("green")
        rect(pos.x,pos.y,this.width,this.height)
        pop();

    }
    
};