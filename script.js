const cvsElem = document.getElementById('cvs');

cvsElem.width = 500;
cvsElem.height = 500;
cvsElem.style.border = '2px solid black';
function randomColor() {
  return Math.floor(Math.random()*16777215).toString(10);
}
var cent = cvsElem.getContext('2d');

class Sq{

 constructor(x, y, width){
  this.x = x;
  this.y = y;
  this.width = width;
  this.step = 15;
 }

draw(){
  cent.fillRect(this.x, this.y, this.width, this.width);
}
move(code){
  switch (code){
    case 'KeyW':
    if(square.y < 10){
      break;}
    else{
    this.y -= this.step
      cent.fillStyle = '#' + randomColor()
    break;}
    case 'KeyD':
    if(square.x > 390){
      break;}
    else{
    this.x += this.step
      cent.fillStyle = '#' + randomColor()
    break;}
    case 'KeyS':
    if(square.y > 390){
      break;}
    else{
    this.y += this.step
      cent.fillStyle = '#' + randomColor()
    break;}
    case 'KeyA':
    if(square.x < 10){
      break;}
    else{
      this.x -= this.step
      cent.fillStyle = '#' + randomColor()
      break;}
}
  cent.clearRect(0, 0, 500, 500);
  cent.fillStyle = '#' + randomColor();
this.draw();
  }
}

square = new Sq(190, 190, 100);
square.draw();


document.addEventListener('keypress', e=>{
  square.move(e.code);
})
