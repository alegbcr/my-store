// Faker Dependecy
const { faker } = require('@faker-js/faker');

const productsData = [
  {
    id: faker.datatype.uuid(),
    category: 'entradas',
    name: 'Aros de Cebolla del Chef',
    description: null,
    image: faker.image.food(),
    price: 4950,
  },
  {
    id: faker.datatype.uuid(),
    category: 'entradas',
    name: 'Chicharrón con Yuca',
    description: null,
    image: faker.image.food(),
    price: 4950,
  },
];

const categoriesData = [
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
  },
];

const usersData = [
  {
    id: faker.datatype.uuid(),
    name: 'Thor Molina',
    nickname: faker.datatype.string(10),
    email: 'velit.aliquam@aol.org',
    phone: '(323) 758-5692',
    country: 'Colombia',
    region: 'Sindh',
    postalZip: '2447',
    address: 'Ap #487-4788 Ipsum Rd.',
  },
  {
    id: faker.datatype.uuid(),
    name: 'Hunter Wilcox',
    nickname: faker.datatype.string(10),
    email: 'risus.duis.a@google.org',
    phone: '(947) 716-3914',
    country: 'Netherlands',
    region: 'Languedoc-Roussillon',
    postalZip: '5543',
    address: 'Ap #742-2136 Nunc Avenue',
  },
];

module.exports = { productsData, categoriesData, usersData };
