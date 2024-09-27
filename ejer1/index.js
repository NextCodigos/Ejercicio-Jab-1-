window.onload=inicio;

function inicio(){

    document.querySelectorAll(".boton")[0].onclick=accion1;
    document.querySelectorAll(".boton")[1].onclick = accion2;
    document.querySelectorAll(".boton")[2].onclick = accion3;
    document.querySelectorAll(".boton")[3].onclick = accion4;
    document.querySelectorAll(".boton")[4].onclick=accion5;
    document.querySelectorAll(".boton")[5].onclick=accion6;

    /*
    diferentes formas de hacer el llamadoa los bonones

    document.getElementsById("boton1").
    document.getElementsByTagName("boton")[0].
    document.getElementsByClasName("boton")[0].
    document.querySelector("#boton1")
    document.querySelector("button")[0].
    document.querySelectorAll(".boton")[0].
    */

//opciones insertadyaTML

}
 //escribir en div caja con innerHTML
function accion1(){
        document.querySelector(".caja").innerHTML = "Hola Mundo";
    }

function accion2(){
        document.querySelector(".caja").innerHTML = "<img src='OIP.jpg'>";
    }

function accion3(){
        document
          .querySelector(".caja")
          .insertAdjacentHTML("beforeend"," <button>Boton</button>");
    }

function accion4() {
  document.querySelector(".caja").innerHTML ="";
}
function accion5(){
      document.querySelector(".caja").innerHTML = "<img src='OIP.jpg'>";
    }
function accion6(){
      document.querySelector(".caja").insertAdjacentHTML("beforeend"," <button>Boton</button>");
        }
