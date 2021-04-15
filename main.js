canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;  
car1_height=70;
background_img="racetrack.jpeg";
car1_img="car1_race.png";
car2_x=10;
car2_y=10;
car2_width=120;  
car2_height=70;
background_img="racetrack.jpeg";
car2_img="car2_race.png";
car2_x=10;
car2_y=10;
function add(){
    backround_imgTag= new Image();
    backround_imgTag.onload= uploadBackground();
    background_imgTag.src=background_img;

    rover_imgTag= new Image();
    car1_imgTag.onload= uploadcar1();
    car1_imgTag.src=car1_img;
    backround_imgTag= new Image();
    backround_imgTag.onload= uploadBackground();
    background_imgTag.src=background_img;

    rover_imgTag= new Image();
    car2_imgTag.onload= uploadcar2();
    car2_imgTag.src=car2_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0, canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag , car1_x , car1_y , car1_width,car1_height);
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0, canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag , car1_x , car1_y , car1_width,car1_height);
}
window.addEventListener("keydown",mykey_down())
