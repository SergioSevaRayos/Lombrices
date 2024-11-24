// Lista inicial de productos
const productos = [
    { id: 1, nombre: "Cebo vivo", descripcion: "Cebos para surfcasting", imagen: "media/img/bloodworm2.png" },
    { id: 2, nombre: "Señuelos", descripcion: "Señuelos para spinnig", imagen: "media/img/señuelo.png" },
    { id: 3, nombre: "Aparejos", descripcion: "Componentes para aparejos", imagen: "media/img/plomo.png" },
    { id: 4, nombre: "Cebo para pulpos", descripcion: "Cebo dedicado a la pesca con nasas", imagen: "media/img/pulpo1.png" },
    { id: 5, nombre: "Contacto", descripcion: "Ponte en contacto", imagen: "media/img/contacto.png" }
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
            <img src="${producto.imagen}" alt="${producto.nombre}" />
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
