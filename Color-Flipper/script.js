const body = document.getElementsByTagName('body')[0];
 
function setColor(name){
    body.style.backgroundColor = name;
}

function randomColor() {
    const yellow = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    const purple = Math.round(Math.random()*255);


    const color =`rgb(${yellow},${blue},${purple})`;
    body.style.backgroundColor = color
}
randomColor();
