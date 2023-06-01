class Vista {
  constructor() {
    this.productosContainer = document.getElementById("productos-container");
    this.totalContainer = document.getElementById("total-container");
    this.agregarProductoForm = document.getElementById("agregar-producto-form");
    this.nombreInput = document.getElementById("nombre-input");
    this.precioInput = document.getElementById("precio-input");
  }

  obtenerDatosFormulario() {
    const nombre = this.nombreInput.value;
    const precio = parseFloat(this.precioInput.value);
    return { nombre, precio };
  }

  limpiarFormulario() {
    this.nombreInput.value = "";
    this.precioInput.value = "";
  }

  mostrarProducto(producto) {
    const productoElemento = document.createElement("div");
    productoElemento.innerHTML = `<h3>${producto.nombre}</h3><p>Precio: ${producto.precio} €</p>`;
    this.productosContainer.appendChild(productoElemento);
  }

  mostrarTotal(total) {
    this.totalContainer.textContent = `Total: ${total.toFixed(2)} €`;
  }
}
