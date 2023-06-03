---
title: blobs blobs blobs
publish_date: 2023-05-15
disable_html_sanitization: true
---

This post explores creating blobs in p5! 

This is a further extension on the blog post [Stranger Shapes](https://kirstinmeows-coding-blog.deno.dev/blog_post6), using the `beingShape()` and `endShape()` functions in p5 to create blobs.  I began with following Daniel Shiffman's video [https://thecodingtrain.com/challenges/36-blobby], which explains the theory behind the blob shape. 

<iframe width = "400" height = "442" src="https://editor.p5js.org/kirstinmeows/full/_PyIi7WgY"></iframe> 

``` javascript
let radius = 150;
  
  beginShape();
  let xoff = 0; 
// draws a circle made up of 70 vertices
  for (var a=0; a<TWO_PI;a+=TWO_PI/vertices_amount) 
  {
// creates movement using noise, 8px of 'movment' in vertices 
    let offset = map(noise(xoff, yoff), 0, 1, -8, 8);
    let r = radius + offset;
    let x = r * cos(a);
    let y = r * sin(a);
    curveVertex(x, y);
    xoff += 0.07;
  }

  endShape();
  
  yoff += 0.01;
```
