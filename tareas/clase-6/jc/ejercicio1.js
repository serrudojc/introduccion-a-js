/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

//----------------------------------------------------------------------------
//Siempre tengo que poner Number(array[i].value)? para evitar esto, tengo que crear un array auxiliar con los valores numéricos?
function calculaMayorEdad(array){
    let mayorEdad = Number(array[0].value);
    for(let i=0; i<array.length; i++){
        if(mayorEdad < Number(array[i].value)){
            mayorEdad = array[i].value;
        }
    }
    return mayorEdad;
}

//otra forma de hacer lo mismo que arriba, pero sin usar tantos Number();
function calculaMenorEdad(array){
    let menorEdad = Number(array[0].value);
    for(let i=0; i<array.length; i++){
        const edad = Number(array[i].value);
        if(menorEdad > edad){
            menorEdad = edad;
        }
    }
    return menorEdad;
}

function calculaPromedioEdad(array){
    let promedioEdad = 0;
    for(let i=0; i<array.length; i++){
        promedioEdad = promedioEdad + Number(array[i].value);
    }
    return (promedioEdad/array.length).toFixed(2);
}

const botonNumFamiliares = document.querySelector('#crear-integrantes');
const titulo = document.querySelector('#titulo-form-integrantes');
const nodoForm2 = document.querySelector('#form-integrantes');

botonNumFamiliares.onclick = function(){
    const numFamiliares = Number(document.querySelector('#num-familiares').value);
    
    const nuevoParrafo = document.createElement('p');
    let textoParrafo = document.createTextNode('Ingresar la edad de tu familia');
    nuevoParrafo.appendChild(textoParrafo);
    titulo.appendChild(nuevoParrafo);

    let botonCalcularEdades = document.createElement('button');
    let textoBotonCalcularEdades = document.createTextNode('Calcular');
    botonCalcularEdades.appendChild(textoBotonCalcularEdades);

    for(let i=0; i<numFamiliares; i++){
        let nuevoLabel = document.createElement('label');
        let nuevoInput = document.createElement('input');
        nuevoInput.type = 'number';
        nuevoInput.className = 'edades';
        let nuevoBr = document.createElement('br');
        let textoLabel = document.createTextNode('Ingresar edad ');
        
        nuevoLabel.appendChild(textoLabel);
        nodoForm2.appendChild(nuevoLabel);
        nodoForm2.appendChild(nuevoInput);
        nodoForm2.appendChild(nuevoBr);
    }
    //falta verificar que no introduzca cantidad cero o negativos.
    nodoForm2.appendChild(botonCalcularEdades);

    //Ahora empiezo a calcular con el nuevo formulario
    botonCalcularEdades.onclick = function(){
        const edades = document.querySelectorAll('.edades');

        const tituloResultados = document.querySelector('#resultados');
    
        let mayorEdad = calculaMayorEdad(edades);
        let menorEdad = calculaMenorEdad(edades);
        let promedioEdad = calculaPromedioEdad(edades);

        let nuevoParrafoMayor = document.createElement('p');
        let nuevoParrafoMenor = document.createElement('p');
        let nuevoParrafoProm = document.createElement('p');

        let textoMayorEdad = document.createTextNode('La persona de mayor edad tiene '+mayorEdad+' años.');
        let textoMenorEdad = document.createTextNode('La persona de menor edad tiene '+menorEdad+' años.');
        let textoPromedioEdad = document.createTextNode('Promedio de edad son '+promedioEdad+' años.');

        nuevoParrafoMayor.appendChild(textoMayorEdad);
        tituloResultados.appendChild(nuevoParrafoMayor);
        nuevoParrafoMenor.appendChild(textoMenorEdad);
        tituloResultados.appendChild(nuevoParrafoMenor);
        nuevoParrafoProm.appendChild(textoPromedioEdad);
        tituloResultados.appendChild(nuevoParrafoProm);

        let resetBoton = document.createElement('button');
        let textoResetBoton = document.createTextNode('Resetear');
        resetBoton.id = 'btn-3';
        resetBoton.type = 'reset';
        resetBoton.appendChild(textoResetBoton);

        tituloResultados.appendChild(resetBoton);

        let resetearInput = document.querySelector('#btn-3');
        resetBoton.onclick = function(){
            while(nodoForm2.hasChildNodes()){
                nodoForm2.removeChild(nodoForm2.firstChild);
            }
            while(tituloResultados.hasChildNodes()){
                tituloResultados.removeChild(tituloResultados.firstChild);
            }
            titulo.removeChild(titulo.firstChild);
            document.querySelector('#form-cant-integrantes').reset();
            return false;
        }
        return false;
    }
    return false;
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/