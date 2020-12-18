var wall,thickness; 
var bullet,speed,weight; 

function setup() { 
    createCanvas(1600,400); 
    
    speed=random(223,321) 
    weight=random(32,51) 
    thichness=random(22,83)
    
    wall=createSprite(1200,200,thickness,height/2);
    
    if (wall.x-car<(car.width+wall.width)/2)
    {
       car.velocityX=0;
       var deformation=0.5 * weight * speed * speeed/22509; 
        
    if (deformation>180)
    { 
        Car.shapeColour=colour(255,0,0); 
    } 
        
    if (deformation<180 && deformation>100)
    { 
        car.shapeColour=colour(230,230,0); 
    } 
        
    if (deformation<100)
    { 
        car.shapeColour=colour(0,225,0); 
    }
    } 
    } 
    
    function draw() { 
        background(0); 
        drawSprites(); } 

function hascollided(lbullet, lwall) 
{
    bulletRightEdge=lbullet.x +bullet.width;
    wallLeftEdge=lwall.x;

    if(bulletRightEdge>=wallLeftEdge)
    {
        return true;   
    }
      return false;

    if(hascollided(bullet, wall))
    {
       bullet.velocityX=0;
       var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

       if(damage>10)
       {
          wall.shapeColour=colour(225,0,0);
       }    
          
        if(damage<10)
        {
            wall.shapeColour=colour(0,225,0);
        }


    }


    }


