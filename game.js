
var stena1X=8000,stena1Y=6000,stena2X=8000,stena2Y=6000,stena3X=8000,stena3Y=6000,stena4X=8000,stena4Y=6000,coints=4,live1=15,live2=15,live3=15,live4=15,posoka=Math.floor(Math.random()*9),aptechkaX=8000,aptechkaY=8000,power=-1,q=0,noj1X=88888888888888888888888,noj1Y=666666666666666666666,noj2X=8888888888888888888888,noj2Y=66666666666666666666666666,noj3X=8888888888888888888888,noj3Y=66666666666666666666666666,noj4X=8888888888888888888888,noj4Y=66666666666666666666666666,noj5X=8888888888888888888888,noj5Y=66666666666666666666666666,noj6X=8888888888888888888888,noj6Y=66666666666666666666666666,noj7X=8888888888888888888888,noj7Y=66666666666666666666666666,noj8X=8888888888888888888888,noj8Y=66666666666666666666666666,gg=false,gg1=false,t=0,teleporterX=80000000000000000000000000000000,teleporterY=6000000000000000000000000;

class Guner{
    constructor (x_, y_, team_){
        this.x = x_;
        this.y = y_;
        this.team = team_;
        this.live = 50;
    }
    
    draw(){
       context.fillStyle = this.team;
   context.beginPath();
        context.arc(this.x, this.y, 20, 0, 2*Math.PI);
        context.fill();
        if (this.live >= 0){context.fillRect(this.x - this.live/2, this.y-35, this.live, 3);}
    }
    
