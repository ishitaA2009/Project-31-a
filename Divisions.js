class Divisions{
 constructor(x,y,width,height){
     var options={
         isStatic:true
     }

     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=w;
     this.height=h;
     World.add(world,this.body);
 }

 display(){
     var pos = this.body.position;
     rectMode(CENTER);
     fill("white");
     rect(pos.x,pos.y,this.w,this.h);
 }
}