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

SHA256:hwUBLkprIOpAnScV9d3+NqbYJ4lp/tMsyxAuFZGMbzg
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAII/piF9b3A+Ncvy90fkz37qS1T00PAnLovimsUNW+mFS muhammadusama9306@gmail.com