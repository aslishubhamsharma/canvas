const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const h = canvas.height;

const c = canvas.getContext('2d');
const drops = [];

function fillDrops(count = 100) {
    let nn = 0;

    for (let k = 0; k < drops.length; k++) {
        if(drops[k].y > h) {
            drops[k] = {
                x: Math.random()*canvas.width,
                y: 0,
                v: 1 + Math.random() * 5
            }

            nn++;
        }
    }

    for (; nn < count; nn++) {
        drops.push({
            x: Math.random()*canvas.width,
            y: 0,
            v: 1 + Math.random() * 5
        });    
    }    
}

fillDrops();
setInterval(() => fillDrops( 10 + Math.random() * 100), 2000);

function draw() {
    c.clearRect(0, 0, innerWidth, innerHeight);

    // draw line

    for(const drop of drops) {
        if(drop.y > h)
          continue;


        c.beginPath();
        c.arc(drop.x, drop.y, 15, 0, Math.PI , false);
        c.moveTo( drop.x,drop.y-15);
        c.lineTo(drop.x-15,drop.y);
        c.lineTo(drop.x+15,drop.y);
        c.fill();
        
        
        
        drop.y += drop.v;
    }
    requestAnimationFrame(draw);
    line();
}

draw(); 

function line(){
    c.fillStyle= "rgb(250,218,94)";
    c.beginPath();
     
    for (let n = 1; n < 70; n++) {
        
        c.moveTo( n*20 + 10,200);
        c.arc(n*20,200,20, 0, Math.PI,n%2==0);
        
    }
    
     
    
    c.fill();
    
    
    c.fillRect(0,0,canvas.width,200); 
   }