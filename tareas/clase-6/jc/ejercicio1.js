/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const botonNumFamiliares = document.querySelector('#btn-1');
const nodoForm2 = document.querySelector('#form2');

botonNumFamiliares.onclick = function(){
    const numFamiliares = Number(document.querySelector('#numFamiliares').value);
    
    let nuevoBoton = document.createElement('button');
    let textoNuevoBoton = document.createTextNode('Calcular');
    nuevoBoton.id = 'btn-2';
    nuevoBoton.appendChild(textoNuevoBoton);

    for(let i=0; i<numFamiliares; i++){
        let nuevoLabel = document.createElement('label');
        let nuevoInput = document.createElement('input');
        nuevoInput.type = 'number';
        let nuevoBr = document.createElement('br');
        let textoLabel = document.createTextNode('Ingresar edad ');
        
        nuevoLabel.appendChild(textoLabel);
        nodoForm2.appendChild(nuevoLabel);
        nodoForm2.appendChild(nuevoInput);
        nodoForm2.appendChild(nuevoBr);
    }
    nodoForm2.appendChild(nuevoBoton);
    //console.log('hice click');
    return false;
}








/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/