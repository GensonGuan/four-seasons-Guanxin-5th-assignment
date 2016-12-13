function setup() {
  createCanvas(400,400)
  frameRate(1)


  
}

function draw() {
  
  background(255)
  
  
 
 //texture 
  for(var x = 3; x <= 400; x+= 25) {
    for(var y = 3; y <= 400; y+= 25) {
      
      noStroke()
      
      var colors = random()
      console.log(colors)
      
      if(colors < 0.2) {
        stroke(255, 255, 255)
      } 
      else if(colors < 0.4) {
        stroke(204, 204, 204) 
      } 
      else if(colors < 0.6) {
        stroke(153, 153, 153) 
      } 
      else if(colors < 0.8) {
        stroke(102, 102, 102)
      } 
      else if(colors < 1)  {
        stroke(51, 51, 51)
      }
      noFill()  
      ellipse(x, y, (x+y)/30);
      line(x, y, x+15, y+15)
    }
  
  }
  noStroke()
  //111111
  var x = 0;
  var y = 0;
  var rect_width = 200;
  var rect_height = 200;
  
  
  if(mouseX > x && mouseX < x+rect_width && mouseY > y && mouseY < y+rect_height){
    
    fill(255,0,0,120)
  
  }else{
    fill(250,250,250)
    
    
  }
  
  rect(x,y,rect_width,rect_height)
  
  //222222
  var x = 200;
  var y = 0;
  var rect_width = 200;
  var rect_height = 200;
  
  
  if(mouseX > x && mouseX < x+rect_width && mouseY > y && mouseY < y+rect_height){
    
    fill(0,255,139,100)
  
  }else{
    fill(245,245,245)
    
  }
  
  rect(x,y,rect_width,rect_height)
  
  //333333
  var x = 0;
  var y = 200;
  var rect_width = 200;
  var rect_height = 200;
  
  
  if(mouseX > x && mouseX < x+rect_width && mouseY > y && mouseY < y+rect_height){
    
    fill(255,100,0,120)
  
  }else{
    fill(240,240,240)
    
  }
  
  rect(x,y,rect_width,rect_height)
  
  //444444
  var x = 200;
  var y = 200;
  var rect_width = 200;
  var rect_height = 200;
  
  
  if(mouseX > x && mouseX < x+rect_width && mouseY > y && mouseY < y+rect_height){
    
    fill(148,159,168,120)
  
  }else{
    
    fill(235,235,235)
    
  }
  
  rect(x,y,rect_width,rect_height)
  
  
  push()
  
    fill(255)
    textSize(30)
    textAlign(CENTER)
    textFont('Righteous')
    text('spring', 100, 100)
    text('summer', 300, 100)
    text('autumn', 100, 300)
    text('winter', 300, 300)
    
  pop()
  
  strokeWeight(2);
  
  //push()
  //strokeWeight(10);
  //stroke(56,56,0);
  //rotate(mouseX/mouseY)
  //line(200,200,200,170)
  //pop()
    
}