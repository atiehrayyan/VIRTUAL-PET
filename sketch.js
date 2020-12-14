//Create variables here
var dog , happyDog , database , foodS , foodStock  

function preload(){
  //load images here
  this.dog = loadImage("images/dogImg.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500, 500);
  var dog = createSprite(100,60,20,20);
  dog.addImage ('images/dogImg.png');
  
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
 background(46,139,87);
 if(keywentdown(up_arrow)){
   writeStock(foodS);
   dog.addImage(dogHappy);
 }
  drawSprites();
  //add styles here
  taxt("foodstock");
 taxtSize();
 fill("red");
 stroke();
}



