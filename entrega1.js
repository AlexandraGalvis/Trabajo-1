let curso = [{
	Id: 123,
	Nombre: 'Diseño grafico',
	Duracion: '42 horas',
	Valor: 10000,
},
{
	Id: 234,
  	Nombre: 'Infraestructura',
  	Duracion: '35 horas',
  	Valor: 50000,
},
{
	Id: 345,
  	Nombre: 'Lenguajes',
  	Duracion: '78 horas',
  	Valor: 0,
}];


for (let i=0;i<curso.length;i++) {
	setTimeout(() => {imprimir(i)}, (2000*(i+1)));
}

let imprimir = (x) => {
	console.log('El curso ' +curso[x].Nombre + ' con el id ' +curso[x].Id + ' tiene una duracion de '
	 +curso[x].Duracion + ' con un valor de '+ curso[x].Valor);
};

