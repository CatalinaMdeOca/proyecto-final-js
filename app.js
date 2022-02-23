//Carrito libros

class Libro{
    constructor(id, titulo, autor, precio){
        this.id = id;
        this.titulo = titulo.toUpperCase(); 
        this.autor = autor; 
        this.precio = precio;
    }

    // comprar(pedido){
    //     if (this.titulo == pedido) {
    //         return true
    //     } 
    //     return false   .toUpperCase()
    // }
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

//Borrar un producto

// function borrarProd() {

//     localStorage.removeItem();

//     carrito = [];

//     container.innerHTML = "";

//     mostrarProductos();
// }


//mostrar productos 

function mostrarProductos() {

    let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

    if(carritoStorage !== null){
        let container = document.getElementById("container");
        container.innerHTML = "";
        for (let libro of carritoStorage) {
            let cont = document.createElement("div");
            cont.id = libro.id;
            cont.innerHTML = `
                    <div>
                        <h3>${libro.titulo}</h3>
                        <p>${libro.autor}</p>
                        <h4>$${libro.precio}</h4>
                    </div>
                    `
                    let boton = document.createElement("button");
                    boton.id = libro.id;
                    boton.innerHTML = "Eliminar";
                    //boton.addEventListener("click", borrarProd);
            
            cont.appendChild(boton);
            container.appendChild(cont);
        }
    }
}


//Eventos Botones

let botonAgregar = document.getElementById("botonAgregar");
let botonVaciarCarrito = document.getElementById("botonVaciarCarrito");

botonAgregar.addEventListener("click", agregarAlCarrito);
botonVaciarCarrito.addEventListener("click", vaciarCarrito);

