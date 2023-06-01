// En el script principal, se crean las instancias del Modelo, la Vista y el Controlador, estableciendo la conexión entre ellos.

const modelo = new Carrito();
const vista = new Vista();
const controlador = new Controlador(modelo, vista);

// Este ejemplo ilustra cómo el patrón MVC permite separar las responsabilidades y facilita el desarrollo y mantenimiento del carrito de compra en una tienda online.
