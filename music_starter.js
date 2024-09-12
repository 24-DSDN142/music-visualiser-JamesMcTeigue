// vocal, drum, bass, and other are volumes ranging from 0 to 100
let numb_stars = 10
let decay_rate = 5
let alpha_values = [numb_stars]
let star_positions = [999, 999, 999, 999, 999, 999, 999, 999, 999, 999]

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  let ellipse_Size = map(vocal, 0, 100, 20, 340)
  let ellipse_Size_2 = map(vocal, 0, 100, 170, 20)
  let drum_colour = map(drum, 0, 100, 20, 340)
  let other_colour = map(other, 0, 100, 20, 340)
  let puplie_movemnt = map(bass, 0, 70, ellipse_Size, ellipse_Size - 40)
  let rect_hight = map(vocal, 0, 100, 20, 340) + 300
  colour_A = (200)
  colour_B = (0)
  noStroke();
  

  //Stars
  if (star_positions[0] == 999) {
    print("Initialising");
    for (let i = 0; int < numb_stars; i++) {
      alpha_values[i] = (i * 25);
    }
    for (let i = 0; i < numb_stars; i++) {
      print(star_positions[i]);
      star_positions[i] = createVector(random(0, width), random(0, height))
    }
  }

  if (star_positions[0] != 999) {
    for (let i = 0; i < numb_stars; i++) {
      print(alpha_values[i]);
      if (alpha_values[i] > 0) {

        alpha_values[i] -= decay_rate;

      } else {
        print("Resetting i");
        alpha_values[i] = 255
        star_positions[i] = createVector(random(0, width), random(0, height))
      }

      fill(255, 255, 255, alpha_values[i])
      ellipse(star_positions[i].x, star_positions[i].y, 15, 15)
    }
  }


  //Blue to red change
  if (drum_colour > 150) {
    colour_A = (200)
    colour_B = (0)
  } else {
    colour_A = (0)
    colour_B = (200)
  }
  if (other_colour < 150) {
    other_colour_A = (200)
    other_colour_B = (0)
  } else {
    other_colour_A = (30)
    other_colour_B = (250)
  }



  fill(225);
  ellipse(470, rect_hight, ellipse_Size + 400, ellipse_Size + 400);
  fill(30, 0, 30)
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 390);
  fill(225)
  ellipse(470, rect_hight, ellipse_Size + 360, ellipse_Size + 360);
  stroke(1);
  //eyelids
  fill(30, 0, 30)
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 80);
  fill(225)
  //THIS ONE!
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 70);

  fill(30, 0, 30)
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 60);

  fill(225)
  ellipse(470, rect_hight, ellipse_Size + 575, ellipse_Size + 575)
  fill(0)
  ellipse(470, rect_hight, ellipse_Size + 551, ellipse_Size + 551)

  fill(colour_B, 0, colour_A)
  ellipse(470, rect_hight, ellipse_Size + 565, ellipse_Size + 565)
  fill(225)
  ellipse(470, rect_hight, ellipse_Size + 405, ellipse_Size + 405)
  fill(225)
  // outer white  dounght
  fill(225)
  push()
  beginClip({
    invert: true
  });
  ellipse(470, rect_hight, ellipse_Size + 420, ellipse_Size + 420)
  endClip();
  ellipse(470, rect_hight, ellipse_Size + 550, ellipse_Size + 550)
  pop()

  push()
  stroke(1);
  fill(0)
  beginClip({
    invert: true
  });
  ellipse(470, rect_hight, ellipse_Size + 280, ellipse_Size + 280)
  endClip();
  ellipse(470, rect_hight, ellipse_Size + 290, ellipse_Size + 290)
  pop()

  //HANDELS
  //top handle: Right side
  fill(186, 181, 181) //grery
  rect(670, rect_hight - 293 + ellipse_Size_2 / (99999999999999999999999999999999999999 * 80), 20, 165);
  // //top handle: left side
  fill(186, 181, 181) //grery
  rect(270, rect_hight - 293 - ellipse_Size_2 / (999999999999999999999999999 * 80), 20, 165);
  // top handle: internal handel
  fill(225, 225, 225)
  rect(470, rect_hight - 353 - ellipse_Size_2 / (999999999999999999999999999 * 80), 410, 20);
  //top handle:external handel
  noStroke();
  fill(225)
  rect(470, rect_hight - 353 - ellipse_Size_2 / (999999999999999999999999999 * 80), 242, 27);
  fill(0)
  rect(470, rect_hight - 353 - ellipse_Size_2 / (999999999999999999999999999 * 80), 240, 25);
  fill(225, 0, 0)

  //HANDLE:BOTTOM
  //bottom handle: right side
  fill(186, 181, 181) //grery
  rect(670, rect_hight + 403 - ellipse_Size_2, 20, 165);
  // bottom handle: left side
  fill(186, 181, 181) //grery
  rect(270, rect_hight + 403 - ellipse_Size_2, 20, 165);
  //bottom handle: internal handel
  fill(225, 225, 225)
  rect(470, rect_hight + 453 - ellipse_Size_2, 410, 20);
  //bottom handle:external handel
  fill(225)
  rect(470, rect_hight + 453 - ellipse_Size_2, 242, 27);
  fill(0)
  rect(470, rect_hight + 453 - ellipse_Size_2, 240, 25);
  stroke(1);

  //third white ring
  fill(225)
  push()
  stroke(1);
  beginClip({
    invert: true
  });
  ellipse(470, rect_hight, ellipse_Size + 290, ellipse_Size + 290)
  endClip();
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 390)
  pop()

  //middle band 
  fill(colour_B, 0, colour_A)
  rect(470, rect_hight, 130, ellipse_Size + 400)
  fill(186, 181, 181)
  rect(470, rect_hight, 120, ellipse_Size + 400)
  fill(colour_B, 0, colour_A)
  rect(470, rect_hight, 70, ellipse_Size + 400);
  fill(225)
  rect(470, rect_hight, 60, ellipse_Size + 400);
  fill(186, 181, 181)
  rect(470, rect_hight, 20, ellipse_Size + 400);
  fill(225)

  //blue ring
  push()
  beginClip({
    invert: true
  });
  ellipse(470, rect_hight, ellipse_Size + 380, ellipse_Size + 380)
  endClip();
  fill(colour_B, 0, colour_A)
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 390)
  pop()

  //second black ring
  fill(0)
  push()
  beginClip({
    invert: true
  });
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 390)
  endClip();
  fill(0)
  ellipse(470, rect_hight, ellipse_Size + 400, ellipse_Size + 400)

  pop()

  //second white ring
  push()
  beginClip({
    invert: true
  });
  ellipse(470, rect_hight, ellipse_Size + 400, ellipse_Size + 400)
  endClip();
  fill(225)
  //THIS ONE!
  ellipse(470, rect_hight, ellipse_Size + 420, ellipse_Size + 420)
  pop()
  push()
  beginClip({
    invert: true
  });
  ellipse(470, rect_hight, ellipse_Size + 400, ellipse_Size + 400)
  endClip();
  fill(225)
  //THIS ONE!
  ellipse(470, rect_hight, ellipse_Size + 420, ellipse_Size + 420)

  pop()

  fill(30, 0, 30)
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 80);
  fill(225)


  noStroke();
  //pupile
  fill(other_colour_B, 0, other_colour_A)
  rect(puplie_movemnt + 400, rect_hight, rect_hight - 300, rect_hight - 310)
  fill(other_colour_B, 149, other_colour_A + 22)
  rect(puplie_movemnt + 400, rect_hight, rect_hight - 320, rect_hight - 320)

  fill(other_colour_B + 40, 171, other_colour_A + 52)
  rect(puplie_movemnt + 400, rect_hight, rect_hight - 330, rect_hight - 330)

  //smoothing out the middle pannel curve
  push()
  beginClip({
    invert: true
  });
  fill(0)
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 50);
  endClip();
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 80);
  pop()
  push()
  beginClip({
    invert: true
  });
  fill(225)
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 80);
  endClip();
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 85);
  pop()
  push()
  beginClip({
    invert: true
  });
  fill(0)
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 86);
  endClip();
  ellipse(470, rect_hight, ellipse_Size + 390, ellipse_Size + 87);
  pop()


  //side panels

  //left
  fill(225)
  ellipse(470 - (400 + ellipse_Size) / 2, rect_hight, 250, ellipse_Size + 420);
  fill(0)
  ellipse(470 - (400 + ellipse_Size) / 2, rect_hight, 247, ellipse_Size + 417);
  fill(colour_B, 0, colour_A)
  ellipse(470 - (400 + ellipse_Size) / 2, rect_hight, 240, ellipse_Size + 410);
  fill(225)
  ellipse(470 - (400 + ellipse_Size) / 2, rect_hight, 235, ellipse_Size + 405)
  fill(0)
  ellipse(470 - (400 + ellipse_Size) / 2, rect_hight, 230, ellipse_Size + 400)
  fill(225)
  ellipse(470 - (400 + ellipse_Size) / 2, rect_hight, 229, ellipse_Size + 399)

  fill(20)
  ellipse(290 - (400 + ellipse_Size) / 2, rect_hight, 250, ellipse_Size + 520);
  fill(186, 181, 181)
  ellipse(394 - (400 + ellipse_Size) / 2, rect_hight, 50, ellipse_Size + 220);

  //internal of left side pannel
  stroke(1);
  noStroke();
  fill(0)
  ellipse(394 - (400 + ellipse_Size) / 2, rect_hight, 30, ellipse_Size + 210);
  fill(225)
  ellipse(394 - (400 + ellipse_Size) / 2, rect_hight, 30, ellipse_Size + 210);
  noStroke();
  fill(225)
  ellipse(394 - (400 + ellipse_Size) / 2, rect_hight, 20, ellipse_Size + 190);
  fill(186, 181, 181)
  ellipse(394 - (400 + ellipse_Size) / 2, rect_hight, 20, ellipse_Size + 190);
  noStroke();

  //right side
  fill(225)
  ellipse(470 + (400 + ellipse_Size) / 2, rect_hight, 250, ellipse_Size + 420);
  fill(0)
  ellipse(470 + (400 + ellipse_Size) / 2, rect_hight, 247, ellipse_Size + 417);
  fill(colour_B, 0, colour_A)
  ellipse(470 + (400 + ellipse_Size) / 2, rect_hight, 240, ellipse_Size + 410);
  fill(225)
  ellipse(470 + (400 + ellipse_Size) / 2, rect_hight, 235, ellipse_Size + 405);
  fill(0)
  ellipse(470 + (400 + ellipse_Size) / 2, rect_hight, 230, ellipse_Size + 400);
  fill(225)
  ellipse(470 + (400 + ellipse_Size) / 2, rect_hight, 229, ellipse_Size + 399);

  fill(20)
  ellipse(650 + (400 + ellipse_Size) / 2, rect_hight, 250, ellipse_Size + 520);
  fill(186, 181, 181)
  ellipse(550 + (400 + ellipse_Size) / 2, rect_hight, 50, ellipse_Size + 220);

  //internal of rigt is pannel
  fill(0)
  ellipse(550 + (400 + ellipse_Size) / 2, rect_hight, 30, ellipse_Size + 210);
  fill(225)
  ellipse(550 + (400 + ellipse_Size) / 2, rect_hight, 30, ellipse_Size + 210);
  noStroke();
  fill(186, 181, 181)
  ellipse(550 + (400 + ellipse_Size) / 2, rect_hight, 20, ellipse_Size + 190);

}