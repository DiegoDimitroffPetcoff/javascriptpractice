var nombre = "Diego"
var asignatura = ["javascript", "html", "css"]


class Estudiante{
    constructor(nombre, asignatura){
    this.nombre = nombre
    this.asignatura =  asignatura 
    }

    obtenDatos(){
        return `El nombre del estudiante es ${this.nombre} y las materias son ${this.asignatura}`
    }
}

const estudiante1 = new Estudiante(nombre, asignatura)
console.log(estudiante1.obtenDatos())