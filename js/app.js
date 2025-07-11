function numeroMagico() {
    //creo numero magico
    numMagico= Math.floor(Math.random() * 11);
    console.log(numMagico)

    const parrafo = document.getElementById("parrafo")
    parrafo.textContent="Se generó el número mágico"
    const formulario=document.querySelector("form")
    formulario.className = ("")

}

const obtenerNumero=(e)=>{ //se pone la e si o si en los eventos submit
    e.preventDefault()  //para que no se me recargue la pagina por el evento submit, se usa SIEMPRE en los forms
    

    let input = document.querySelector(".form-control") //me da un array de los objetos q cumplen esa clase
    input=parseInt(input.value) //muestro lo que pongo en el input

    if (isNaN(input)) {
        alert("Por favor, ingresá un número válido");
        return;
    }
    
    if(input<numMagico){
       alert("El numero ingresado es menor")
       formulario.reset()
    }else if(input>numMagico){
        alert("El numero ingresado es mayor")
        formulario.reset()
    }else{
        alert("ADIVINASTE EL NUMERO MÁGICO")
        formulario.reset()
    }


  
}
let numMagico

const btnRojo=document.querySelector(".btn-danger")

btnRojo.addEventListener("click",numeroMagico)

const formulario = document.querySelector("#formNumero")

formulario.addEventListener("submit", obtenerNumero)
