// Faker Dependecy
// const { faker } = require('@faker-js/faker');

const productsData = [
  {
    id: 1,
    name: 'Margarita',
    ingredients: 'Queso, tomate',
    descripcion: 'La clásica pizza Margarita',
    image: 'https://i.postimg.cc/0N7C37v6/Margarita.png',
    price: 10.0,
  },
  {
    id: 2,
    name: 'Pepperoni',
    ingredients: 'Queso, pepperoni',
    descripcion: 'Deliciosa pizza de pepperoni',
    image: 'https://i.postimg.cc/GhNJmXh8/Pepperoni.png',
    price: 12.0,
  },
  {
    id: 3,
    name: 'Hawaiana',
    ingredients: 'Queso, jamón, piña',
    descripcion: 'Combinación tropical',
    image: 'https://i.postimg.cc/g2CDNNCF/Hawaiana.png',
    price: 11.0,
  },
  {
    id: 4,
    name: 'Vegetariana',
    ingredients: 'Queso, vegetales',
    descripcion: 'Pizza saludable',
    image: 'https://i.postimg.cc/qMgxrP0H/Vegetariana.png',
    price: 9.0,
  },
  {
    id: 5,
    name: '4 Quesos',
    ingredients:
      'Queso gorgonzola, queso azul, queso mozzarella, queso parmesano',
    descripcion: 'Delicia para los amantes del queso',
    imprice: 'https://i.postimg.cc/jdkvJsvj/4-Quesos.png',
    precio: 14.0,
  },
  {
    id: 6,
    name: 'Carnes Mixtas',
    ingredients: 'Queso, pepperoni, salchicha italiana, jamón, carne de res',
    descripcion: 'Una pizza cargada con una variedad de carnes',
    image: 'https://i.postimg.cc/DyzBZWrD/carnes-mixtas.png',
    price: 14.0,
  },
  {
    id: 7,
    name: 'Marinara',
    ingredients: 'Salsa de tomate, ajo, orégano',
    descripcion: 'Pizza simple y clásica sin queso',
    image: 'https://i.postimg.cc/wjy2XSbQ/Marinara.png',
    price: 8.0,
  },
  {
    id: 8,
    name: 'Carnívora',
    ingredients: 'Queso, pepperoni, salchicha, tocino',
    descripcion: 'Una explosión de sabores de carne',
    image: 'https://i.postimg.cc/C1NsMYzS/Carni-vora.png',
    price: 15.0,
  },
  {
    id: 9,
    name: 'Caprese',
    ingredients: 'Queso mozzarella, tomate, albahaca fresca',
    descripcion: 'Una pizza ligera y fresca con sabores mediterráneos',
    image: 'https://i.postimg.cc/mDRSGhZm/Caprese.png',
    price: 11.0,
  },
  {
    id: 10,
    name: 'Mexicana',
    ingredients: 'Queso, carne molida, jalapeños, guacamole',
    descripcion: 'Una pizza picante con toques mexicanos',
    image: 'https://i.postimg.cc/R01cG91K/Mexicana.png',
    price: 12.0,
  },
  {
    id: 11,
    name: 'Napolitana',
    ingredients: 'Queso mozzarella, anchoas, aceitunas',
    descripcion: 'Inspirada en la tradición napolitana',
    image: 'https://i.postimg.cc/QNfJRX2q/Napolitana.png',
    price: 10.0,
  },
  {
    id: 12,
    name: 'Mediterranean',
    ingredients: 'Queso feta, aceitunas, tomates secos, espinacas',
    descripcion: 'Una pizza inspirada en los sabores del Mediterráneo',
    image: 'https://i.postimg.cc/qqDcnLsF/Mediterranean.png',
    price: 12.0,
  },
  {
    id: 13,
    name: 'Primavera',
    ingredients: 'Queso, espárragos, champiñones, cebolla roja',
    descripcion: 'Una pizza llena de ingredientes frescos y coloridos',
    image: 'https://i.postimg.cc/DwXQJ18C/Primavera.png',
    price: 11.0,
  },
];

const categoriesData = [
  {
    id: 1,
    name: 'pizzas',
  },
  {
    id: 2,
    name: 'pollo',
  },
  {
    id: 3,
    name: 'adicionales',
  },
  {
    id: 4,
    name: 'bebidas',
  },
  {
    id: 5,
    name: 'postres',
  },
];

const usersData = [
  {
    id: '12a0d8f3-7c84-4d0b-98e6-4c27e55a2d2e',
    nombre: 'Juan Pérez',
    apodo: 'juanito123',
    email: 'juan.perez@example.com',
    phone: '+1 555-1234',
    country: 'Estados Unidos',
    region: 'California',
    postal_zip: '12345',
    address: '1234 Elm Street, Apt 567',
  },
  {
    id: '245e17ec-99e7-4265-9142-1d9d2c442169',
    nombre: 'María García',
    apodo: 'maryg',
    email: 'maria.garcia@example.com',
    phone: '+44 1234 567890',
    country: 'Reino Unido',
    region: 'Londres',
    postal_zip: 'SW1A 1AA',
    address: '10 Downing Street',
  },
  {
    id: '36c1c4a2-8847-4cd2-bfb2-6da49a8bc0e6',
    nombre: 'Carlos Rodríguez',
    apodo: 'charlie',
    email: 'carlos.rodriguez@example.com',
    phone: '+52 55 1234 5678',
    country: 'México',
    region: 'Ciudad de México',
    postal_zip: '11560',
    address: 'Av. Reforma 1234, Col. Juárez',
  },
  {
    id: '4b89c5a5-5e5d-4765-8a5e-0f583d9f7bb2',
    nombre: 'Laura Fernández',
    apodo: 'laurita89',
    email: 'laura.fernandez@example.com',
    phone: '+61 2 1234 5678',
    country: 'Australia',
    region: 'Sídney',
    postal_zip: '2000',
    address: '1234 George Street, Apt 567',
  },
  {
    id: '58a1fc88-01fc-4dd7-8091-c76c80db67d0',
    nombre: 'Andrés Ramírez',
    apodo: 'andy81',
    email: 'andres.ramirez@example.com',
    phone: '+34 91 123 4567',
    country: 'España',
    region: 'Madrid',
    postal_zip: '28001',
    address: 'Calle Gran Vía, 123, 4A',
  },
];

module.exports = {
  productsData,
  categoriesData,
  usersData,
  pizzasData,
};
