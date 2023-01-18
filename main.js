let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d")
cnv.width = 400;
cnv.height = 400;

let cloud = document.getElementById("cloud");
let cloudX1 = 100;
let cloudX2 = 150;

let circleX = 270;
let circleSize = 25;
let yellow = 0;
let red = 225;

let animate = true;
let frameCount = 0;

requestAnimationFrame(loop);
function loop() {

    frameCount++;

    if(animate){
        
        if (circleSize <= 60){
            circleSize += 1;
        }
        yellow += 5;
        circleX -= 1;


        cloudX1 -= 1;
        cloudX2 += 1;
   


ctx.strokeStyle ="blue";
ctx.fillStyle = "rgb(0, 0, 225)";
ctx.fillRect(0, 0, 400, 400);


ctx.fillStyle = "rgb("+ red +", "+ yellow +", 0)";
ctx.beginPath();
ctx.arc(200, circleX, circleSize, 0, 2 * Math.PI);
ctx.fill();
requestAnimationFrame(loop);

ctx.strokeStyle = "green";
ctx.fillStyle = "rgb(0, 225, 0)";
ctx.fillRect(0, 300, 400, 400);

ctx.drawImage(cloud, cloudX1, 100);
ctx.drawImage(cloud, cloudX2, 85);

function keydownHandler (event){
    if (event.code == "Space") {
        animate = !animate;
    }
}
} 
}