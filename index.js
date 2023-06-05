//PARTE I
let ingreseSuNombre = prompt("Ingrese su nombre");
let ingreseSuApellido = prompt("Ingrese su apellido");
let concatenado = "¡Bienvenido!, " + ingreseSuNombre + " " + ingreseSuApellido;
alert(concatenado);

//PARTE II
let totalDeCompra = 0;
const IVA = 1.21;
const opcion_salir = 5;

const verProductos = () => {
  let opcion;
  opcion = parseInt(
    prompt(
      "Elija una prenda: \n 1-Remera, \n 2-Pantalón, \n 3-Abrigo  \n 4-Calzado \n 5-Salir"
    )
  );
  while (opcion !== opcion_salir) {
    switch (opcion) {
      case 1:
        remeras();
        break;
      case 2:
        pantalones();
        break;
      case 3:
        abrigos();
        break;
      case 4:
        calzados();
        break;
      case 5:
        break;
      default:
        alert("Opcion Invalida");
        break;
    }
    opcion = parseInt(
      prompt(
        "Elija una prenda: \n 1-Remera, \n 2-Pantalón, \n 3-Abrigo  \n 4-Calzado \n 5-Salir"
      )
    );
  }
};
const verCarrito = (total) => {
  const resultado = IVA * total;
  alert("Total del producto: $" + resultado);
  alert("Total + IVA: $ " + resultado);
};

let opcion = parseInt(
  prompt("\n 1-Productos, \n 2-Carrito, \n 3-Contacto  \n 4-FAQ \n 5-Salir")
);
while (opcion != opcion_salir) {
  switch (opcion) {
    case 1:
      verProductos();
      break;
    case 2:
      verCarrito(totalDeCompra);
      break;
    case 3:
      verContacto();
    case 4:
      verFaq();
      break;
    case 5:
      break;
    default:
      alert("Opcion Invalida");
      break;
  }
  opcion = parseInt(
    prompt("\n 1-Productos, \n 2-Carrito, \n 3-Contacto  \n 4-FAQ \n 5-Salir")
  );
}
alert("¡Gracias por visitarnos!");
