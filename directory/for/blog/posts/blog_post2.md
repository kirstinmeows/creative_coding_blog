---
title: How to be random
publish_date: 2023-03-30
disable_html_sanitization: true
---

> "Expose yourself to as much randomness as possible" - Ben Casnocha

Randomness refers to the lack of predictability in an event or it's outcome.  It can be seen as having no discernible pattern, and the result cannot be predicted with strict certainty. 

Within p5 it refers to the built in function `random()`, which allows for a random value to be returned (further information can be found [here](https://p5js.org/reference/#/p5/random)).

This sketch explores the use of the `random()` function to assign random values for the position of the circles as well as the colour. 
<iframe width="400" height="442" src="https://editor.p5js.org/kirstinmeows/full/F9NqeIzzq"></iframe>  

The use of `random()` in this example can be considered as more controlled, as there is a set range for the value. 

``` javascript 
let circleX = 0; 
let circleY = 200;
let col;
let circleSize = 13;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

// draw loop runs 60 times per second
function draw() {
  
  noStroke (); 
  if (mouseX > windowWidth /2)
    {
        col = randColourYel(); 
    } 
  else
    {
      col = randColourPurp();
    }

  circleX = random(windowWidth); 
  circleY = random(windowHeight);
  fill(col);
  ellipse(circleX, circleY, circleSize); 
}

function mousePressed()
{
  // circleX = random(0,250); 
  // circleY += 4; 
  // col = randColour();
  // fill(col);
  background(0);
}


// to generate random values for r,g,b & alpha
function randColourPurp()
  {
      const r = random(100,230);
      const g = random(10); 
      const b = random(220, 255);
      const a = random(30,50);
      
      return color (r, g, b, a);
  }

  function randColourYel()
  {
      const r = (220,255); 
      const g = random (190, 255); 
      const b = random (0, 150); 
      const a = random (30, 50);  
    
      return color (r, g, b, a); 
  }
```