// Lista inicial de productos
const productos = [
    { id: 1, nombre: "Cebo vivo", descripcion: "Cebos para surfcasting" },
    { id: 2, nombre: "Señuelos", descripcion: "Señuelos para spinnig" },
    { id: 3, nombre: "Aparejos", descripcion: "Componentes para aparejos" },
    { id: 4, nombre: "Cebo para pulpos", descripcion: "Cebo dedicado a la pesca con nasas" },
    { id: 5, nombre: "Contacto", descripcion: "Ponte en contacto" }
];

// Generar el menú de productos
function generarMenu() {
    const menu = document.getElementById("menu-productos");
    menu.innerHTML = "";
    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#${producto.id}">${producto.nombre}</a>`;
        menu.appendChild(li);
    });
}

// Generar lista de productos
function generarProductos() {
    const contenedor = document.getElementById("lista-productos");
    contenedor.innerHTML = "";
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
        `;
        contenedor.appendChild(div);
    });
}

// Inicializar página
function inicializar() {
    generarMenu();
    generarProductos();
}

// Llamar a la función de inicialización
document.addEventListener("DOMContentLoaded", inicializar);
