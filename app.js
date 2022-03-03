//Carrito libros

class Libro{
    constructor(id, titulo, autor, precio, cantidad){
        this.id = id;
        this.titulo = titulo.toUpperCase(); 
        this.autor = autor; 
        this.precio = precio;
        this.cantidad = cantidad;
    }

    agregarUnidad(){
        this.cantidad++;
    }

    quitarUnidad(){
        this.cantidad--;
    }
}




// let libros = [
//     {
//         id:0,
//         titulo:"Orgullo y Prejuicio".toUpperCase(),
//         autor:"Jane Austen",
//         precio:1200,
//     },
//     {
//         id:1,
//         titulo:"Harry Potter".toUpperCase(),
//         autor:"J. K. Rowling",
//         precio:1450,
//     },
//     {
//         id:2,
//         titulo:"Caballo de Fuego".toUpperCase(),
//         autor:"Florencia Bonelli",
//         precio:1300,
//     },
// ]

let carrito = [];

let container = document.getElementById("container");

let mensaje = document.getElementById("mensaje");

let precioDiv = document.getElementById("precio");


//IMPRIMIR PROD HTML

$(document).ready(function () {
    //$("#botonAgregar").click(function (e) { 
            //e.preventDefault();
    
            $.get("libros.json", function (data) {
                    console.log(data);
    
                    $.each(data, function (index, libro) { 
                        $("#contenedor").append(`<div       style="margin: 15px;" id="card">
                                                <h3>${libro.titulo}</h3>
                                                <h5>${libro.autor}</h5>
                                                <h3>$${libro.precio}</h3>
                                                `);

                        // $(`agregar${libro.id}`).click(function () { 
                            // <button type="button" id="agregar${libro.id}">Agregar</button>
                            //                     </div>
                        // });
                    });
    
                }
            );
        //});
    });


//Agregar al carrito

function agregarAlCarrito(evt) {
    evt.preventDefault();

    let inputProducto = document.getElementById("selectProducto");

    $.get("libros.json", function (data) {
            $.each(data, function (index, libro) { 
                
                    if(inputProducto.value == libro.id){
                        
                        carrito.push(libro);
                        localStorage.setItem("carrito", JSON.stringify(carrito));
                        //mostrarProductos();
                    } else {
                        $("#container").append(`<div>El producto no fue encontrado. Por favor ingrese otro producto.</div>`);
                    }
                
            });
    });

    container.innerHTML = ``;

    //let libro = libros.find((e) => e.titulo === inputProducto.value.toUpperCase());
    console.log(carrito);

    //mostrarProductos();
}




//borrar productos

function vaciarCarrito() {
    localStorage.clear();

    carrito = [];

    container.innerHTML = "";
}



//Eventos Botones


$("#botonOcultarCarrito").click(function () { 
    $("#container").animate({
                        opacity:"0.5",
                    })
                    .slideUp(2000)
                    ;
});

$("#botonMostrarCarrito").click(function () { 
    $("#container").slideDown(2000)
                    .animate({
                        opacity:"1",
                    });
});

let botonAgregar = document.getElementById("botonAgregar");
let botonVaciarCarrito = document.getElementById("botonVaciarCarrito");

botonAgregar.addEventListener("click", agregarAlCarrito);
botonVaciarCarrito.addEventListener("click", vaciarCarrito);

