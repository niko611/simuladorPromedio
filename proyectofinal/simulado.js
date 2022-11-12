class Alumnos{
        constructor(nombre,apellido,grado,identificacion,materia) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.grado = Number(grado);
                this.identificacion = identificacion;
                this.materia = materia;
}

}

//AGREGANDO ARRAY CON INFORMACION SOBRE MIS ESTUDIANTES
const arrayAlumnos = [];

const alumno1 = new Alumnos('Nicolas',"Osorio", 10, 1004775024, "Programacion");
const alumno2 = new Alumnos('Eduardo',"Plata", 11, 1004994833, "Programacion");
const alumno3 = new Alumnos('David',"Vallejo", 12, 20542500, "Programacion");


arrayAlumnos.push(alumno1,alumno2,alumno3);

console.log(arrayAlumnos);


const mostrarAlumnos = () => {
        let lista = [];
        arrayAlumnos.forEach(alumnos => lista.push("Nombre: "+alumnos.nombre + " "+ alumnos.apellido + " ID: " + alumnos.identificacion ))
        alert ('lista de alumnos:'+'\n'+lista.join('\n'));
}


function gradoElQueCursa() {
    let promedio = '';
    let grado = 0;
    let final = 2;
    let volverAcalcularPromedio = false;
    let nota = 0;
}

//bucle para verifica el grado en el que se encuentra la persona
do {
      grado = prompt("Confirme su nombre por favor");

      //FILTRO PARA BUSCAR
      const alumno = arrayAlumnos.find(alumno => alumno.nombre === grado );
      console.log(alumno);
      

    nota = parseInt(prompt("Ingrese su nota para calcular el promedio de su materia", 'ej: 1.0 hasta 5.0'));
    break;

} while (grado); 

function promedio(nota) {
    alert("Su promedio: " + nota);
}

//promedio



gradoElQueCursa()

promedio(nota/2);
mostrarAlumnos();
