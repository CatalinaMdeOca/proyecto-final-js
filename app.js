//Carrito libros

class Libro{
    constructor(titulo, autor, precio){
        this.titulo = titulo; 
        this.autor = autor; 
        this.precio = Number(precio);
    }

    comprar(pedido){
        if (this.titulo == pedido) {
            return true
        } 
        return false
    }
}

let compraTotal = [];


const orgulloYPrejuicio = new Libro("Orgullo y Prejuicio", "Jane Austen", 1200);

const harryPotter = new Libro("Harry Potter", "J. K. Rowling", 1450);

const caballoDeFuego = new Libro("Caballo de Fuego", "Florencia Bonelli", 1300);

let unidades = Number(prompt("Ingrese la cantidad de unidades que va a comprar"));

function aplicarDescuento(precioDelLibro, descuentoMonto) {
    let descontar = precioDelLibro - descuentoMonto;
    console.log("El costo es de " + descontar)
}


for (let i = 0; i < unidades; i++) {
    let compra = prompt("Escriba el título del libro que desea comprar. Las opciones son:" +"\n" + "Orgullo y Prejuicio" + "\n" + "Harry Potter" + "\n" + "Caballo de Fuego");
    

    if (orgulloYPrejuicio.comprar(compra)) {
        compraTotal.push(new Libro(orgulloYPrejuicio.título, orgulloYPrejuicio.autor, orgulloYPrejuicio.precio));

        let descuento = (confirm("¿Tiene algún descuento?"));

        if (descuento == true) {
            let montoDescuento = Number(prompt("Ingrese el monto de su descuento"));

            aplicarDescuento(orgulloYPrejuicio.precio, montoDescuento);
        } else{
            console.log("El costo es de " + orgulloYPrejuicio.precio);
        }

        
    }

    if (harryPotter.comprar(compra)) {
        compraTotal.push(new Libro(harryPotter.título, harryPotter.autor, harryPotter.precio));

        let descuento = (confirm("¿Tiene algún descuento?"));

        if (descuento == true) {
            let montoDescuento = Number(prompt("Ingrese el monto de su descuento"));

            aplicarDescuento(harryPotter.precio, montoDescuento);
        } else{
            console.log("El costo es de " + harryPotter.precio)
        }

        
    }

    if (caballoDeFuego.comprar(compra)) {
        compraTotal.push(new Libro(caballoDeFuego.título, caballoDeFuego.autor, caballoDeFuego.precio));

        let descuento = (confirm("¿Tiene algún descuento?"));

        if (descuento == true) {
            let montoDescuento = Number(prompt("Ingrese el monto de su descuento"));

            aplicarDescuento(caballoDeFuego.precio, montoDescuento);
        } else{
            console.log("El costo es de " + caballoDeFuego.precio);
        }
    }
}

console.log(compraTotal)
