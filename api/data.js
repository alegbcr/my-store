// Faker Dependecy
// const { faker } = require('@faker-js/faker');

const productsData = [
  {
    id: 'f6d3468b-d78e-4cb0-bcfc-6a7322316f2d',
    nombre: 'Camiseta básica blanca',
    categoria: 'Camisetas',
    descripcion: 'Camiseta básica de manga corta en color blanco.',
    precio: 19.99,
    imagen: {
      url: 'https://ejemplo.com/camiseta_blanca.jpg',
      alt: 'Camiseta básica blanca',
    },
  },
  {
    id: '1f57b02c-5371-4d33-96c3-24569877341e',
    nombre: 'Camiseta estampada de flores',
    categoria: 'Camisetas',
    descripcion:
      'Camiseta de manga corta con estampado de flores en colores vivos.',
    precio: 24.99,
    imagen: {
      url: 'https://ejemplo.com/camiseta_flores.jpg',
      alt: 'Camiseta estampada de flores',
    },
  },
  {
    id: '64f2e2c8-8e3d-46ef-b3a4-13be4f4a4b45',
    nombre: 'Camiseta a rayas',
    categoria: 'Camisetas',
    descripcion:
      'Camiseta de manga larga con rayas horizontales en colores azul y blanco.',
    precio: 29.99,
    imagen: {
      url: 'https://ejemplo.com/camiseta_rayas.jpg',
      alt: 'Camiseta a rayas',
    },
  },
  {
    id: 'c7d8d4ab-3a4c-4de4-8971-0f412ec3c0cd',
    nombre: 'Camiseta de algodón orgánico',
    categoria: 'Camisetas',
    descripcion:
      'Camiseta de manga corta hecha de algodón orgánico, con certificación ecológica.',
    precio: 34.99,
    imagen: {
      url: 'https://ejemplo.com/camiseta_organica.jpg',
      alt: 'Camiseta de algodón orgánico',
    },
  },
  {
    id: 'b85e0b61-b89a-48c3-8ca2-f308d82f9c71',
    nombre: 'Camiseta deportiva',
    categoria: 'Camisetas',
    descripcion:
      'Camiseta de manga corta con tecnología de absorción de humedad para actividades deportivas.',
    precio: 39.99,
    imagen: {
      url: 'https://ejemplo.com/camiseta_deportiva.jpg',
      alt: 'Camiseta deportiva',
    },
  },
  {
    id: '61f13115-0fc1-4f8e-8770-4ad514826d13',
    nombre: 'Pantalones vaqueros ajustados',
    categoria: 'Pantalones',
    descripcion: 'Pantalones vaqueros de corte ajustado en color azul clásico.',
    precio: 49.99,
    imagen: {
      url: 'https://ejemplo.com/pantalones_vaqueros.jpg',
      alt: 'Pantalones vaqueros ajustados',
    },
  },
  {
    id: '68d63e6c-80eb-4f32-8e98-d0f2ff0a1c2b',
    nombre: 'Pantalones de tela',
    categoria: 'Pantalones',
    descripcion:
      'Pantalones de tela suave y ligera en color negro, perfectos para ocasiones casuales.',
    precio: 39.99,
    imagen: {
      url: 'https://ejemplo.com/pantalones_tela.jpg',
      alt: 'Pantalones de tela',
    },
  },
  {
    id: 'b5e9de12-214d-4d0e-979b-3b88d7e98a31',
    nombre: 'Pantalones cargo',
    categoria: 'Pantalones',
    descripcion:
      'Pantalones cargo con múltiples bolsillos y diseño resistente en color caqui.',
    precio: 59.99,
    imagen: {
      url: 'https://ejemplo.com/pantalones_cargo.jpg',
      alt: 'Pantalones cargo',
    },
  },
  {
    id: '789d9a7c-2b84-44bc-a1f6-7a23d27e6660',
    nombre: 'Pantalones de yoga',
    categoria: 'Pantalones',
    descripcion:
      'Pantalones de yoga hechos de tela elástica y transpirable para mayor comodidad durante las prácticas de yoga.',
    precio: 34.99,
    imagen: {
      url: 'https://ejemplo.com/pantalones_yoga.jpg',
      alt: 'Pantalones de yoga',
    },
  },
  {
    id: '43217a02-63a1-4e14-a8e0-aa71d63cc647',
    nombre: 'Pantalones cortos deportivos',
    categoria: 'Pantalones',
    descripcion:
      'Pantalones cortos deportivos con tecnología de absorción de humedad y diseño aerodinámico en color gris.',
    precio: 29.99,
    imagen: {
      url: 'https://ejemplo.com/pantalones_cortos_deportivos.jpg',
      alt: 'Pantalones cortos deportivos',
    },
  },
  {
    id: 'f4d99899-92ca-4b63-87e6-285b49e15871',
    nombre: 'Vestido midi estampado floral',
    categoria: 'Vestidos',
    descripcion:
      'Vestido midi con estampado floral en colores vivos, perfecto para ocasiones primaverales.',
    precio: 59.99,
    imagen: {
      url: 'https://ejemplo.com/vestido_floral.jpg',
      alt: 'Vestido midi estampado floral',
    },
  },
  {
    id: '5c5d5aa2-384e-4780-bd36-37d7f5187053',
    nombre: 'Vestido de cóctel con encaje',
    categoria: 'Vestidos',
    descripcion:
      'Vestido de cóctel con encaje en el escote y la espalda, ideal para eventos formales.',
    precio: 79.99,
    imagen: {
      url: 'https://ejemplo.com/vestido_cocktail.jpg',
      alt: 'Vestido de cóctel con encaje',
    },
  },
  {
    id: 'd2c64526-18b2-40bc-9e9d-f5ff5cb42a5e',
    nombre: 'Vestido de playa de algodón',
    categoria: 'Vestidos',
    descripcion:
      'Vestido de playa ligero y fresco de algodón con estampado playero en colores pastel.',
    precio: 29.99,
    imagen: {
      url: 'https://ejemplo.com/vestido_playa.jpg',
      alt: 'Vestido de playa de algodón',
    },
  },
  {
    id: 'a95b8461-b41e-4650-af99-6aa50ca65629',
    nombre: 'Vestido de noche elegante',
    categoria: 'Vestidos',
    descripcion:
      'Vestido de noche elegante con detalles de pedrería y corte clásico, perfecto para eventos formales.',
    precio: 99.99,
    imagen: {
      url: 'https://ejemplo.com/vestido_noche.jpg',
      alt: 'Vestido de noche elegante',
    },
  },
  {
    id: '1b614cc1-883f-4b28-8d20-efb7c39b9a8a',
    nombre: 'Vestido de verano sin mangas',
    categoria: 'Vestidos',
    descripcion:
      'Vestido de verano sin mangas con estampado tropical y corte holgado para mayor comodidad.',
    precio: 39.99,
    imagen: {
      url: 'https://ejemplo.com/vestido_verano.jpg',
      alt: 'Vestido de verano sin mangas',
    },
  },
  {
    id: '5f5c4349-9e84-4b67-8a7d-74e1f2127a85',
    nombre: 'Chaqueta de cuero negra',
    categoria: 'Chaquetas',
    descripcion:
      'Chaqueta de cuero genuino en color negro con cierre frontal de cremallera y bolsillos laterales.',
    precio: 199.99,
    imagen: {
      url: 'https://ejemplo.com/chaqueta_cuero_negra.jpg',
      alt: 'Chaqueta de cuero negra',
    },
  },
  {
    id: 'ebf19d8c-3b21-44ef-bc40-308f8738d17e',
    nombre: 'Chaqueta bomber de algodón',
    categoria: 'Chaquetas',
    descripcion:
      'Chaqueta bomber de algodón en color verde militar con cierre frontal de botones y puños elásticos.',
    precio: 79.99,
    imagen: {
      url: 'https://ejemplo.com/chaqueta_bomber.jpg',
      alt: 'Chaqueta bomber de algodón',
    },
  },
  {
    id: '98a2e2f7-3d3d-4d5e-a9b3-84b3cc29c8cc',
    nombre: 'Chaqueta acolchada con capucha',
    categoria: 'Chaquetas',
    descripcion:
      'Chaqueta acolchada con capucha desmontable en color azul marino, ideal para el invierno.',
    precio: 129.99,
    imagen: {
      url: 'https://ejemplo.com/chaqueta_acolchada.jpg',
      alt: 'Chaqueta acolchada con capucha',
    },
  },
  {
    id: 'c71a09ed-bca8-4d16-a9a3-1c381a0a73de',
    nombre: 'Chaqueta de mezclilla clásica',
    categoria: 'Chaquetas',
    descripcion:
      'Chaqueta de mezclilla clásica en color azul con bolsillos frontales y botones metálicos.',
    precio: 89.99,
    imagen: {
      url: 'https://ejemplo.com/chaqueta_mezclilla.jpg',
      alt: 'Chaqueta de mezclilla clásica',
    },
  },
  {
    id: 'ef6f6467-27d8-426d-914b-056bb97c1e79',
    nombre: 'Chaqueta de invierno con forro de piel',
    categoria: 'Chaquetas',
    descripcion:
      'Chaqueta de invierno con forro de piel sintética en color negro, perfecta para los días fríos.',
    precio: 149.99,
    imagen: {
      url: 'https://ejemplo.com/chaqueta_invierno.jpg',
      alt: 'Chaqueta de invierno con forro de piel',
    },
  },
  {
    id: '5f5c4349-9e84-4b67-8a7d-74e1f2127a85',
    nombre: 'Bikini de dos piezas',
    categoria: 'Ropa de baño',
    descripcion:
      'Bikini de dos piezas en color rosa con top de tirantes ajustables y braguita con lazos laterales.',
    precio: 39.99,
    imagen: {
      url: 'https://ejemplo.com/bikini_dos_piezas.jpg',
      alt: 'Bikini de dos piezas',
    },
  },
  {
    id: 'ebf19d8c-3b21-44ef-bc40-308f8738d17e',
    nombre: 'Traje de baño de una pieza',
    categoria: 'Ropa de baño',
    descripcion:
      'Traje de baño de una pieza en color negro con diseño elegante y espalda descubierta.',
    precio: 49.99,
    imagen: {
      url: 'https://ejemplo.com/traje_bano_una_pieza.jpg',
      alt: 'Traje de baño de una pieza',
    },
  },
  {
    id: '98a2e2f7-3d3d-4d5e-a9b3-84b3cc29c8cc',
    nombre: 'Shorts de playa',
    categoria: 'Ropa de baño',
    descripcion:
      'Shorts de playa en color azul con cintura elástica y bolsillos laterales, perfectos para la playa o la piscina.',
    precio: 29.99,
    imagen: {
      url: 'https://ejemplo.com/shorts_playa.jpg',
      alt: 'Shorts de playa',
    },
  },
  {
    id: 'c71a09ed-bca8-4d16-a9a3-1c381a0a73de',
    nombre: 'Pareo estampado',
    categoria: 'Ropa de baño',
    descripcion:
      'Pareo estampado en colores tropicales, ideal para combinar con tus trajes de baño.',
    precio: 19.99,
    imagen: {
      url: 'https://ejemplo.com/pareo_estampado.jpg',
      alt: 'Pareo estampado',
    },
  },
  {
    id: 'ef6f6467-27d8-426d-914b-056bb97c1e79',
    nombre: 'Sandalias de playa',
    categoria: 'Ropa de baño',
    descripcion:
      'Sandalias de playa en color blanco con suela antideslizante y tiras ajustables.',
    precio: 24.99,
    imagen: {
      url: 'https://ejemplo.com/sandalias_playa.jpg',
      alt: 'Sandalias de playa',
    },
  },
  {
    id: '6dfb5370-f33d-4a5c-98b6-0e4bc3051679',
    nombre: 'Sujetador de encaje',
    categoria: 'Ropa íntima',
    descripcion:
      'Sujetador de encaje en color negro con copas acolchadas y tirantes ajustables.',
    precio: 24.99,
    imagen: {
      url: 'https://ejemplo.com/sujetador_encaje.jpg',
      alt: 'Sujetador de encaje',
    },
  },
  {
    id: '7a07a554-22a8-415b-9f2d-cd1c3c200b3f',
    nombre: 'Calzoncillos de algodón',
    categoria: 'Ropa íntima',
    descripcion:
      'Calzoncillos de algodón en pack de 3 unidades, de colores surtidos y con cintura elástica.',
    precio: 19.99,
    imagen: {
      url: 'https://ejemplo.com/calzoncillos_algodon.jpg',
      alt: 'Calzoncillos de algodón',
    },
  },
  {
    id: '0d94e8c0-1e2d-45f0-8302-8ff2ddbe289e',
    nombre: 'Tanga de encaje',
    categoria: 'Ropa íntima',
    descripcion: 'Tanga de encaje en color rojo con diseño sexy y confortable.',
    precio: 12.99,
    imagen: {
      url: 'https://ejemplo.com/tanga_encaje.jpg',
      alt: 'Tanga de encaje',
    },
  },
  {
    id: 'f8c72f1d-4321-4da2-9b4a-4a3a3d02480d',
    nombre: 'Camisón de seda',
    categoria: 'Ropa íntima',
    descripcion:
      'Camisón de seda en color blanco con encaje y tirantes ajustables, perfecto para una noche romántica.',
    precio: 79.99,
    imagen: {
      url: 'https://ejemplo.com/camison_seda.jpg',
      alt: 'Camisón de seda',
    },
  },
  {
    id: '5eb5c5f7-f1e0-45d7-ae2c-2e3a8d3c3d85',
    nombre: 'Bóxer de microfibra',
    categoria: 'Ropa íntima',
    descripcion:
      'Bóxer de microfibra en color azul marino con cintura elástica y diseño ergonómico.',
    precio: 14.99,
    imagen: {
      url: 'https://ejemplo.com/boxer_microfibra.jpg',
      alt: 'Bóxer de microfibra',
    },
  },
  {
    id: '2d0a56a8-0a34-4d2a-9f46-d1c8d6caee98',
    nombre: 'Camiseta de manga corta',
    categoria: 'Ropa de niños',
    descripcion:
      'Camiseta de manga corta en color azul con estampado de superhéroe y cuello redondo.',
    precio: 12.99,
    imagen: {
      url: 'https://ejemplo.com/camiseta_manga_corta.jpg',
      alt: 'Camiseta de manga corta',
    },
  },
  {
    id: '0fc4e8ad-4db1-4d27-8e5f-38c53a78690b',
    nombre: 'Pantalones cortos',
    categoria: 'Ropa de niños',
    descripcion:
      'Pantalones cortos en color verde con diseño de camuflaje y cintura ajustable.',
    precio: 19.99,
    imagen: {
      url: 'https://ejemplo.com/pantalones_cortos.jpg',
      alt: 'Pantalones cortos',
    },
  },
  {
    id: '6eb3e1db-3b0a-4d93-93c8-6e1b1c07b6f1',
    nombre: 'Vestido de princesa',
    categoria: 'Ropa de niños',
    descripcion:
      'Vestido de princesa en color rosa con detalles de encaje y lazo en la parte trasera.',
    precio: 29.99,
    imagen: {
      url: 'https://ejemplo.com/vestido_princesa.jpg',
      alt: 'Vestido de princesa',
    },
  },
  {
    id: 'a4479d1b-32c7-4d6e-9926-29e6c018fb6e',
    nombre: 'Jersey de punto',
    categoria: 'Ropa de niños',
    descripcion:
      'Jersey de punto en color gris con diseño de oso polar y cuello redondo.',
    precio: 24.99,
    imagen: {
      url: 'https://ejemplo.com/jersey_punto.jpg',
      alt: 'Jersey de punto',
    },
  },
  {
    id: 'dc162d22-ec0c-4da1-bb1e-b74f86ff4302',
    nombre: 'Calcetines',
    categoria: 'Ropa de niños',
    descripcion:
      'Calcetines en pack de 5 unidades, de colores variados y con diseños divertidos.',
    precio: 9.99,
    imagen: {
      url: 'https://ejemplo.com/calcetines.jpg',
      alt: 'Calcetines',
    },
  },
  {
    id: '6c536b37-ee6e-4f76-9346-3f499bafeaa6',
    nombre: 'Conjunto de body y pantalón',
    categoria: 'Ropa de bebés',
    descripcion:
      'Conjunto de body de manga larga y pantalón en color blanco con estampado de animales y cierre con botones a presión.',
    precio: 18.99,
    imagen: {
      url: 'https://ejemplo.com/conjunto_body_pantalon.jpg',
      alt: 'Conjunto de body y pantalón',
    },
  },
  {
    id: '28b77499-8e23-4e87-b3d3-4adcb14b38e4',
    nombre: 'Vestido de algodón',
    categoria: 'Ropa de bebés',
    descripcion:
      'Vestido de algodón en color rosa con volantes en las mangas y estampado de flores.',
    precio: 15.99,
    imagen: {
      url: 'https://ejemplo.com/vestido_algodon.jpg',
      alt: 'Vestido de algodón',
    },
  },
  {
    id: 'b9e9d81d-1e6c-42d8-a0d3-3e6763f6b086',
    nombre: 'Ranita de punto',
    categoria: 'Ropa de bebés',
    descripcion:
      'Ranita de punto en color azul con botones en la parte delantera y detalle de oso en el pecho.',
    precio: 12.99,
    imagen: {
      url: 'https://ejemplo.com/ranita_punto.jpg',
      alt: 'Ranita de punto',
    },
  },
  {
    id: 'a8b14ad9-66f4-4f2c-9b8a-cb464303c154',
    nombre: 'Gorro de lana',
    categoria: 'Ropa de bebés',
    descripcion:
      'Gorro de lana en color gris con pompón en la parte superior y forro interior de algodón.',
    precio: 8.99,
    imagen: {
      url: 'https://ejemplo.com/gorro_lana.jpg',
      alt: 'Gorro de lana',
    },
  },
  {
    id: 'fc94f52a-9d1e-413b-97f8-c067784b408f',
    nombre: 'Calcetines antideslizantes',
    categoria: 'Ropa de bebés',
    descripcion:
      'Calcetines antideslizantes en pack de 3 unidades, con diseños de animales y suela de goma para mayor seguridad.',
    precio: 6.99,
    imagen: {
      url: 'https://ejemplo.com/calcetines_antideslizantes.jpg',
      alt: 'Calcetines antideslizantes',
    },
  },
];

