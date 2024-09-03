let Input = ""

function Add_number(number) {
    Input = Input + number
    let element =  document.getElementById("total")
    element.textContent = Input
}

function Add_operator(operator) {
    Input = Input + operator
    let element =  document.getElementById("total")
    element.textContent = Input
}

function Ac() {
   Input = ""
   let element= document.getElementById("total")
   element.textContent = '0'  
}

function Point() {
    Input = Input + '.'
    let element =  document.getElementById("total")
    element.textContent = Input
}

function Result() {
   let Result = eval(Input)
   let element = document.getElementById("total")

    element.textContent = Result
}

/*document.addEventListener('keydown', function(event) {
    let key = event.key;

    console.log(key)

    if(key>=0 && key<=9){

        console.log("es numero")
        Add_number(key)
    }
    else{
        console.log("no es numero")
    }
});
*/