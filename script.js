// BUSCADOR =====================================================================

//Array de Lista de Nombre
//let nameList = document.getElementsByClassName("name")

//cuando el usuario levanta la tecla...
document.getElementById("name-input").addEventListener("keyup", function(){

    //crear una variaable con un array de los nombres
    let nameList = document.getElementsByTagName("li")

    //guardar el contenido de "input" en una variable y convertirlo a minúsculas
    let textInput = document.getElementById("name-input").value.toLowerCase()

    //recorrer todos los nombres del array
    for(let i = 0; i < nameList.length; i++){
        
        //En cada iteracion del array:

        // guardar el contenido del índice del array de esta iteración en una variable y convertirlo a minusculas
        let nameLowCase = nameList[i].textContent.toLowerCase()

        //si el indice del array contiene alguna cadena de texto igual a la del "input":
        if( nameLowCase.includes(textInput) ){
            //pintar ese elemento de la lista
            nameList[i].style.display = "block"
        } else{
            //ocultar ese elemento de la lista
            nameList[i].style.display = "none"
        }

    }

})

//Cuando se pulsa el botón "limpiar":
document.getElementById("refresh-btn").addEventListener("click", function(){

    //limpiar el contenido del "input"
    document.getElementById("name-input").value = null

    //obtener todos los elementos con "li" y crear un array en una variable
    let nameList = document.getElementsByTagName("li")
    
    //recorrer todos los elementos de Array y renderearlos con "display block"
    for(let i = 0; i < nameList.length; i++){
        nameList[i].style.display = "block"
    }
})


// AGREGADOR ======================================================================================

// se crea una función que agregue el contenido de "input" a una "li" y lo renderice
function renderList(){
    // Guardar string de "input" en variable
    let nuevoNombre = document.getElementById("nuevo-nombre").value

    //Si hay datos en "input":
    if(nuevoNombre){

        //crear un tag "li"
        let elemento = document.createElement("li")
        //crear un nodo de texto con el valor del "input"
        let texto = document.createTextNode(nuevoNombre)
        //agregar el texto a "li"
        elemento.appendChild(texto)
        //agregar "li" a la lista "ul"
        document.getElementById("lista").appendChild(elemento)

        //resetear la casilla "input"
        document.getElementById("nuevo-nombre").value = null
    }  
}

//Cuando se presione el botón "agregar", ejecutar la funcion "renderList":
document.getElementById("agregar-btn").addEventListener("click", renderList)

// O Cuando se presione la tecla Enter ejecutar la funcion "renderList":
document.getElementById("nuevo-nombre").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        renderList()
    }
})


// Borrar Lista ==========================================================================

//cuando se de click en el boton "borrar lista":
document.getElementById("clear-btn").addEventListener("click", function(){
    
    //borrar el contenido de "ul"
    document.getElementById("lista").innerHTML = null
})
