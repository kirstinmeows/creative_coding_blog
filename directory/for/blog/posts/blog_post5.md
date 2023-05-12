---
title: Seeing stars 
publish_date: 2023-04-30
disable_html_sanitization: true
---
This post looks at how to make star shapes!

> twinkle twinkle little star  

Making a star in p5 is unfortunately not as simple as just writing `star ()`... first we have to look at what a star is made up of.  Starting with the common 5 point star, it is made up of 5 points along a hypothetical outer circle, joined to 5 points on a smaller inner circle.  In saying that, if we were to just place 5 points randomly spaced apart on two circle and join them together it most likely will not resemble a star at all.  I followed David White's (co_dart on YouTube) [How to Draw Stars in P5js](https://www.youtube.com/watch?v=rSp5iSTXwAY), to understand and learn how to write a function for drawing stars.

This is where the maths comes in, each point must be spaced evenly across each hypothetic circle, with the positioning of points at equal angles relative to circumference and radius of each circle.  
The number `TAU` represents this ratio between the circumference to the radius of a circle, we divide this by the number of points to create `'n'` equal angles of the circle.

<iframe width = "400" height = "442" src="https://editor.p5js.org/kirstinmeows/full/SytXscgY7"></iframe> 
This sketch shows a visual representation of the 'hypothetical' circles along which the points of the star are placed.  

Using the code below, we can determine these points relative to the centre of the star drawing 5 points along the inner circle and 5 points along the outer circle.
```javascript 
// number of points represented by n.  x and y coordinates of centre of star
    function pointedStar (x,y, n, outerRadius, innerRadius)
  {
// TAU divided by the number of 'n' angles to create 'n' equal angles 
    let theta = TAU / n; 

  // iterates through the points multiplied by i 
    for (let i = 0; i < n; i++)
    {
    // outer points  
      point (x + cos(i * theta) * outerRadius, y + sin(i * theta) * outerRadius);
    // inner points
      point (x + cos((i + 0.5) * theta)* innerRadius, y + sin((i +0.5)* theta)*innerRadius);
    }
```
