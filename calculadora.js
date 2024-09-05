let Input = ""
/* Selecciona el elemento number mediante el evento onclick para realizar la operción*/
function Add_number(number) {
  Input = Input + number
  let element =  document.getElementById("total")
  element.textContent = Input
}

/*Selecciona el operador (suma, resta, división y multiplicacion) mediante el evento onclick.
  Realiza la operación */
function Add_operator(operator) {
  Input = Input + operator
  let element =  document.getElementById("total")
  element.textContent = Input
}

/*Selecciona el elemento AC mediante el evento onclick.
  Elimina los números u operadores seleccionados.*/
function Ac() {
  Input = ""
  let element= document.getElementById("total")
  element.textContent = '0'  
}

/* Selecciona el elemento Point mediante el evento onclick.
  Permite agregar decímales a la operación*/
function Point() {
  Input = Input + '.'
  let element =  document.getElementById("total")
  element.textContent = Input
}

/*Selecciona el elemento Result mediante el evento onclick.
  Peemite observarf el resultado de la operación.*/
function Result() {
  let Result = eval(Input)
  let element = document.getElementById("total")
  element.textContent = Result
}