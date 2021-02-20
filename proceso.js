const {cursos, imprimir} = require('./entrega1.js');
const fs = require('fs');
const yargs = require('yargs');
var numeral = require('numeral');

const opciones = {
    'id':{
        alias:'i',
        describe:'Id del curso a inscribir',
        demand: true
    },
    'nombre':{
        alias:'n',
        describe:'Nombre del interesado',
        demand: true
    },
    'cedula':{
        alias:'c',
        describe:'Cedula del interesado',
        demand: true
    }
}

const argv = yargs.command('inscribir', 'Realizar inscripcion a un curso', opciones).argv

if(argv._.find(comando => comando == 'inscribir')){
    let nombre = argv.nombre;
    let cedula = argv.cedula;
    let id = argv.Id;
    realizarInscripcion(id, nombre, cedula);
}else{
    imprimirCursos(cursos);
}

function imprimirCurso(curso){
    console.log(`Curso: ${curso.nombre}`);
    console.log(`Id: ${curso.Id}`);
    console.log(`Duracion: ${curso.Duracion} dias`);
    console.log(`Valor: ${numeral(curso.Valor).format('$0,0.00')}`);
}

function imprimirCursos(arregloCursos){
    let intervalo = 0;
    arregloCursos.forEach(curso => {
        setTimeout(function(){
            imprimirCurso(curso);
        }, intervalo);
        intervalo += 2000;
    });
}

function realizarInscripcion(id, nombre, cedula){
    console.log();
    let curso = cursos.find(Curso => curso.Id == id);
        
    if(curso == null){
        console.log('El curso especificado no existe');
        return;
    }

    imprimirCurso(curso);

    let interesado = {
        nombre: nombre,
        cedula: cedula
    };

    guardarArchivo(curso, interesado);
}

let guardarArchivo = (Cursos, interesado) => {
	texto = ('interesado: Nombre:' + interesado.nombre + 'Cedula: ' + interesado.cedula + 'Detalle del curso:\nCurso: '
	+ curso.nombre + 'Id: ' + curso.Id + 'Duracion: ' + curso.Duracion + 'Valor: ' + curso.Valor)

  fs.writeFile(informacion.txt, texto, (err) => {
  	 if(err){
            console.log('Ha ocurrido un error al escribir el archivo');
            console.log(err);
        }else{
            console.log(`Se ha guardado su comprobante en el archivo "${informacion.txt}"`);
        }
   });
}

