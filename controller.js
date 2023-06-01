// El Controlador actúa como intermediario entre el Modelo y la Vista. En este ejemplo, escucha el evento de envío del formulario para agregar un producto al carrito. Luego, actualiza el Modelo y la Vista correspondientemente.
class Controlador {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;

    this.vista.agregarProductoForm.addEventListener(
      "submit",
      this.agregarProducto.bind(this)
    );
  }

  agregarProducto(evento) {
    evento.preventDefault();

    const { nombre, precio } = this.vista.obtenerDatosFormulario();
    const producto = new Producto(nombre, precio);
    this.modelo.agregarProducto(producto);
    this.vista.mostrarProducto(producto);
    const total = this.modelo.calcularTotal();
    this.vista.mostrarTotal(total);
    this.vista.limpiarFormulario();
  }
}
