//Carrito libros

class Libro{
    constructor(id, titulo, autor, precio){
        this.id = id;
        this.titulo = titulo.toUpperCase(); 
        this.autor = autor; 
        this.precio = precio;
    }
}


let libros = [
    {
        id:0,
        titulo:"Orgullo y Prejuicio".toUpperCase(),
        autor:"Jane Austen",
        precio:1200,
    },
    {
        id:1,
        titulo:"Harry Potter".toUpperCase(),
        autor:"J. K. Rowling",
        precio:1450,
    },
    {
        id:2,
        titulo:"Caballo de Fuego".toUpperCase(),
        autor:"Florencia Bonelli",
        precio:1300,
    },
]

let carrito = [];

let container = document.getElementById("container");

let mensaje = document.getElementById("mensaje");

let precioDiv = document.getElementById("precio");


//Agregar al carrito

function agregarAlCarrito(evt) {
    evt.preventDefault();
    container.innerHTML = ``;

    let inputProducto = document.getElementById("inputProducto");

    let libro = libros.find((e) => e.titulo === inputProducto.value.toUpperCase());

    if(libro){
        carrito.push(libro);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarProductos();
    } else {
        let msj = document.createElement("div");
        msj.innerHTML = `<div>El producto no fue encontrado. Por favor ingrese otro producto.</div>`;
        container.appendChild(msj);
    }

    console.log(carrito);
}

//borrar productos

function vaciarCarrito() {
    localStorage.clear();

    carrito = [];

    container.innerHTML = "";

    mostrarProductos();
}


//mostrar productos 

function mostrarProductos() {

    let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

        for (let libro of carritoStorage) {

            $("#container").append(`
            <div id="card">
                <h3>${libro.titulo}</h3>
                <p>${libro.autor}</p>
                <h4>$${libro.precio}</h4>
            </div>
            `);
        }
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

