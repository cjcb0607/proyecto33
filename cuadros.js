class cuadros
{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x, y, 40, 6 , options);
        this.width = 40;
        this.height = 6;
        this.color=color(random(0,255),random(0,225),random(0,225));
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(this.color)
			rect(0,0,this.width, this.heigth);
			pop()
			
	}

}





