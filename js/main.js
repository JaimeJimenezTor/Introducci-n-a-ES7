// alert("Hola mundo!!!");

// console.log("Este es otro mensaje..!");
var nombre="Jaime Jimenez";
let edad=10;
// edad="No quiero decirlo";
let titulo=document.getElementById('titulo');
let mensaje="Mi nombre es "+ nombre+ " y mi edad es "+(edad+12);
console.log(mensaje);

titulo.innerHTML=mensaje;
titulo.style.color='#0000ee'; // color de letra
titulo.style.textTransform='uppercase'; //Mayusculas

titulo.onclick=function()
{
    
    titulo.innerHTML="Le diste clic"; // cambiamos el titulo con un clic
    titulo.innerHTML=titulo.innerHTML.toLowerCase();
    document.write(titulo.innerHTML);
    alert("Hola");
};

