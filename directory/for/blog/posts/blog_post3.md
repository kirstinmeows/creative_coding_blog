---
title: Cutting shapes
publish_date: 2023-03-31
disable_html_sanitization: true
---
This post is about making shapes dance ! 

P5 allows you to 'animate' shapes by changing the values of the shape over time.  In this case we explore changing these values within the `draw()` function, which runs on a default `frameRate` of 60 fps(more information on the function can be found [here](https://p5js.org/reference/#/p5/draw)).  This default `frameRate` creates a 'smooth' movement as the time between frames is usually too fast for the eyes to perceive. 

<iframe width="400" height="442" src="https://editor.p5js.org/kirstinmeows/full/Z_xTSqmEB"></iframe>  

This example demonstrates the ability to move shapes within a set distance, through incrementing the y-position by 1 everytime `draw()` is called. 
``` javascript 
//referenced example by Thomas Capogreco 

let y_pos = 150 
let x_pos = 200
let speed = 2
let col 

function setup() {
  createCanvas(400, 400);
  fill('deeppink')
}

function draw() {
  background(10);
  noStroke ()
  square (150, y_pos, 100) 
  square (10, y_pos,100)
  square (290, y_pos, 100)
  
  if (y_pos >= 300 || y_pos <= 0)
    {
      speed = speed * -1 
      col = random_color()
      fill(col)
    }
  move_square(speed)
}

function move_square (step) 
{
  y_pos += step 
}

function random_color ()
{
  // habitually making constants 
  const r = random (255) 
  const g = random (255)
  const b = random (255)
  return color (r, g, b)
}
```
The distance is set through an `if()` statement, which changes the direction of the movement once the shape has hit the edge of the canvas.  This creates a bouncing effect, simply through changing the y-position.

P.S the title to this post was my attempt at a joke (╥_╥)