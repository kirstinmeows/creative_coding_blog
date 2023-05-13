---
title: Distance
publish_date: 2023-05-09
disable_html_sanitization: true
---

How to calculate the distance between any two given points! 

P5 comes with the built in method `dist()`, which has 4 or more parameters depending on whether the points are 2D or 3D. 
These parameters are: 
1. x1 = x-coordinate of the start point
2. y1 = y-coordinate of the start point
3. x2 = x-coordinate of the end point
4. y2 = y-coordinate of the end point 

This distance value has many uses such as determining collisions, but within net art it can also be used as a way to interact with the mouse within a set radius. 

<iframe width = "400" height = "442" src="https://editor.p5js.org/kirstinmeows/full/mqeFoJfkb"></iframe>

``` javascript 
//determines the distance between a shape and the mouse.  Triggering a change in size and fill if the distance is within 50px of the mouse.     
       let d = dist(x,y,mouseX,mouseY)
       if (d< 50)
         {
          fill(225,80,100,0.8);
          let s = 30;
          ellipse(x, y, s);
         }
// ensures other shapes aren't affected by the above code when outside of the radius
       else
         {
            fill(240,60,100);
            ellipse(x,y,10);
         }
```
This idea is explored further in my net art project, a sample demonstrated in the sketch below.
<iframe width = "400" height = "442" src="https://editor.p5js.org/kirstinmeows/full/4se3LV9mL"></iframe>