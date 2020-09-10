var shirt;
var fits;
var collarR,collarM;
var form,player;
var database
var buttonImg,pocketImg;

function preLoad(){
   buttonImg=loadImage("Button.png");
   pocketImg=loadImage("pocket.jpg");
}


function setup() {
  createCanvas(800,800);
 // database=firebase.database();

  textSize(52);   
  fits=createSelect();
  collarR=createSelect();
  collarM=createSelect();
  fits.position(200,200);
  fits.option('choose');
  fits.option('regular');
  fits.option('modern');
  fits.option('slim');
  fits.option('classic');
  fits.changed(mySelectEvent);
 
   /*form=new Form();
   player=new Player();
   button=createSprite(300,600,30,30);
  button.addImage(buttonImg);
   pocket=createSprite(400,600,20,20);
   pocket.addImage(pocketImg);
 */
}


function mySelectEvent(){
  var shirtFit=fits.value();
  if(shirtFit===regular){
     collarR.position(300,200)
     collarR.option('regular');
     collarR.option('pointed');
     collarR.option('chinese');
     collorR.changed(mySelectEvent2);
  }else if(shirtFit===modern){
     collarM.position(300,200);
     collarM.option('regular');
     collarM.option('pointed');
     collarM.option('chinese');
     collarM.changed(mySelectEvent3);

  }else if(shirtFit===slim){
    collarS.position(300,200);
    collarS.option('regular');
    collarS.option('pointed');
    collarS.option('chinese');
    collarS.changed(mySelectEvent4);

  }else if(shirtFit===classic){
    collarC.position(300,200);
    collarC.option('regular');
    collarC.option('pointed');
    collarC.option('chinese');
    collarC.changed(mySelectEvent5);

  }
  function mySelectEvent2(){
    var collar=collarR.value();
    if(collarR===regular){
      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent6);
    }
    if(collarR===pointed){
      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent7);
    }
    if(collarR===chinese){
      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent8);
    }
  }
  function mySelectEvent3(){
    var collar2=collarM.value();
    if(collarM===regular){
      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent9);
    }
    if(collarM===pointed){
      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent10);
    }if(collarM===chinese){
      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent11);
    }
  }
  function mySelectEvent4(){
    var collar2=collarS.value();
    if(collarS===regular){
      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent12);
    }
    if(collarS===pointed){
      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent13);
    }if(collarS===chinese){
      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent14);
    }
  }
  function mySelectEvent5(){
    var collar2=collarC.value();
    if(collarC===regular){
      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent15);
    }
    if(collarC===pointed){
      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent16);
    }if(collarC===chinese){
      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent17);
    }
  }



  
}
function draw() {
  background(255,255,255);  

 
 
}