const categoriesData = [
  {
    id: 'b91d98ec-daae-47e8-a1d1-fd6df9c21a01',
    nombre: 'Camisetas',
  },
  {
    id: '70e6e76d-3e9e-4d8c-b546-28e26da408dc',
    nombre: 'Pantalones',
  },
  {
    id: '456b57d2-2c1f-4cda-88a4-6a4f6e8259ef',
    nombre: 'Vestidos',
  },
  {
    id: '930f1c74-3155-44f2-a9f2-1cbf8e7e69d2',
    nombre: 'Chaquetas',
  },
  {
    id: 'c938090e-8d31-43e3-80ed-7a3b3a8c62d1',
    nombre: 'Ropa deportiva',
  },
  {
    id: 'a42560b0-aa68-47d1-8a1e-883f16255b7c',
    nombre: 'Ropa de baño',
  },
  {
    id: '9c3ef3b3-2c57-4dab-a1de-6a4840536a4a',
    nombre: 'Ropa íntima',
  },
  {
    id: '5f5ef381-30c7-452d-9828-7f30eae4c53f',
    nombre: 'Ropa de niños',
  },
  {
    id: 'e5f3a54e-4d4d-4dc6-8c16-62be9d9e1695',
    nombre: 'Ropa de bebés',
  },
  {
    id: 'f6b1ca9b-4086-4c02-8c6f-c30fbf1d33d1',
    nombre: 'Accesorios',
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

module.exports = { productsData, categoriesData, usersData };
