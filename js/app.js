/* 2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
    1. mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

    2. esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
    3. mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
 */

//VARIABLES GLOBALES------------------------------------------------------------------------------------------------------------------------------
const formularioObtenido = document.querySelector("#obtenerFormulario");
const btnMostrarDatos = document.querySelector("#btnMostrarDatos");
const btnMayorMenor = document.querySelector("#btnMayorMenor");
let inputEdad = 0;
let edad = 0;
let inputNombre = "".toUpperCase;

/* FUNCIONES -------------------------------------------------------------------------------------------------------------------------------------*/
//1. Obtener los datos del formulario.
const mostrarDatos = () => {
  inputNombre = document.querySelector("#nombre").value;
  console.log(inputNombre);

  inputEdad = parseInt(document.querySelector("#edad").value);
  console.log(inputEdad);

  const inputGenero = document.querySelector(".form-select").value;
  let genero = "";
  if (inputGenero === "1") {
    console.log("Femenino");
    genero = "Femenino";
  } else if (inputGenero === "2") {
    console.log("Masculino");
    genero = "Masculino";
  } else {
    console.log("Sin determinar");
    genero = "Sin determinar";
  }

  const inputDni = document.querySelector("#dni").value;
  console.log(inputDni);

  const inputPeso = document.querySelector("#peso").value;
  console.log(inputPeso);

  const inputAltura = document.querySelector("#altura").value;
  console.log(inputAltura);

  alert(`Tu información:
  Nombre: ${inputNombre}
  Año de Nacimiento: ${inputEdad}
  Edad: ${edad} años
  Género: ${genero}
  DNI: ${inputDni}
  Peso: ${inputPeso}kg
  Altura: ${inputAltura}cm
   `);
};

const mayorOMenor = () => {
  inputNombre = document.querySelector("#nombre").value;
  inputEdad = parseInt(document.querySelector("#edad").value);
  edad = parseInt(2023 - inputEdad);
  console.log(edad);
  console.log(`Tu edad es de: ${edad}`);
  if (edad >= 18) {
    alert(`Hola ${inputNombre}, eres mayor de EDAD`);
  } else if (edad < 18) {
    alert(`Hola ${inputNombre}, eres menor de EDAD`);
  } else {
    alert(`Ingresa una edad valida`);
  }
};

const mostrarGeneracion = (e) => {
  e.preventDefault();
  inputEdad = parseInt(document.querySelector("#edad").value);
  edad = parseInt(2023 - inputEdad);
  console.log(edad);
  switch (true) {
    case edad >= 75:
      alert(`
        Pertenece a Silent Generation: "Los niños de la posguerra" 1930 - 1948
        
        Naciste en ${inputEdad}, tu edad es: ${edad} años
        El indice de poblacion fue de: 6.300.000
        Circunstancia histórica: Conflictos bélicos
        Rasgo caracteristico: Austeridad
        `);
      break;
    case edad >= 55 && edad <= 74:
      alert(`
          Pertenece a Baby Boom Generation 1949 - 1968
          
          Naciste en ${inputEdad}, tu edad es: ${edad} años
          El indice de poblacion fue de: 12.200.000
          Circunstancia histórica: Paz y explosión demográfica
          Rasgo caracteristico: Ambición
          `);
      break;
    case edad >= 43 && edad <= 54:
      alert(`
      Pertenece a Generación X 1969 - 1980
      
      Naciste en ${inputEdad}, tu edad es: ${edad} años
        El indice de poblacion fue de: 9.300.000
        Circunstancia histórica: Crísis del 73
        Rasgo caracteristico: Obseción por el éxito
      `);
      break;
    case edad >= 30 && edad <= 42:
      alert(`
      Pertenece a Generación Y "millenials" 1981 - 1993
      
      Naciste en ${inputEdad}, tu edad es: ${edad} años
      El indice de poblacion fue de: 7.200.000
      Circunstancia histórica: Inicio de la digitalización
      Rasgo caracteristico: Frustración
      `);
      break;
    case edad >= 13 && edad <= 29:
      alert(`
      Pertenece a la Generación Z  Generation 1994 - 2010
    
      Naciste en ${inputEdad}, tu edad es: ${edad} años
      El indice de poblacion fue de: 7.800.000
      Circunstancia histórica: Expansión masiva del Internet
      Rasgo caracteristico: Irreverencia
      `);
      break;
    default:
      alert("Eres demasiado peque");
      break;
  }
};

//------------------------------------------------logica------------------------------------------------------------------------
formularioObtenido.addEventListener("submit", mostrarGeneracion);
btnMostrarDatos.addEventListener("click", mostrarDatos);
btnMayorMenor.addEventListener("click", mayorOMenor);
