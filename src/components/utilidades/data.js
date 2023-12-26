const productos = [
  {
    id: "001",
    nombre: "Animaloquitos",
    descripcion: "Rompezabeza de animales",
    stock: 10,
    precio: 25000,
    imagen: "/img/animaloquitos.png",
    categoria: "rompecabezas"
  },
  {
    id: "002",
    nombre: "Caritas",
    descripcion: "Juguetes para jugar",
    stock: 2,
    precio: 12000,
    imagen: "/img/caritas.png",
    categoria: "juegomesa"
  },
  {
    id: "003",
    nombre: "Cuerpitos",
    descripcion: "Juguetes para jugar",
    stock: 6,
    precio: 17000,
    imagen: "/img/cuerpitos.png",
    categoria: "cajas"
  },
  {
    id: "004",
    nombre: "Disfraces",
    descripcion: "Juguetes para jugar",
    stock: 9,
    precio: 120000,
    imagen: "/img/disfraces.png",
    categoria: "juegomesa"
  },
  {
    id: "005",
    nombre: "Letras",
    descripcion: "Juguetes para jugar",
    stock: 9,
    precio: 162000,
    imagen: "/img/letras.png",
    categoria: "cajas"
  },
  {
    id: "006",
    nombre: "Mezcladitos",
    descripcion: "Juguetes para jugar",
    stock: 15,
    precio: 19900,
    imagen: "/img/mezcladitos.png",
    categoria: "rompecabezas"
  },
  ];

const obtenerProductos = new Promise((resolve, reject) => {
  //Simulamos un retraso de red
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export default obtenerProductos