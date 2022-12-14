//calculadora de promedios de alumnos 
alert("Bienvenidos a la Calculadora de Promedios de la Esc. Sec. N°1");

const usuarioAutorizado = "director";
const contraseniaAutorizada = "1394";

let usuario = prompt("Ingrese su usuario: ");
let contrasenia = prompt("Ingrese su contraseña: ");

if (usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
    alert("Bienvenido " + usuario);
    let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos a calcular"));

    for (let i = 0; i < cantidadAlumnos; i++) {
        let nombreAlumno = prompt("Ingrese el nombre del alumno");
        let nota1 = parseInt(prompt("Ingrese la nota 1: "));
        let nota2 = parseInt(prompt("Ingrese la nota 2: "));
        let nota3 = parseInt(prompt("Ingrese la nota 3: "));
        let promedio = calcularPromedio(nota1, nota2, nota3);
        alert("El promedio de " + nombreAlumno + " es " + promedio);

        let aprueba = apruebaAnio(promedio);
        if (aprueba) {
            alert(nombreAlumno + " aprueba el año");
        } else {
            alert(nombreAlumno + " no aprueba el año");
        }
    }
} else {
    alert("usuario o contraseña incorrecta");
}

//Funciones: 

function calcularPromedio(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

function apruebaAnio(promedio) {
    if (promedio >= 6) {
        return true;
    } else {
        return false;
    }
}




// lista de tareas de alumnos

(function () {
    // Variables
    let lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

    // Funciones
    let agregarTarea = function () {
        let tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;
        }

        // Agregamos el contenido al enlace
        enlace.appendChild(contenido);
        // Le establecemos un atributo href
        enlace.setAttribute("href", "#");
        // Agrergamos el enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        // Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);

        tareaInput.value = "";

        for (let i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", function () {
                this.parentNode.removeChild(this);
            });
        }

    };
    let comprobarInput = function () {
        tareaInput.className = "";
        teareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };

    let eleminarTarea = function () {
        this.parentNode.removeChild(this);
    };

    // Eventos

    // Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    // Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);

    // Borrando Elementos de la lista
    for (let i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", eleminarTarea);
    }

}());