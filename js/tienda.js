//script funcionalidad de carrito y tienda
//   localStorage.setItem("carrito","")
//   localStorage.setItem("productos","")
//   localStorage.setItem("cantidadItems","")
//   localStorage.setItem("total","")
// console.log("ejecutando tienda")

// const productos = JSON.parse(localStorage.getItem("productos")) : [{ nombre: "papas", precio: 2300,cantidad:0}, { nombre: "pasteles",cantidad:0, precio: 2500}, { 
// nombre: "café", precio: 2000,cantidad:0}]

//ELEMENTOS BUSCADOS EN HTML:
const body = document.querySelector("body")
const contenedorProductos = document.querySelector(".products")
const navBarContainer = document.querySelector(".container1")


const logoCarrito = document.createElement(`div`);
logoCarrito.id = "logo-carrito";
navBarContainer.appendChild(logoCarrito);
logoCarrito.addEventListener("click", (e) => { mostrarCarrito() })

let contenedorCarrito = document.createElement(`div`);

//VARIABLES CREADAS CON LA INFO DE LOCAL STORAGE

const productosJSON = localStorage.getItem("productos");
let productos = productosJSON ? JSON.parse(productosJSON) : [
    { nombre: "papas", precio: 2300, cantidad: 0 },
    { nombre: "pasteles", precio: 2500, cantidad: 0, },
    { nombre: "café", precio: 2000, cantidad: 0 }]

let cantidadItems = parseInt(localStorage.getItem("cantidadItems")) || 0;
let carritoJSON = localStorage.getItem("carrito");
let carrito = carritoJSON ? JSON.parse(carritoJSON) : [];
let miTotal = parseInt(localStorage.getItem("total")) || 0;

//CREACION DE FUNCIONES
//Actualiza los datos de local storage
function actualizarLocalStorage() {
    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("cantidadItems", cantidadItems);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("total", miTotal);
}
//actualiza el contador del carrito
function actualizarContador() {
    logoCarrito.innerHTML = `<img id="logo-carrito" src="../images/cart-regular-24.png" width="30px"/><p>${cantidadItems}</p>`;
}

//Crea el catálogo en la cafetería virtual, inserta las fotos y el botón de añadir al carrito.
function crearCatalogo() {
    productos.forEach(producto => {
        let cartaProducto = document.createElement(`div`)
        cartaProducto.className = "carts"
        cartaProducto.innerHTML = `<img src="../images/${producto.nombre}.jpg" width="80px";>
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}</p>
            <button class="sumar-carro" id="btn-${producto.nombre}">Añadir al carrito</button>`
        contenedorProductos.appendChild(cartaProducto)
    })
}
//Actualiza el contenido del carrito
function actualizarCarrito() {
    productos.forEach(producto => {
        let btnSumarCarro = document.querySelector(`#btn-${producto.nombre}`)
        btnSumarCarro.addEventListener("click", (e) => {
            carrito.unshift(producto);
            miTotal += producto.precio;
            cantidadItems += 1;
            let index = productos.findIndex(item => item.nombre == producto.nombre);
            if (index !== -1) { producto.cantidad += 1 };
            actualizarContador()
            actualizarLocalStorage();
            mostrarCarrito()
        })
    })
}



function mostrarCarrito() {
    contenedorCarrito.innerHTML = `<div><button class="close-btn">X</button><h1>Mi Carrito</h1><br><h2 id="h2total">Total: ${miTotal}</h2></div>`
    contenedorCarrito.className = "cart-products";
    productos.forEach(element => {
        if (element.cantidad > 0) {
            contenidoCarta(element);

        }
    })
   crearBotonesEliminar();
   let btnCerrar=document.querySelector(".close-btn")
   closeBtn(btnCerrar)
}
function contenidoCarta(element) {
    let cart = document.createElement(`div`);
    cart.innerHTML = `<img src="../images/${element.nombre}.jpg"/><h3>${element.nombre}<br> ${element.precio}<br> Cantidad:${element.cantidad}</h3><button class="delete-product" id="eliminar${element.nombre}">X</button>`
    cart.className = "item";
    cart.id = `${element.nombre}`
    contenedorCarrito.appendChild(cart)
}

function crearBotonesEliminar(){ body.appendChild(contenedorCarrito);
    console.log("creandobotoneseliminar")
    let botonesEliminar = document.querySelectorAll(".delete-product");
    console.log(botonesEliminar)
    let botonesEliminarArray= Array.from(botonesEliminar)
    console.log(botonesEliminarArray)
    eliminarProducto(botonesEliminarArray);}
    
/*function eliminarProducto(){
    const botonesEliminar=document.querySelectorAll(".delete-product");
    let btnsEliminar=Array.from(botonesEliminar)    
    btnsEliminar.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            productos.forEach((producto)=>{
            if (producto.cantidad > 0) {
                // Reducir la cantidad en 1 y actualizar la cantidad en la interfaz de usuario
                producto.cantidad--;
                cantidadItems--;
                miTotal -= producto.precio;
                carrito.unshift(producto);
                actualizarLocalStorage();
                actualizarContador();
                contenidoCarta();
            }
            else if (producto.cantidad = 0) {
                let cart = document.querySelector(`#${producto.nombre}`)
                cart.remove()
            }
        })
    })
    })}*/

function closeBtn(boton){
boton.addEventListener("click",(e)=>{
contenedorCarrito.remove();
})
}

function eliminarProducto(botones) {
      botones.forEach((boton) => {
        boton.addEventListener("click", (evento) => {
            const nombreProducto = boton.parentNode.id;
            const producto = productos.find((p) => p.nombre === nombreProducto);
            if (producto) {
                if (producto.cantidad > 0) {
                    producto.cantidad--;
                    cantidadItems--;
                    miTotal -= producto.precio;
                    carrito.unshift(producto);
                    actualizarLocalStorage();
                    actualizarContador();
                    mostrarCarrito();
                } else if (producto.cantidad === 0) {
                    boton.parentNode.remove();
                }
            }
        });
    });
}

//EL "REMOVE" sirve para que cada vez que se cierre, se borre tmb el elemento, entonces cuando lo creas vuelve a adquirir la función de cerrar, sino solo funcionaba una vez.


//LLAMADO A FUNCIONES
crearCatalogo()
actualizarCarrito()




