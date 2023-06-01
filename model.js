// En el Modelo, la clase Producto representa un producto con un nombre y un precio. La clase Carrito se encarga de almacenar los productos agregados y calcular el total del carrito.

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    let total = 0;
    this.productos.forEach((producto) => {
      total += producto.precio;
    });
    return total;
  }
}