    kill(){
        if (this.live <= 0){return;}
        for (let i=0; i<bullet.length; ++i){
            if (bullet[i].team != this.team && areCircleColliding(bullet[i].x, bullet[i].y, 5, this.x, this.y, 25)){
                this.live -= 10;
                bullet[i] = bullet[bullet.length-1];
                bullet.pop();
                --i;
          
            }
        }
                for (let i=0; i<bullet.length; ++i){
                  if (areCircleColliding(bullet[i].x, bullet[i].y, 5, stena1X, stena1Y, 90)){
    bullet[i] = bullet[bullet.length-1];
         bullet.pop();
           --i;
--live1;
         }
                }
                       for (let i=0; i<bullet.length; ++i){
                  if (areCircleColliding(bullet[i].x, bullet[i].y, 5, stena2X, stena2Y, 90)){
    bullet[i] = bullet[bullet.length-1];
         bullet.pop();
           --i;
--live2;
         }
                }
                       for (let i=0; i<bullet.length; ++i){
                  if (areCircleColliding(bullet[i].x, bullet[i].y, 5, stena3X, stena3Y, 90)){
    bullet[i] = bullet[bullet.length-1];
         bullet.pop();
           --i;
               --live3;
         }
                }
                       for (let i=0; i<bullet.length; ++i){
                  if (areCircleColliding(bullet[i].x, bullet[i].y, 5, stena4X, stena4Y, 90)){
    bullet[i] = bullet[bullet.length-1];
         bullet.pop();
           --i;
                 --live4;
         }
                }

           if (areCircleColliding(hero.x, hero.y, 20, aptechkaX, aptechkaY, 50)){
            hero.live+=30;
               aptechkaX=8000;
                aptechkaY=6000;
        }
       
                if (areCircleColliding(friend[i=0].x,friend[i=0].y, 20, aptechkaX, aptechkaY, 50)){
            friend[i=0].live+=30;
               aptechkaX=8000;
                aptechkaY=6000;
        }
                        if (areCircleColliding(friend[i=1].x,friend[i=1].y, 20, aptechkaX, aptechkaY, 50)){
            friend[i=1].live+=30;
               aptechkaX=8000;
                aptechkaY=6000;
        }
                            if (areCircleColliding(friend[i=2].x,friend[i=2].y, 20, aptechkaX, aptechkaY, 50)){
            friend[i=2].live+=30;
               aptechkaX=8000;
                aptechkaY=6000;
        }

                        if (areCircleColliding(vrag[i=0].x,vrag[i=0].y, 20, aptechkaX, aptechkaY, 50)){
            vrag[i=0].live+=30;
               aptechkaX=8000;
                aptechkaY=6000;
        }
                        if (areCircleColliding(vrag[i=1].x,vrag[i=1].y, 20, aptechkaX, aptechkaY, 50)){
            vrag[i=1].live+=30;
               aptechkaX=8000;
                aptechkaY=6000;
        }
                            if (areCircleColliding(vrag[i=2].x,vrag[i=2].y, 20, aptechkaX, aptechkaY, 50)){
            vrag[i=2].live+=30;
               aptechkaX=8000;
                aptechkaY=6000;
        }
                            if (areCircleColliding(vrag[i=3].x,vrag[i=3].y, 20, aptechkaX, aptechkaY, 50)){
            vrag[i=3].live+=30;
               aptechkaX=8000;
                aptechkaY=6000;
        }
   
                        if (areCircleColliding(vrag1[i=0].x,vrag1[i=0].y, 20, aptechkaX, aptechkaY, 50)){
            vrag1[i=0].live+=30;
               aptechkaX=8000;
                aptechkaY=6000;
        }
                        if (areCircleColliding(vrag1[i=1].x,vrag1[i=1].y, 20, aptechkaX, aptechkaY, 50)){
            vrag1[i=1].live+=30;
               aptechkaX=8000;
                aptechkaY=6000;
        }
                            if (areCircleColliding(vrag1[i=2].x,vrag1[i=2].y, 20, aptechkaX, aptechkaY, 50)){
            vrag1[i=2].live+=30;
               aptechkaX=8000;
                aptechkaY=6000;
        }
                            if (areCircleColliding(vrag1[i=3].x,vrag1[i=3].y, 20, aptechkaX, aptechkaY, 50)){
            vrag1[i=3].live+=30;
               aptechkaX=8000;
                aptechkaY=6000;
        }

             if (areCircleColliding(hero.x, hero.y, 20,noj1X,noj1Y, 5)){
            hero.live-=10;
              noj1X=8000;
                noj1Y=6000;
        }
                if (areCircleColliding(hero.x, hero.y, 20,noj2X,noj2Y, 5)){
            hero.live-=10;
              noj2X=8000;
                noj2Y=6000;
        }
                if (areCircleColliding(hero.x, hero.y, 20,noj3X,noj3Y, 5)){
            hero.live-=10;
              noj3X=8000;
                noj3Y=6000;
        }
                if (areCircleColliding(hero.x, hero.y, 20,noj4X,noj4Y, 5)){
            hero.live-=10;
              noj4X=8000;
                noj4Y=6000;
        }
                if (areCircleColliding(hero.x, hero.y, 20,noj5X,noj5Y, 5)){
            hero.live-=10;
              noj5X=8000;
                noj5Y=6000;
        }
                if (areCircleColliding(hero.x, hero.y, 20,noj6X,noj6Y, 5)){
            hero.live-=10;
              noj6X=8000;
                noj6Y=6000;
        }
                if (areCircleColliding(hero.x, hero.y, 20,noj7X,noj7Y, 5)){
            hero.live-=10;
              noj7X=8000;
                noj7Y=6000;
        }
                if (areCircleColliding(hero.x, hero.y, 20,noj8X,noj8Y, 5)){
            hero.live-=10;
              noj8X=8000;
                noj8Y=6000;
        }              if (areCircleColliding(hero.x, hero.y, 20,noj8X,noj8Y, 5)){
            hero.live-=10;
              noj8X=8000;
                noj8Y=6000;
        }
                    if (areCircleColliding(hero.x, hero.y, 20,teleporterX,teleporterY, 50)){
                        hero.x=mouseX;
                             hero.y=mouseY;
                        teleporterX=8000000000000000000000000000;
                                    teleporterY=6000000000000000000000000000;
                    }
        for(let i=0; i<vrag.length; ++i){
                 if (areCircleColliding(vrag[i].x, vrag[i].y, 20,teleporterX,teleporterY, 50)){
                      vrag[i].x=Math.random()*1250;
                        vrag[i].y=Math.random()*630;
                        teleporterX=8000000000000000000000000000;
                                    teleporterY=6000000000000000000000000000;
                    }
        }
                for(let i=0; i<vrag1.length; ++i){
                 if (areCircleColliding(vrag1[i].x, vrag1[i].y, 20,teleporterX,teleporterY, 50)){
                      vrag1[i].x=Math.random()*1250;
                        vrag1[i].y=Math.random()*630;
                        teleporterX=8000000000000000000000000000;
                                    teleporterY=6000000000000000000000000000;
                    }
        }
    }
    shooting(targetX, targetY){
        if (this.live <= 0){return;}
        let dist = Math.sqrt( (this.x-targetX)*(this.x-targetX) + (this.y-targetY)*(this.y-targetY) )
        let sx = (targetX - this.x)*10/dist;
        let sy = (targetY - this.y)*10/dist;
        bullet.push( new Patron(this.x, this.y, this.team, sx, sy) );
    }
}

