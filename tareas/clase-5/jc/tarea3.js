//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const botonCalcular = document.querySelector('#btn-1');
const mensaje = document.querySelector('#tmpoTotal');

botonCalcular.onclick = function(){
    //no hacer documento.querySelectorAll('.horas').value, pq un nodeList. value debe ser de c/elemento.
    const $arraySegundos = document.querySelectorAll('.segundos');
    const $arrayMinutos = document.querySelectorAll('.minutos');
    const $arrayHoras = document.querySelectorAll('.horas');
    let segTotal = 0, minTotal=0, horaTotal=0;

    for(let i=0; i<$arraySegundos.length; i++){
        segTotal += Number($arraySegundos[i].value);
    }
    if(segTotal>=60){
        minTotal = Math.floor(segTotal / 60);
    }
    segTotal = segTotal % 60;

    for(let i=0; i<$arrayMinutos.length; i++){
        minTotal += Number($arrayMinutos[i].value);
    }
    if(minTotal>=60){
        horaTotal = Math.floor(minTotal / 60);
    }
    minTotal = minTotal % 60;

    for(let i=0; i<$arrayHoras.length; i++){
        horaTotal += Number($arrayHoras[i].value);
    }
/*
    for(let i=0; i<$arrayHoras.length; i++){
        console.log($arrayHoras[i].value);
    }
  */
 mensaje.textContent = "Durancion total de clases: "+horaTotal+" hs, "+minTotal+" min, "+segTotal+" seg.";   
    return false;
};
//NOTA: repasar el tema de $ delante de variables-elemento. Cuando poner? cuando no?
/*
clase 1 : 2:34:43
clase 2 : 1:48:24
clase 3 : 0:47:26
clase 4 : 2:18:45
clase 4 : 2:40:48
*/