
// vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  let y =100;
  let ellipse_Size =map(vocal, 0, 100, 20,340)
  let ellipse_Size_2 =map(vocal, 0, 100, 170, 20)
  let inverted_ellipse_Size =map(vocal, 0, 20, 340,)
  let puplie_movemnt =map(other, 0, 70, ellipse_Size,ellipse_Size-40)

  let rect_hight =map(vocal, 0, 100, 20, 340)+300
  noStroke();
  // for(let i =1; i <=5; i++){
  //   let yellow =(ellipse_Size * i)-20;
  //   ellipse(200,yellow,yellow-300)

  // }
  ellipse(500,rect_hight,ellipse_Size+20,ellipse_Size+20);
  fill(30,0,30)
  
  fill(225);
  ellipse(470,rect_hight,ellipse_Size+400,ellipse_Size+400);
  fill(30,0,30)
  ellipse(470,rect_hight,ellipse_Size+390,ellipse_Size+390);
  fill(225)
  ellipse(470,rect_hight,ellipse_Size+360,ellipse_Size+360);
  stroke(1);
  //eyelids
  fill(30,0,30)
  ellipse(470,rect_hight,ellipse_Size+390,ellipse_Size+80);
  fill(225)
  //THIS ONE!
  ellipse(470,rect_hight,ellipse_Size+390,ellipse_Size+70);
  
  fill(30,0,30)
  ellipse(470,rect_hight,ellipse_Size+390,ellipse_Size+60);
  
  //pupile
  noStroke();
  fill(0,0,200)
  rect(puplie_movemnt+300,rect_hight,60,60)
  fill(31, 149, 222)
  rect(puplie_movemnt+300,rect_hight,50,50)
  
  fill(40, 171, 252)
  rect(puplie_movemnt+300,rect_hight,40,40)
  stroke(1);
  //side pannels
  fill(225)
  // ellipse(240,rect_hight,100,ellipse_Size+320);

  // ellipse(690,rect_hight,100,ellipse_Size+320);
  
  push()
  stroke(1);
  fill(0)
  beginClip({invert:true});
  ellipse(470,rect_hight,ellipse_Size+280,ellipse_Size+280)
  endClip();
  ellipse(470,rect_hight,ellipse_Size+290,ellipse_Size+290)
  pop()
  push()
  stroke(1);
  beginClip({invert:true});
  ellipse(470,rect_hight,ellipse_Size+290,ellipse_Size+290)
  endClip();
  ellipse(470,rect_hight,ellipse_Size+390,ellipse_Size+390)
  pop()
  push()
  beginClip({invert:true});
  ellipse(470,rect_hight,ellipse_Size+380,ellipse_Size+380)
  endClip();
  fill(0,0,200)
  ellipse(470,rect_hight,ellipse_Size+390,ellipse_Size+390)
  pop()
  push()
  beginClip({invert:true});
  ellipse(470,rect_hight,ellipse_Size+390,ellipse_Size+390)
  
  endClip();
  fill(0)
  ellipse(470,rect_hight,ellipse_Size+400,ellipse_Size+400)
  
  pop()
  
  push()
  beginClip({invert:true});
  ellipse(470,rect_hight,ellipse_Size+400,ellipse_Size+400)
  endClip();
  fill(225)
  //THIS ONE!
  ellipse(470,rect_hight,ellipse_Size+420,ellipse_Size+420)
  pop()
  
  
  
  push()
  beginClip({invert:true});
  ellipse(470,rect_hight,ellipse_Size+420,ellipse_Size+420)
  endClip();
  ellipse(470,rect_hight,ellipse_Size+550,ellipse_Size+550)
  pop()

  
  //side panels
  ellipse(470-(400+ellipse_Size)/2,rect_hight,250,ellipse_Size+420);
  ellipse(470+(400+ellipse_Size)/2,rect_hight,250,ellipse_Size+420);
  
  //bottom middle path
  fill(186, 181, 181) //grery
  rect(470,rect_hight+293 - ellipse_Size_2,60,165);
  //outer white- left side
  fill(225)
  rect(440,rect_hight+293 - ellipse_Size_2,10,165);
  //center black
  fill(0)
  rect(470,rect_hight+293 - ellipse_Size_2,20,165);
  //outer white- right side
  fill(225)
  rect(500,rect_hight+293 - ellipse_Size_2,10,165);
  
  
  //smoothing out the middle pannel curve
  push()
  beginClip({invert:true});
  fill(0)
  ellipse(470,rect_hight,ellipse_Size+390,ellipse_Size+50);
  endClip();
  ellipse(470,rect_hight,ellipse_Size+390,ellipse_Size+80);
  pop()
  push()
  beginClip({invert:true});
  fill(225)
  ellipse(470,rect_hight,ellipse_Size+390,ellipse_Size+80);
  endClip();
  ellipse(470,rect_hight,ellipse_Size+390,ellipse_Size+85);
  pop()
  push()
  beginClip({invert:true});
  fill(0)
  ellipse(470,rect_hight,ellipse_Size+390,ellipse_Size+86);
  endClip();
  ellipse(470,rect_hight,ellipse_Size+390,ellipse_Size+87);
  pop()
  

  //side panels
  //left
  fill(225)
  ellipse(470-(400+ellipse_Size)/2,rect_hight,250,ellipse_Size+420);
  fill(20)
  ellipse(290-(400+ellipse_Size)/2,rect_hight,250,ellipse_Size+520);
  fill(186, 181, 181)
  ellipse(394-(400+ellipse_Size)/2,rect_hight,50,ellipse_Size+220);
  //internal of left side pannel
  fill(0)
  ellipse(394-(400+ellipse_Size)/2,rect_hight,30,ellipse_Size+220);
  fill(225)
  ellipse(394-(400+ellipse_Size)/2,rect_hight,30,ellipse_Size+210);
  noStroke();
  fill(186, 181, 181)
  ellipse(394-(400+ellipse_Size)/2,rect_hight,20,ellipse_Size+190);
  //right side
  fill(225)
  ellipse(470+(400+ellipse_Size)/2,rect_hight,250,ellipse_Size+420);
  fill(20)
  ellipse(650+(400+ellipse_Size)/2,rect_hight,250,ellipse_Size+520);
  fill(186, 181, 181)
  ellipse(550+(400+ellipse_Size)/2,rect_hight,50,ellipse_Size+220);
  //internal of rigt is pannel
  fill(0)
  ellipse(550+(400+ellipse_Size)/2,rect_hight,30,ellipse_Size+210);
  fill(225)
  ellipse(550+(400+ellipse_Size)/2,rect_hight,30,ellipse_Size+210);
  noStroke();
  fill(186, 181, 181)
  ellipse(550+(400+ellipse_Size)/2,rect_hight,20,ellipse_Size+190);
  
  //top handle: Right side
  fill(0,0,225)
  rect(670,rect_hight+653 -ellipse_Size_2,20,165);
  //top handle: left side
  fill(225,0,0)
  rect(270,rect_hight+653 - ellipse_Size_2,20,165);
  //top handle: internal handel
  fill(225,225,0)
  rect(470,rect_hight+653 - ellipse_Size_2,410,20);
  //top handle:external handel
  fill(225,0,225)
  rect(470,rect_hight-253 - ellipse_Size_2/8,240,25);
  
  
  //HANDLE:BOTTOM
  //bottom handle: right side
  fill(225,0,0)
  rect(670,rect_hight+393 - ellipse_Size_2,20,165);
  // bottom handle: left side
  fill(225,0,0)
  rect(270,rect_hight+393 - ellipse_Size_2,20,165);
  //bottom handle: internal handel
  fill(225,225,0)
  rect(470,rect_hight+453 - ellipse_Size_2,410,20);
  //bottom handle:external handel
  fill(225,0,225)
  rect(470,rect_hight+453 - ellipse_Size_2,240,25);

  console.log(ellipse_Size);


  

  
  // ellipse(300,rect_hight,ellipse_Size+80,ellipse_Size+80);
  

  //let spine_amount

  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 
//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);
// }
}