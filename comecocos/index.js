console.log("Hola mundo");

let y = 0;
let x = 0;
document.querySelector(".blanco");

function controlteclas(e) {
  let tecla = e.key;
  if (tecla == "ArrowUp") {
    y = y - 5; //La variable es igual a la misma que vale "0" -5, al pulsarle irá de 5 en 5
    console.log(y); //Se vera en consola -5, -10, -15... [LO MISMO CON TODO]
    document.querySelector(".blanco").style.top = y + "px"
    
  }
  if (tecla == "ArrowDown") {
    y = y + 5;
    console.log(y);
    document.querySelector(".blanco").style.down = y + "px"
  }
  if (tecla == "ArrowLeft") {
    x = x - 5;
    console.log(x);
    document.querySelector(".blanco").style.left = x + "px";
  }
  if (tecla == "ArrowRight") {
    x = x + 5;
    console.log(x);
    document.querySelector(".blanco").style.right = x + "px";
  }
}

document.addEventListener("keydown", controlteclas);
//detectar teclas
//ArrowUp
//ArrouDown
//ArrowLeft
//ArrowRight
