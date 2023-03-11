const name = "Diego";
const edad = 33;
const developer = true;
const date = new Date(" 31 july 1989");

const favoriteBook = {
  titulo: "El principito",
  autor: "Saint it saperi",
  fecha: 1989,
};

/*FACTORIAL DE 10 CON EL BUCLE FOR
let inicio = 1;
for (i = 1; i <= 10; i++) {
  inicio = inicio * i;

//FACTORIAL DE 10 CON EL BUCLE WHILE
let i = 1;
let numero = 1;
while (i <= 10) {
  numero = numero * i;
  i++;
}
console.log(numero)
}*/


//FACTORIAL DE 10 CON EL BUCLE WHILE + BIFURCACION + BREAK
let inicio = 1;
let i = 1;
while (inicio) {
  inicio = inicio * i;
  i++;

  if (i > 10) {
    break;
  }
}
