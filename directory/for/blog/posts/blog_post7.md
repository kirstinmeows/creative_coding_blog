---
title: Gradients
publish_date: 2023-05-09
disable_html_sanitization: true
---
## Fruit Salad 
<iframe width = "400" height = "442" src="https://editor.p5js.org/kirstinmeows/full/ShLxOcP1c2"></iframe> 
<iframe width = "400" height = "442" src="https://editor.p5js.org/kirstinmeows/full/-cLoEJezD"></iframe> 
<iframe width = "400" height = "442"src="https://editor.p5js.org/kirstinmeows/full/AJSD8st5X"></iframe> 

The method explored above uses the html function `createLinearGradient()`, to create a gradient between two points, with two or more colour stops (although the function allows for more colour stops to be added).  For a full explanation of the `createLinearGradient()` function look [here](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient). 

The function caries 4 parameters: 

1. sX the x-coordinate of the start point 
2. sY the y-coordinate of the start point 
3. eX the x-coordinate of the end point 
4. eY the y-coordinate of the end point 

Within the function the method `addColorStop()` (explained [here](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient/addColorStop)) adds a colour stop.  This method's parameters are an `offset` and a `color`.  The offset requires a value between `0` and `1`, `0` referring to the start of the gradient and `1` referring to the end of the gradient and the `color` value of the stop. 

This is demonstrated in the code below: 

``` javascript 
function draw() 
{
   background('black');
   linearGradient(
    width/2-200, height/2-200, //Start point
    width/2+200, height/2+200, //End point
    color(52, 100, 97 ), //Start color
    color(130, 100, 77) //End color
  );
  ellipse(200, 200, 200, 200);
 
}

//creating a function to hold the parameters of the createLinearGradient as well as the a start colour parameter and an end colour parameter. This helps to for easier accessibility, by adjusting the parameters within the draw function.

function linearGradient(sX, sY, eX, eY, colorS, colorE)
{
 //calls the HTML5 function through the P5 variable drawingContext
  let gradient = drawingContext.createLinearGradient(
    sX, sY, eX, eY);
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;
}
``` 
