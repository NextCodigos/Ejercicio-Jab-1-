window.onload=inicio;

function inicio(){

    document.querySelectorAll(".boton")[0].onclick=accion1;
    document.querySelectorAll(".boton")[1].onclick = accion2;
    document.querySelectorAll(".boton")[2].onclick = accion3;
    document.querySelectorAll(".boton")[3].onclick = accion4;

    document.querySelectorAll(".boton")[4].onclick=accion5;
    document.querySelectorAll(".boton")[5].onclick = accion6;
    document.querySelectorAll(".boton")[6].onclick = accion7;
    document.querySelectorAll(".boton")[7].onclick = accion8;
 

    /*
    diferentes formas de hacer el llamados los botones

    document.getElementsById("boton1").
	
	tipo de elemento que es el boton y con [le indico el nºboton]
    document.getElementsByTagName("button")[0].

	por su clase 
    document.getElementsByClasName("boton")[0].
	
	con la almoadilla para el id
    document.querySelector("#boton1").
	
	sustituye al getElementsByTagName
    document.querySelector("button")[0].
	
	solo para el primer boton
	document.queryselector(".boton").

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


} //escribir en div caja con innerHTML
function accion5(){
        document.querySelector(".caja").innerHTML += "Hola Mundo";
        document.querySelector(".caja2").innerHTML += "Hola Mundo";
    }

function accion6(){
        document.querySelector(".caja").innerHTML += "<img src='OIP.jpg'>";
        document.querySelector(".caja2").innerHTML += "<img src='Frutas y verduras frescas.jpg'>";
    }

function accion7(){
        document
          .querySelector(".caja")
          .insertAdjacentHTML("beforeend"," <button>Boton</button>");document
          .querySelector(".caja2")
          .insertAdjacentHTML("beforeend"," <button>Boton</button>");
    }

function accion8() {
  document.querySelector(".caja").innerHTML ="";
  document.querySelector(".caja2").innerHTML ="";
}
