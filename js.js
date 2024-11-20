console.log("Hola")

/* Programa una funcion que cuente el numero de caracteres de una cadena de texto */

const contarCadena = (cadena = "") => {

    (cadena) 
    ? console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)
    : console.log("No pusiste ninguna cadena para contar")

}

    

contarCadena("Hola como estas")
contarCadena()

console.log("Numero Aleatorio entre 500 a 1000")

const aleatorio = () => console.log( Math.round(Math.random() * 100) + 500)
aleatorio()