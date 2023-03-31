---
title: Cutting shapes
publish_date: 2023-03-31
disable_html_sanitization: true
---
This post is about making shapes dance ! 

P5 allows you to 'animate' shapes by changing the values of the shape over time.  In this case we explore changing these values within the `draw()` function, which runs on a default `frameRate` of 60 fps(more information on the function can be found [here](https://p5js.org/reference/#/p5/draw)).  This default `frameRate` creates a 'smooth' movement as the time between frames is usually too fast for the eyes to perceive. 

<iframe width="400" height="442" src="https://editor.p5js.org/kirstinmeows/full/Z_xTSqmEB"></iframe>  
This example demonstrates the ability to move shapes within a set distance, through incrementing the `y_pos` by 1 everytime `draw()` is called. 
The distance is set through an `if()` statement, which changes the direction of the movement once the shape has hit the edge of the canvas.  This creates a bouncing effect, simply through changing the `y_pos`.

P.S the title to this post was my attempt at a joke (╥_╥)