class Patron{
    constructor(x_, y_, team_, sx_, sy_){
        this.x = x_;
        this.y = y_;
        this.sx = sx_;
        this.sy = sy_;
        this.team = team_;
    }
    
    draw(){
        context.fillStyle = this.team;
        context.beginPath();
        context.arc(this.x, this.y, 3, 0, 2*Math.PI);
        context.fill();
    }
    
    update(){
        this.x += this.sx;
        this.y += this.sy;
    }
}

function areCircleColliding(x1, y1, r1, x2, y2, r2){
    let dist = Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
    return dist <= r1+r2;
}

var hero = new Guner(400, 300, 'green'); 

var vrag = [];
for (let i=0; i<4; ++i){
    vrag[i] = new Guner(Math.random()*800, Math.random()*600, 'red');
}
var vrag1 = [];
for (let i=0; i<4; ++i){
    vrag1[i] = new Guner(Math.random()*800, Math.random()*600, 'blue');
}
var friend = [];
for (let i=0; i<3; ++i){
    friend[i] = new Guner(Math.random()*800, Math.random()*600, 'green');
}
var bullet = [];


function update() {
    for (let i=0; i<4; ++i){
    vrag1[i].kill();
    };
        for (let i=0; i<3; ++i){
    friend[i].kill();
    };
   if(t%1000==0){
     power+=1;
  }
    for (let i=0; i<3; ++i){
    if(vrag[i].live > 0){
    if(t%100==0){
      noj1X=vrag[i=0].x;
              noj1Y=vrag[i=0].y;
        noj2X=vrag[i=1].x;
              noj2Y=vrag[i=1].y;
        noj3X=vrag[i=2].x;
              noj3Y=vrag[i=2].y;
        noj4X=vrag[i=3].x;
              noj4Y=vrag[i=3].y;
    }
    }
    }
    if(t%100==0){
            for (let i=0; i<3; ++i){
    if(vrag1[i].live > 0){
        noj5X=vrag1[i=0].x;
              noj5Y=vrag1[i=0].y;
        noj6X=vrag1[i=1].x;
              noj6Y=vrag1[i=1].y;
        noj7X=vrag1[i=2].x;
              noj7Y=vrag1[i=2].y;
        noj8X=vrag1[i=3].x;
              noj8Y=vrag1[i=3].y;
    }
            }
}
if(live1<=0){
    stena1X=8000;
      stena1Y=6000;
}
    if(live2<=0){
    stena2X=80000;
      stena2Y=6000;
}
    if(live3<=0){
    stena3X=8000;
      stena3Y=6000;
}
    if(live4<=0){
    stena4X=8000;
      stena4Y=6000;
}
    ++t;
      if (vrag[i=3].live > 0){
                    if(posoka==1){
      vrag[i=3].x+=5;
  }
           if(posoka==2){
      vrag[i=3].x-=5;
  }
         if(posoka==3){
      vrag[i=3].y+=5;
  }
         if(posoka==4){
      vrag[i=3].y-=5;
  }
      }
          if (vrag[i=0].live > 0){
      

  if(posoka==1){
      vrag[i=0].x+=5;
  }
           if(posoka==2){
      vrag[i=0].x-=5;
  }
         if(posoka==3){
      vrag[i=0].y+=5;
  }
         if(posoka==4){
      vrag[i=0].y-=5;
  }
     
      if(posoka==5){
      vrag[i=0].x-=5;
              vrag[i=0].y-=5;
  }
           if(posoka==6){
      vrag[i=0].x+=5;
                vrag[i=0].y+=5;
  }
         if(posoka==7){
      vrag[i=0].y-=5;
                vrag[i=0].x+=5;
  }
         if(posoka==8){
      vrag[i=0].y+=5;
             vrag[i=0].x-=5;
  }
          }
    
               if (vrag[i=1].live > 0){
      
  if(posoka==1){
      vrag[i=1].y+=5;
  }
           if(posoka==2){
      vrag[i=1].x+=5;
  }
         if(posoka==3){
      vrag[i=1].y-=5;
  }
         if(posoka==4){
      vrag[i=1].x-=5;
  }
                         if(posoka==5){
      vrag[i=1].x-=5;
              vrag[i=1].y+=5;
  }
           if(posoka==6){
      vrag[i=1].x+=5;
                vrag[i=1].y-=5;
  }
         if(posoka==7){
      vrag[i=1].y-=5;
                vrag[i=1].x-=5;
  }
         if(posoka==8){
      vrag[i=1].y+=5;
             vrag[i=1].x+=5;
  }
          }
     
              if (vrag[i=2].live > 0){
      
  if(posoka==1){
      vrag[i=2].y-=5;
  }
           if(posoka==2){
      vrag[i=2].y+=5;
  }
         if(posoka==3){
      vrag[i=2].x+=5;
  }
         if(posoka==4){
      vrag[i=2].x-=5;
  }
                        if(posoka==5){
      vrag[i=2].x+=5;
              vrag[i=2].y-=5;
  }
           if(posoka==6){
      vrag[i=2].x-=5;
                vrag[i=2].y+=5;
  }
         if(posoka==7){
      vrag[i=2].y+=5;
                vrag[i=2].x+=5;
  }
         if(posoka==8){
      vrag[i=2].y-=5;
             vrag[i=2].x-=5;
  }
          }
     
       if (vrag1[i=3].live > 0){
                    if(posoka==1){
      vrag1[i=3].x+=5;
  }
           if(posoka==2){
      vrag1[i=3].x-=5;
  }
         if(posoka==3){
      vrag1[i=3].y+=5;
  }
         if(posoka==4){
      vrag1[i=3].y-=5;
  }
      }
          if (vrag1[i=0].live > 0){
      

  if(posoka==1){
      vrag1[i=0].x+=5;
  }
           if(posoka==2){
      vrag1[i=0].x-=5;
  }
         if(posoka==3){
      vrag1[i=0].y+=5;
  }
         if(posoka==4){
      vrag1[i=0].y-=5;
  }
     
      if(posoka==5){
      vrag1[i=0].x-=5;
              vrag1[i=0].y-=5;
  }
           if(posoka==6){
      vrag1[i=0].x+=5;
                vrag1[i=0].y+=5;
  }
         if(posoka==7){
      vrag1[i=0].y-=5;
                vrag1[i=0].x+=5;
  }
         if(posoka==8){
      vrag1[i=0].y+=5;
             vrag1[i=0].x-=5;
  }
          }
    
               if (vrag1[i=1].live > 0){
      
  if(posoka==1){
      vrag1[i=1].y+=5;
  }
           if(posoka==2){
      vrag1[i=1].x+=5;
  }
         if(posoka==3){
      vrag1[i=1].y-=5;
  }
         if(posoka==4){
      vrag1[i=1].x-=5;
  }
                         if(posoka==5){
      vrag1[i=1].x-=5;
              vrag1[i=1].y+=5;
  }
           if(posoka==6){
      vrag1[i=1].x+=5;
                vrag1[i=1].y-=5;
  }
         if(posoka==7){
      vrag1[i=1].y-=5;
                vrag1[i=1].x-=5;
  }
         if(posoka==8){
      vrag1[i=1].y+=5;
             vrag1[i=1].x+=5;
  }
          }
     
              if (vrag1[i=2].live > 0){
      
  if(posoka==1){
      vrag1[i=2].y-=5;
  }
           if(posoka==2){
      vrag1[i=2].y+=5;
  }
         if(posoka==3){
      vrag1[i=2].x+=5;
  }
         if(posoka==4){
      vrag1[i=2].x-=5;
  }
                        if(posoka==5){
      vrag1[i=2].x+=5;
              vrag1[i=2].y-=5;
  }
           if(posoka==6){
      vrag1[i=2].x-=5;
                vrag1[i=2].y+=5;
  }
         if(posoka==7){
      vrag1[i=2].y+=5;
                vrag1[i=2].x+=5;
  }
         if(posoka==8){
      vrag1[i=2].y-=5;
             vrag1[i=2].x-=5;
  }
          }
          if (friend[i=0].live > 0){
      

  if(posoka==1){
     friend[i=0].x+=5;
  }
           if(posoka==2){
     friend[i=0].x-=5;
  }
         if(posoka==3){
    friend[i=0].y+=5;
  }
         if(posoka==4){
      friend[i=0].y-=5;
  }
     
      if(posoka==5){
    friend[i=0].x-=5;
              friend[i=0].y-=5;
  }
           if(posoka==6){
     friend[i=0].x+=5;
               friend[i=0].y+=5;
  }
         if(posoka==7){
     friend[i=0].y-=5;
               friend[i=0].x+=5;
  }
         if(posoka==8){
      friend[i=0].y+=5;
            friend[i=0].x-=5;
  }
          }
    
               if (friend[i=1].live > 0){
      
  if(posoka==1){
      friend[i=1].y+=5;
  }
           if(posoka==2){
      friend[i=1].x+=5;
  }
         if(posoka==5){
      friend[i=1].y-=5;
  }
         if(posoka==4){
      friend[i=1].x-=5;
  }
                         if(posoka==5){
      friend[i=1].x-=5;
              friend[i=1].y+=5;
  }
           if(posoka==6){
      friend[i=1].x+=5;
                friend[i=1].y-=5;
  }
         if(posoka==7){
      friend[i=1].y-=5;
                friend[i=1].x-=5;
  }
         if(posoka==8){
      friend[i=1].y+=5;
             friend[i=1].x+=5;
  }
          }
     
              if (friend[i=2].live > 0){
      
  if(posoka==1){
      friend[i=2].y-=5;
  }
           if(posoka==2){
      friend[i=2].y+=5;
  }
         if(posoka==5){
      friend[i=2].x+=5;
  }
         if(posoka==4){
      friend[i=2].x-=5;
  }
                        if(posoka==5){
      friend[i=2].x+=5;
              friend[i=2].y-=5;
  }
           if(posoka==6){
      friend[i=2].x-=5;
                friend[i=2].y+=5;
  }
         if(posoka==7){
      friend[i=2].y+=5;
                friend[i=2].x+=5;
  }
         if(posoka==8){
      friend[i=2].y-=5;
             friend[i=2].x-=5;
  }
          }
 
   if (hero.live > 0){

        if (isKeyPressed[87]){
       hero.y-=5;
        }
        if (isKeyPressed[83]){
        hero.y+=5;
        }
        if (isKeyPressed[65]){
  hero.x-=5;
        }
        if (isKeyPressed[68]){
    hero.x+=5;
        }
   }
    hero.kill();
 if(t%20==0){
    for (let i=0; i<vrag.length; ++i){
     if (vrag[i].live > 0){
            vrag[i].shooting(Math.random()*800,Math.random()*600);
       }
    }
   }
     if(t%30==0){
    for (let i=0; i<vrag1.length; ++i){
     if (vrag1[i].live > 0){
            vrag1[i].shooting(Math.random()*800,Math.random()*600);
       }
    }
   }
         if(t%40==0){
    for (let i=0; i<3; ++i){
     if (friend[i].live > 0){
           friend[i].shooting(Math.random()*800,Math.random()*600);
       }
    }
   }
       for (let i=0; i<vrag.length; ++i){
            vrag[i].kill();
           if(t%100==0){
     if (vrag[i].live > 0){
      
if(t%50==0){
      posoka=Math.floor(Math.random()*9);
}
           
     }
       }
       }
           for (let i=0; i<vrag.length; ++i){
    if(vrag[i].x<0){
            vrag[i].x = 10;
         posoka=Math.floor(Math.random()*9);
            vrag[i].kill();
    }
       }
               for (let i=0; i<vrag.length; ++i){
    if(vrag[i].x>1250){
            vrag[i].x = 1245;
         posoka=Math.floor(Math.random()*9);
            vrag[i].kill();
    }
       }
               for (let i=0; i<vrag.length; ++i){
    if(vrag[i].y>635){
            vrag[i].y = 630;
         posoka=Math.floor(Math.random()*9);
            vrag[i].kill();
    }
       }
               for (let i=0; i<vrag.length; ++i){
    if(vrag[i].y<0){
            vrag[i].y = 10;
         posoka=Math.floor(Math.random()*9);
            vrag[i].kill();
    }
       } 
    for (let i=0; i<vrag1.length; ++i){
        if(vrag1[i].x<0){
            vrag1[i].x = 10;
         posoka=Math.floor(Math.random()*9);
            vrag1[i].kill();
    }
       }
               for (let i=0; i<vrag1.length; ++i){
    if(vrag1[i].x>1250){
            vrag1[i].x = 1245;
         posoka=Math.floor(Math.random()*9);
            vrag1[i].kill();
    }
       }
               for (let i=0; i<vrag1.length; ++i){
    if(vrag1[i].y>635){
            vrag1[i].y = 630;
         posoka=Math.floor(Math.random()*9);
            vrag1[i].kill();
    }
       }
               for (let i=0; i<vrag1.length; ++i){
    if(vrag1[i].y<0){
            vrag1[i].y = 10;
         posoka=Math.floor(Math.random()*9);
            vrag1[i].kill();
    }
       }
        for (let i=0; i<3; ++i){
        if(friend[i].x<0){
            friend[i].x = 10;
         posoka=Math.floor(Math.random()*9);
            friend[i].kill();
    }
       }
               for (let i=0; i<3; ++i){
    if(friend[i].x>1250){
            friend[i].x = 1245;
         posoka=Math.floor(Math.random()*9);
            friend[i].kill();
    }
       }
               for (let i=0; i<3; ++i){
    if(friend[i].y>635){
            friend[i].y = 630;
         posoka=Math.floor(Math.random()*9);
            friend[i].kill();
    }
       }
               for (let i=0; i<3; ++i){
    if(friend[i].y<0){
            friend[i].y = 10;
         posoka=Math.floor(Math.random()*9);
            friend[i].kill();
    }
       }
    if(hero.x>=1250){
        hero.x=1245;
    }
        if(hero.x<=0){
        hero.x=5;
    }
         if(hero.y<=0){
        hero.y=5;
    }
             if(hero.y>=635){
        hero.y=630;
    }
    for (let i=0; i<bullet.length; ++i){
        bullet[i].update();
        if (bullet[i].x > 800 || bullet[i].x < 0 || bullet[i].y > 600 || bullet[i].y < 0){
            bullet[i] = bullet[bullet.length-1];
            bullet.pop();
            i--;
        }
    }

    if(isKeyPressed[32] && power>=1  && q<=50 && t%10==0){
       hero.shooting(mouseX, mouseY);
        ++q
    }
if(t%500==0){
                        aptechkaX=400;  
            aptechkaY=300;
}
if(t%500==0){
                        teleporterX=Math.random()*1250;  
            teleporterY=Math.random()*630;
}

}

