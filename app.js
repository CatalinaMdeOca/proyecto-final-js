//Carrito libros

class Libro{
    constructor(id, titulo, autor, precio, cantidad){
        this.id = id;
        this.titulo = titulo.toUpperCase(); 
        this.autor = autor; 
        this.precio = precio;
        this.cantidad = cantidad;
        this.precioTotal = precio;
    }

    agregarUnidad(){
        this.cantidad++;
    }

    quitarUnidad(){
        this.cantidad--;
    }

    actualizarPrecio(){
        this.precioTotal = this.precio * this.cantidad;
    }
}



let carrito = [];

let container = document.getElementById("container");

let mensaje = document.getElementById("mensaje");

let precioDiv = document.getElementById("precio");


//IMPRIMIR PROD HTML

$(document).ready(function () {
    
            $.get("libros.json", function (data) {
                    console.log(data);
    
                    $.each(data, function (index, libro) { 
                        $("#contenedor").append(`<div id="card">
                                                <h3>${libro.titulo}</h3>
                                                <h5>${libro.autor}</h5>
                                                <h3>$${libro.precio}</h3>
                                                `);
                    });

                    // let botonAgregarCard = document.getElementById(`#agregar${libro.id}`);
    
                    // botonAgregarCard.addEventListener("click", agregarCard)

                //     <div>
                //     <button id="agregar${libro.titulo}">Agregar</button>
                // </div>
                });
    });



//AGREGAR CARD

function agregarAlCarrito(evt) {
    evt.preventDefault();    

    container.innerHTML = ``;

    $.get("libros.json", function (data) {
            $.each(data, function (index, libro) { 
                
                    if($("#selectProducto :selected").val() == index){
                        carrito.push(libro);
                        localStorage.setItem("carrito", JSON.stringify(carrito));

                        $("#container").append(`
                                            <div id="mostrar">
                                                <h3>Se agregó al carrito:</h3><br>
                                                <ul id="lista">
                                                <li>${libro.titulo + " $" + libro.precio}</li>
                                                </ul>
                                            </div>
                                            `);
                    } 
            });
    });
}




//Agregar al carrito

// function agregarAlCarrito(evt) {
//     evt.preventDefault();    

//     container.innerHTML = ``;

//     $.get("libros.json", function (data) {
//             $.each(data, function (index, libro) { 
                
//                     if($("#selectProducto :selected").val() == index){
//                         carrito.push(libro);
//                         localStorage.setItem("carrito", JSON.stringify(carrito));

//                         $("#container").append(`
//                                             <div id="mostrar">
//                                                 <h3>Se agregó al carrito:</h3><br>
//                                                 <ul id="lista">
//                                                 <li>${libro.titulo + " $" + libro.precio}</li>
//                                                 </ul>
//                                             </div>
//                                             `);
//                     } 
//             });
//     });
// }



//MOSTRAR CARRITO

function mostrarCarrito(evt) {
    evt.preventDefault();

    container.innerHTML = ``;

    let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

            $("#container").append(`
            <div id="mostrar">
                <h3>El carrito contiene los siguientes productos:</h3><br>
                <ul id="lista">
                </ul>
            </div>
            `);

        for (let libro of carritoStorage) {
            $("#lista").append(`<li>${libro.titulo}</li>`);
        }
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
let botonVerCarrito = document.getElementById("botonVerCarrito");

botonAgregar.addEventListener("click", agregarAlCarrito);
botonVaciarCarrito.addEventListener("click", vaciarCarrito);
botonVerCarrito.addEventListener("click", mostrarCarrito);
