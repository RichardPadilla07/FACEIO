const productos = [
  {
    id: 1,
    nombre: "Laptop Gamer",
    precio: 950,
    imagen: "https://images.unsplash.com/photo-1611078489935-b8d6f4b6c52f"
  },
  {
    id: 2,
    nombre: "Teclado Mecánico RGB",
    precio: 120,
    imagen: "https://images.unsplash.com/photo-1611605693052-c0b3ba1c9a65"
  },
  {
    id: 3,
    nombre: "Silla Ergonómica",
    precio: 320,
    imagen: "https://images.unsplash.com/photo-1629119671903-e0be7b6f98cf"
  },
  {
    id: 4,
    nombre: "Mouse Inalámbrico",
    precio: 40,
    imagen: "https://images.unsplash.com/photo-1593642634367-d91a135587b5"
  }
];

const contenedor = document.getElementById("productos");
const carrito = document.getElementById("carrito");
const totalTexto = document.getElementById("total");

let total = 0;

productos.forEach(p => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}">
    <h3>${p.nombre}</h3>
    <p>Precio: $${p.precio}</p>
    <button onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
  `;
  contenedor.appendChild(div);
});

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  const item = document.createElement("li");
  item.textContent = `${producto.nombre} - $${producto.precio}`;
  carrito.appendChild(item);
  total += producto.precio;
  totalTexto.textContent = total.toFixed(2);
}
