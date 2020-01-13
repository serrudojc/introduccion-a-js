//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


const botonEnviar = document.querySelector('button');
const resultadoPromedio = document.querySelector('#promedio');
const resultadoMenor = document.querySelector('#menor');
const resultadoMayor = document.querySelector('#mayor');
const resultadoRepetido = document.querySelector('#repetido');


botonEnviar.onclick = function(){
    const $listaNumeros = document.querySelectorAll('input');
    
    let menor = Number($listaNumeros[0].value);
    let mayor = Number($listaNumeros[0].value);
    let repetido = Number($listaNumeros[0].value);
    //revisar tema de mostrar numero mas repetido.
    let contRepetido=[];
    let sumatoria = 0;
    
    for(let i=0; i<$listaNumeros.length; i++){
        if(menor > Number($listaNumeros[i].value)){
            menor = Number($listaNumeros[i].value);
        }

        if(mayor < Number($listaNumeros[i].value)){
            mayor = Number($listaNumeros[i].value);
        }

        sumatoria +=Number($listaNumeros[i].value);

        if(mayor < Number($listaNumeros[i].value)){
            mayor = Number($listaNumeros[i].value);
        }

        for(let j=i; j<$listaNumeros.length; j++){
            if(repetido === Number($listaNumeros[j].value)){
                repetido = Number($listaNumeros[j].value);
                contRepetido[i]++;
            }
        }
    }
    let prom = sumatoria/$listaNumeros.length;

    //esto no funca. Luego verlo mejor.
    let masRepetido = Number($listaNumeros[0].value);
    for(let i=0; i<$listaNumeros.length; i++){
        for(let j=i+1; j<$listaNumeros.length-1; j++){
            if(contRepetido[i]>contRepetido[j]){
                masRepetido = Number($listaNumeros[i].value);
            }
        }
    }
    resultadoPromedio.innerText = `El promedio es ${prom}`;
    resultadoMenor.innerText = `El número más pequeño es ${menor}`;
    resultadoMayor.innerText = `El número más grande es ${mayor}`;
    resultadoRepetido.innerText = `El número más frecuente es ${masRepetido}`;
    return false;
}



