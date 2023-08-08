// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del
// script, que nos soluciona el problema de los elementos no cargados del DOM.
// Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */



function showData(dataArray) {
  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}

// Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData


fetch(DATA_URL) 
.then(response => {
  if(!response.ok){
    throw new Error ('Error al obtener el archivo JSON.');
  }
  return response.json(); //else..(si response.ok es true)
})
.then(data => { //se ejecuta cuando archivos json estan disponibles
  showData(data.students); //students es una propiedad del arch json que tiene array de personas.
})
.catch(error => {
  console.log("Error:",error);
});


/**Aquí está el desglose:

fetch(DATA_URL):
 Este es el comienzo de la cadena de promesas. Realiza una solicitud fetch a la URL especificada en DATA_URL para obtener 
 el archivo JSON.

.then(response => { ... }): 
Este bloque se ejecuta cuando la respuesta de la solicitud fetch esté disponible. El parámetro response representa la 
respuesta del servidor.

if (!response.ok) { ... }: 
Se verifica si la propiedad ok de la respuesta es false, lo que indica que la solicitud no fue exitosa. Si es así, se 
lanza un error con un mensaje personalizado.

return response.json();: 
Si la respuesta es exitosa, esta línea convierte la respuesta en un objeto JSON. Esto también pasa al siguiente 
bloque .then.

.then(data => { ... }): 
Este bloque se ejecuta cuando los datos JSON están disponibles. El parámetro data representa los datos convertidos del 
JSON.

showData(data.students);:
 Llama a la función showData() y pasa el array students de los datos JSON como argumento.

.catch(error => { ... }): 
Si ocurre algún error en cualquiera de las promesas anteriores (por ejemplo, si la solicitud fetch falla o la conversión 
  a JSON falla), este bloque capturará el error y lo imprimirá en la consola del navegador. */