function draw() {
      context.fillStyle = "black";
context.fillRect(1,0,1,600);
context.fillRect(0,1,800,1);
 context.fillRect(800,1,1,600);
    context.fillRect(1,600,800,1);
    
    for (let i=0; i<vrag.length; ++i){
        vrag[i].draw();
    }
        for (let i=0; i<vrag.length; ++i){
        vrag1[i].draw();
    }
    for (let i=0; i<bullet.length; ++i){
        bullet[i].draw();
    }
      for (let i=0; i<3; ++i){
        friend[i].draw();
    }

    hero.draw();
              context.fillStyle = "black";
  context.fillRect(hero.x-10,hero.y-10,20,20);
      context.fillStyle = "black";
    context.fillRect(stena1X,stena1Y,10,100);
      context.fillRect(stena2X,stena2Y,10,100);
       context.fillRect(stena3X,stena3Y,100,10);
      context.fillRect(stena4X,stena4Y,100,10);
    context.fillRect(aptechkaX,aptechkaY,50,50);
        context.font="50px Times New Roman"
        context.fillText(coints,100,100);
          context.font="30px Times New Roman"
        context.fillText(power,100,300);

                 if (vrag[i=0].live <= 0){
               if (vrag[i=1].live <= 0){
              if (vrag[i=2].live <= 0){
                    if (vrag[i=3].live <= 0){
                           if (vrag1[i=0].live <= 0){
               if (vrag1[i=1].live <= 0){
              if (vrag1[i=2].live <= 0){
                    if (vrag1[i=3].live <= 0){
                context.fillStyle = "black";
    context.font="80px Times New Roman"
        context.fillText("You Win",100,300);
                        gg=true;
hero.live=50;
                    }
               }
              }
                 }
                    }
              }
               }
                  
                 }
          

     context.fillStyle = "blue";
                         context.fillRect(teleporterX,teleporterY,50,50);
  
                if (hero.live <= 0 && gg==false){
                      if (friend[i=0].live <= 0){
                                      if (friend[i=1].live <= 0){
                                                      if (friend[i=2].live <= 0){
                      context.fillStyle = "black";
    context.font="80px Times New Roman"
        context.fillText("You died and you lost",100,300);
                   
     }
                                      }
                      }
                }
};

function keyup(key) {
    if (hero.live > 0){
              if(coints>0){
      if (key == 49 && stena1X != hero.x + 40 && stena1Y != hero.y - 50){
            stena1X = hero.x + 40;
        stena1Y = hero.y - 50;
            coints-=1;
                             }
              
         if (key == 50 && stena2X != hero.x - 50 && stena2Y != hero.y - 50){
            stena2X = hero.x - 50;
        stena2Y = hero.y - 50;
               coints-=1;
                             }
    if (key == 51 && stena3X != hero.x + 40 && stena3Y != hero.y - 50){
            stena3X = hero.x - 50;
        stena3Y = hero.y - 50;
            coints-=1;
                             }
          if (key == 52 && stena4X != hero.x - 50 && stena4Y != hero.y + 40){
            stena4X = hero.x - 50;
        stena4Y = hero.y + 40;
       coints-=1;
                             }
              }
    }
    if(key==32 && q>=50){
        --power;
        q=0;
    }
  
};

function mousedown() {
   hero.shooting(mouseX, mouseY);
};
