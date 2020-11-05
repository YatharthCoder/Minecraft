var canvas=new fabric.Canvas('mycanvas');
var block_img_width=30;
var block_img_height=30;
var player_x=10;
var player_y=10;

var player_object="";
var block_img_object="";

function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
});
}

function new_img_update(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
    }


    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
   keyprees=e.keyCode; 
console.log(keyprees);
if(e.shiftKey==true && keyprees == '80'){
    console.log("p,shift together");
    block_img_height=block_img_height+10;
    block_img_width=block_img_width+10;
     document.getElementById("current_width").innerHTML=block_img_width;
     document.getElementById("current_height").innerHTML=block_img_height;
}
if(e.shiftKey==true && keyprees == '77'){
console.log("m,shift together");
block_img_height=block_img_height-10;
block_img_width=block_img_width-10;
document.getElementById("current_width").innerHTML=block_img_width;
document.getElementById("current_height").innerHTML=block_img_height;

}
if(keyprees=='67'){
    console.log("c");
    new_img_update('cloud.jpg');
}

if(keyprees=='85'){
console.log("u");
new_img_update('unique.png');
}

if(keyprees=='87'){
    console.log("w");
    new_img_update('wall.jpg');
}
if(keyprees=='82'){
    console.log("r");
    new_img_update('roof.jpg');
}
if(keyprees=='84'){
    console.log("t");
    new_img_update('trunk.jpg');
}
if(keyprees=='71'){
    console.log("g");
    new_img_update('ground.png');
}
if(keyprees=='68'){
    console.log("d");
    new_img_update('dark_green.png');
}
if(keyprees=='76'){
    console.log("l");
    new_img_update('light_green.png');
}
if(keyprees=='89'){
    console.log("y");
    new_img_update('yellow_wall.png');
}

if(keyprees=='38'){
console.log("up");
up();
}
if(keyprees=='40'){
    console.log("down");
    down();
}

if(keyprees=='37'){
console.log("left");
left();
}

if(keyprees=='39'){
console.log("right");
right();
}
    }

function up(){
if(player_y>=0){
player_y=player_y-block_img_height;
console.log(block_img_height);
console.log("x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
}

}

function down(){
if(player_y<=460){
player_y=player_y+block_img_height;
console.log("x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
}
}

function left(){
if(player_x>0){
player_x=player_x-block_img_width;
console.log("x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
}


}

function right(){
    if(player_x<850){
        player_x=player_x+block_img_width;
        console.log("x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}