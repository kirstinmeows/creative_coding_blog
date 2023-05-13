---
title: Lerp vs Larp
publish_date: 2023-05-11
disable_html_sanitization: true
---
This post explores the use of the `lerp()` function! There is no live action role play in this post ...

Lerp is a very useful tool that calculates values between two points at the increment determined by `amt` parameter.  The function also has two other parameters, the start value and the stop value.  See P5's explanation [here](https://p5js.org/reference/#/p5/lerp).  I experimented with using `lerp()` to move the position of shapes when a certain distance from the cursor.  

<iframe width = "400" height = "442" src="https://editor.p5js.org/kirstinmeows/full/mqeFoJfkb"></iframe> 
 
 ``` javascript 
  ...
  for (let y = 20; y < height; y += height / 20 ){
     for (let x = 20; x < width; x += width / 20){
     
       if ((dist(x,y,mouseX,mouseY)<50))
         {
          fill(330,60,100,0.5);
// uses lerp to move between current x and y coordinates, and mouse cursor movement.  The third parameter creates the sort of 'lag' effect
           ellipse((lerp(x,x+movedX,0.8)), (lerp(y,y+movedY,0.8)), 10);
         }
       else
         {
            fill(310,60,100);
            ellipse(x,y,10);
         }
     }
  }
  ```


