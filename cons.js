class Cons{
    constructor(bodyA,bodyB){
    var prop={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.1,
        length:20
    }
    this.cons=Constraint.create(prop)
    World.add(world,this.cons)
    }
    display(){
        line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y)
    }
}