const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido')

cargarEventos();

function cargarEventos() {
    // Anadir productos
    productos.addEventListener('click', (e) => {carro.comprarProducto(e)});
    // Eliminar producto
    carrito.addEventListener('click', (e) => {carro.eliminarProducto(e)});
    // Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', (e) => {carro.vaciarCarrito(e)})
    // LS
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage())
    // Procesar pedido
    procesarPedidoBtn.addEventListener('click', (e) => {carro.procesarPedido(e)})
}