//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

const $boton = document.querySelector('button');
const $bienvenida = document.querySelector('h1');
const $resultado = document.querySelector('#resultado');

$boton.onclick = function(){
  const $nombre1 = document.querySelector('#primerNombre').value;
  const $nombre2 = document.querySelector('#segundoNombre').value;
  const $apellido = document.querySelector('#apellido').value;
  const $edad = document.querySelector('#edad').value;
  

  //como hago para no tener que escribir "Bienvenido, "? es decir, aprovechar el texto original
  //pq no puedo usar comillas invertidas? ´´
  $bienvenida.textContent = `Bienvenido, ${$nombre1} ${$nombre2}!`;
  //$bienvenida.textContent = "Bienvenido, "+$nombre1+" "+$nombre2+" !";

  $resultado.textContent = $nombre1+" "+$nombre2+" "+$apellido+" "+$edad;
  return false;
};