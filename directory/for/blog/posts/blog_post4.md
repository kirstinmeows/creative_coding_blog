---
title: How to become friends with a mouse
publish_date: 2023-03-31
disable_html_sanitization: true
---
This post explores how to interact with the mouse ! 

> What do you call a mouse that swears? A cursor. 

P5 has three ways to interact with the mouse: 
1. Through the stored data e.g. `mouseX`, `mouseY` 
2. Through the mouse buttons e.g. `mouseisPressed`, `mouseButton`  
3. Through the mouse event functions e.g. `mousePressed()`, `mouseDragged()`.  

I will be focusing on the use of the mouse data and mouse events to create a sketch with some basic interactivity, but [here](https://p5js.org/learn/interactivity.html) is a deeper look into interactivity in p5.

The `mouseX` and `mouseY` contains the x and y position of the mouse at all times, this means that as the mouse moves the positions update allowing for shapes to 'follow' the mouse position. 

The example below uses `mousePressed()` to trigger shapes falling from the position of the mouse. 

<iframe width="400" height="442" src="https://editor.p5js.org/kirstinmeows/full/IrCy8epeN"></iframe>  

``` javascript 
...
function mousePressed()
{
  for (let i = 0; i < 30; i++)
  {
    let x = random ((mouseX-15), (mouseX+15)); 
    let y = random (mouseY, (mouseY+100));
    let r = random(1, 25);
    shapes[i] = new Shapes (x, y, r); 
  }
  pressed = true;
}
```
By setting a range between the `mouseY` and `mouseY +100` it means that the circles will form between the position of the mouse and 100px below. 

The example below shows the difference between `mousePressed` and `mouseDragged`, changing from a 'falling' effect to a 'dragging and dropping' effect.  This is done simply by changing the `mousePressed` event to `mouseDragged`,  the circles then move along with the mouse for as long as the mouse is dragged for.

<iframe width="400" height="442" src="https://editor.p5js.org/kirstinmeows/full/X_7Yyn2rP"></iframe>   


 


