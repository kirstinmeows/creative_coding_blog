---
title: Seeing stars 
publish_date: 2023-04-30
disable_html_sanitization: true
---
This post looks at how to make star shapes!

> twinkle twinkle little star  

Making a star in p5 is unfortunately not as simple as just writing `star ()`... first we have to look at what a star is made up of.  Starting with the common 5 point star, it is made up of 5 points along a hypothetical outer circle, joined to 5 points on a smaller inner circle.  In saying that, if we were to just place 5 points randomly spaced apart on two circle and join them together it most likely will not resemble a star at all.

This is where the maths comes in, each point must be spaced evenly across each hypothetic circle, with the positioning of the inner and outer points at an angle relative to circumference and radius of the circles.  This can be done through the us of `TAU`, a number which represents the ratio of the circumference to the radius of a circle.

<iframe width = "400" height = "442" src="https://editor.p5js.org/kirstinmeows/full/SytXscgY7"></iframe> 
This sketch shows a visual representation of the 'hypothetical' circles along which the points of the star are placed.