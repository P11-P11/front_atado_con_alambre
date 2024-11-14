import { Restaurante, RestauranteInput, OrderStatus } from "./models";
/*
export const exampleRestaurantesInput: RestauranteInput[] = [
    {
      name: "Parrilla El Porteño",
      number: "1029384",
      location: {
        latitude: -34.6037,
        longitude: -58.3816
      },
      logoUrl: "https://www.google.com/imgres?q=logo%20restaurante&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2F%2Fes%2Fvector%2Frestaurante-de-com-tenedor-cuchillo-fondo-vector-imagen.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D3mPGCDXyBeuGpxeuTlHkECM5rAW5cy07bDFi0i0ZCbw%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fes%2Filustraciones%2Flogo-restaurante&doc&tbn&vet=12ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECBkQAA..i&w=612&h=612&hcb=2&ved=2ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECBkQAA",
      images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
      menu: [
        { item: "Bife de chorizo", price: 15 },
        { item: "Ensalada mixta", price: 7 },
        { item: "Empanadas", price: 4 }
      ],
      numberOfTables: 3
    },
    {
      name: "La Cocina del Sur",
      number: "2398472",
      location: {
        latitude: -34.6050,
        longitude: -58.3835
      },
      logoUrl: "https://www.google.com/imgres?q=logo%20restaurante&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F694%2F227%2Fpng-transparent-monumental-restaurant-elche-logo-kitchen-kitchen-miscellaneous-kitchen-trademark-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Fsearch%3Fq%3Dlogo%2Bdel%2Brestaurante&doc&tbn&vet=12ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oFCIUBEAA..i&w=360&h=360&hcb=2&ved=2ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oFCIUBEAA",
      images: ["imagen1.jpg", "imagen2.jpg"],
      menu: [
        { item: "Milanesa", price: 12 },
        { item: "Sopa de verduras", price: 6 },
        { item: "Churrasco", price: 14 }
      ],
      numberOfTables: 3
    },
    {
      name: "Bistro Buenos Aires",
      number: "3459821",
      location: {
        latitude: -34.6083,
        longitude: -58.3700
      },
      logoUrl: "https://www.google.com/imgres?q=logo%20restaurante&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20200727%2Foriginal%2Fpngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg&imgrefurl=https%3A%2F%2Fes.pngtree.com%2Ffreepng%2Frestaurant-logo-design-vector-template_5441058.html&doc&tbnid=Zv65Qp3eGmFZAM&vet=12ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECB0QAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECB0QAA",
      images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
      menu: [
        { item: "Quiche Lorraine", price: 8 },
        { item: "Pasta al pesto", price: 11 },
        { item: "Tarta de espinaca", price: 7 }
      ],
      numberOfTables: 3
    },
    {
      name: "Café Plaza Mayor",
      number: "4927810",
      location: {
        latitude: -34.6012,
        longitude: -58.3860
      },
      logoUrl: "https://www.google.com/imgres?q=logo%20restaurante&imgurl=https%3A%2F%2Fd1csarkz8obe9u.cloudfront.net%2Fposterpreviews%2Frestaurant-logo-video-template-design-74cc83f68ab27add2bc11b49868db6ae_screen.jpg%3Fts%3D1600991041&imgrefurl=https%3A%2F%2Fes.postermywall.com%2Findex.php%2Fart%2Ftemplate%2F74cc83f68ab27add2bc11b49868db6ae%2Frestaurant-logo-video-template-design&docid=Or5lD2dYtMKNKM&tbnid=5RZ6iKrVeQxNRM&vet=12ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oFCIEBEAA..i&w=690&h=690&hcb=2&ved=2ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oFCIEBEAA",
      images: ["imagen1.jpg", "imagen2.jpg"],
      menu: [
        { item: "Café con leche", price: 3 },
        { item: "Medialuna", price: 2 },
        { item: "Tostado mixto", price: 5 }
      ],
      numberOfTables: 3
    },
    {
      name: "El Asador Criollo",
      number: "5912039",
      location: {
        latitude: -34.6104,
        longitude: -58.3755
      },
      logoUrl: "https://www.google.com/imgres?q=logo%20restaurante&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20220604%2Foriginal%2Fpngtree-restaurant-logo-png-image_7932128.png&imgrefurl=https%3A%2F%2Fes.pngtree.com%2Ffreepng%2Frestaurant-logo_7932128.html&docid=4ges_xQn5-u8NM&tbnid=y2coIKo-mH_QBM&vet=12ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECBYQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECBYQAA",
      images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
      menu: [
        { item: "Asado", price: 16 },
        { item: "Provoleta", price: 6 },
        { item: "Morcilla", price: 4 }
      ],
      numberOfTables: 3
    },
    {
      name: "Rincón Porteño",
      number: "6782398",
      location: {
        latitude: -34.6055,
        longitude: -58.3721
      },
      logoUrl: "https://www.google.com/imgres?q=logo%20restaurante&imgurl=https%3A%2F%2Fvectorportal.com%2Fstorage%2Fchef-restaurant-logotype-cl.jpg&imgrefurl=https%3A%2F%2Fvectorportal.com%2Fes%2Fvector%2Fdise%25C3%25B1o-de-logotipo-de-restaurante.ai%2F21773&docid=gLGdqRgRMvo28M&tbnid=BZ4gQuJiZHuixM&vet=12ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECFYQAA..i&w=660&h=660&hcb=2&ved=2ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECFYQAA",
      images: ["imagen1.jpg", "imagen2.jpg"],
      menu: [
        { item: "Pasta Alfredo", price: 10 },
        { item: "Bife de costilla", price: 14 },
        { item: "Flan casero", price: 5 }
      ],
      numberOfTables: 3
    },
    {
      name: "Sabores de La Boca",
      number: "7823491",
      location: {
        latitude: -34.6142,
        longitude: -58.3623
      },
      logoUrl: "https://www.google.com/imgres?q=logo%20restaurante&imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F984%2F246%2Fpng-clipart-logo-brand-product-design-font-menu-del-restaurante-label-logo.png&imgrefurl=https%3A%2F%2Fwww.pngegg.com%2Fes%2Fpng-ewwcb&docid=2rA1PUIganLG3M&tbnid=LVMyzpUoFgidvM&vet=12ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECGkQAA..i&w=900&h=578&hcb=2&ved=2ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECGkQAA",
      images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
      menu: [
        { item: "Tarta de jamón y queso", price: 8 },
        { item: "Matambre a la pizza", price: 12 },
        { item: "Ensalada Caesar", price: 6 }
      ],
      numberOfTables: 22
    },
    {
      name: "Tango & Tapas",
      number: "8591032",
      location: {
        latitude: -34.6091,
        longitude: -58.3776
      },
      logoUrl: "https://www.google.com/imgres?q=logo%20restaurante&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1138202866%2Fes%2Fvector%2Fbanner-para-la-hora-del-desayuno-con-tenedor-y-cuchillo.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DsVrp99urGOGg9pilTwW9OV4puC3AbjXa50HCWu46GAY%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fes%2Filustraciones%2Flogo-restaurante&docid=cnV1q_O_5f4QnM&tbnid=hFcQv3nA07E_mM&vet=12ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECFQQAA..i&w=584&h=612&hcb=2&ved=2ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECFQQAA",
      images: ["imagen1.jpg", "imagen2.jpg"],
      menu: [
        { item: "Tapas variadas", price: 10 },
        { item: "Paella", price: 14 },
        { item: "Crema catalana", price: 7 }
      ],
      numberOfTables: 19
    },
    {
      name: "Parrilla Las Cañitas",
      number: "9273852",
      location: {
        latitude: -34.5837,
        longitude: -58.4232
      },
      logoUrl: "https://www.google.com/imgres?q=logo%20restaurante&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20190619%2Foriginal%2Fpngtree-restaurant-vector-icon-png-image_4012824.jpg&imgrefurl=https%3A%2F%2Fes.pngtree.com%2Fso%2Flogotipo-de-restaurante&docid=yerlhSWEaK5gRM&tbnid=Ko1jA-LD_9pVlM&vet=12ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECHgQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwjd8rfDndOJAxUWLrkGHf_aIvcQM3oECHgQAA",
      images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
      menu: [
        { item: "Entraña", price: 13 },
        { item: "Ensalada rusa", price: 5 },
        { item: "Chimichurri", price: 2 }
      ],
      numberOfTables: 16
    },
    {
      name: "La Esquina del Gusto",
      number: "1092384",
      location: {
        latitude: -34.6121,
        longitude: -58.3832
      },
      logoUrl: "asdasd",
      images: ["imagen1.jpg", "imagen2.jpg"],
      menu: [
        { item: "Empanadas", price: 4 },
        { item: "Fugazzeta", price: 9 },
        { item: "Milanesa a la napolitana", price: 12 }
      ],
      numberOfTables: 23
    },
    {
      name: "Los Sabores de San Telmo",
      number: "1172634",
      location: {
        latitude: -34.6215,
        longitude: -58.3708
      },
      logoUrl: "asdasd",
      images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
      menu: [
        { item: "Bondiola a la cerveza", price: 15 },
        { item: "Choripán", price: 7 },
        { item: "Helado", price: 5 }
      ],
      numberOfTables: 21
    },
    {
      name: "Empanadas El Caminito",
      number: "1258934",
      location: {
        latitude: -34.6137,
        longitude: -58.3824
      },
      logoUrl: "asdasd",
      images: ["imagen1.jpg", "imagen2.jpg"],
      menu: [
        { item: "Empanada de carne", price: 4 },
        { item: "Empanada de jamón y queso", price: 4 },
        { item: "Empanada de pollo", price: 4 }
      ],
      numberOfTables: 15
    },
    {
      name: "Pizzería La Reina",
      number: "1329478",
      location: {
        latitude: -34.6061,
        longitude: -58.3799
      },
      logoUrl: "asdasd",
      images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
      menu: [
        { item: "Pizza Margherita", price: 8 },
        { item: "Pizza Napolitana", price: 9 },
        { item: "Calzone", price: 10 }
      ],
      numberOfTables: 28
    },
    {
      name: "Asador Palermo",
      number: "1428394",
      location: {
        latitude: -34.5872,
        longitude: -58.4298
      },
      logoUrl: "asdasd",
      images: ["imagen1.jpg", "imagen2.jpg"],
      menu: [
        { item: "Costillas de cerdo", price: 15 },
        { item: "Chimichurri", price: 3 },
        { item: "Vino tinto", price: 8 }
      ],
      numberOfTables: 18
    },
    {
      name: "Parrilla Viejo Almacén",
      number: "1578390",
      location: {
        latitude: -34.6129,
        longitude: -58.3920
      },
      logoUrl: "asdasd",
      images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
      menu: [
        { item: "Provoleta", price: 5 },
        { item: "Chorizo", price: 6 },
        { item: "Bondiola", price: 13 }
      ],
      numberOfTables: 27
    }
  ];
*/
export const exampleRestaurantes: Restaurante[] = [
  {
    id: 1,
    name: "Parrilla El Porteño",
    number: "1029384",
    location: {
      latitude: -34.6037,
      longitude: -58.3816
    },
    logoUrl: "https://plus.unsplash.com/premium_photo-1675344317761-3ace7cf2362a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Bife de chorizo", price: 15 },
      { item: "Ensalada mixta", price: 7 },
      { item: "Empanadas", price: 4 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 2,
    name: "La Cocina del Sur",
    number: "2398472",
    location: {
      latitude: -34.6050,
      longitude: -58.3835
    },
    logoUrl: "https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg",
    images: ["imagen1.jpg", "imagen2.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Milanesa", price: 12 },
      { item: "Sopa de verduras", price: 6 },
      { item: "Churrasco", price: 14 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 3,
    name: "Bistro Buenos Aires",
    number: "3459821",
    location: {
      latitude: -34.6083,
      longitude: -58.3700
    },
    logoUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-b281aeadaa832c28badd72c1f6c5caad_screen.jpg?ts=1595421543",
    images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Quiche Lorraine", price: 8 },
      { item: "Pasta al pesto", price: 11 },
      { item: "Tarta de espinaca", price: 7 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 4,
    name: "Café Plaza Mayor",
    number: "4927810",
    location: {
      latitude: -34.6012,
      longitude: -58.3860
    },
    logoUrl: "https://www.designevo.com/res/templates/thumb_small/restaurant-menu-logo.webp",
    images: ["imagen1.jpg", "imagen2.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Café con leche", price: 3 },
      { item: "Medialuna", price: 2 },
      { item: "Tostado mixto", price: 5 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 5,
    name: "El Asador Criollo",
    number: "5912039",
    location: {
      latitude: -34.6104,
      longitude: -58.3755
    },
    logoUrl: "https://png.pngtree.com/png-clipart/20220604/original/pngtree-restaurant-logo-png-image_7932128.png",
    images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Asado", price: 16 },
      { item: "Provoleta", price: 6 },
      { item: "Morcilla", price: 4 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 6,
    name: "Rincón Porteño",
    number: "6782398",
    location: {
      latitude: -34.6055,
      longitude: -58.3721
    },
    logoUrl: "https://marketplace.canva.com/EAGPKEs-qiE/1/0/1600w/canva-logo-restaurante-almuerzos-caseros-tradicional-caf%C3%A9-naranja-LvIw-P1DHRw.jpg",
    images: ["imagen1.jpg", "imagen2.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Pasta Alfredo", price: 10 },
      { item: "Bife de costilla", price: 14 },
      { item: "Flan casero", price: 5 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 7,
    name: "Sabores de La Boca",
    number: "7823491",
    location: {
      latitude: -34.6142,
      longitude: -58.3623
    },
    logoUrl: "https://media.istockphoto.com/id/1138202866/es/vector/banner-para-la-hora-del-desayuno-con-tenedor-y-cuchillo.jpg?s=612x612&w=0&k=20&c=sVrp99urGOGg9pilTwW9OV4puC3AbjXa50HCWu46GAY=",
    images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Tarta de jamón y queso", price: 8 }],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 8,
    name: "Tango & Tapas",
    number: "8591032",
    location: {
      latitude: -34.6091,
      longitude: -58.3776
    },
    logoUrl: "https://st4.depositphotos.com/2160693/40759/v/450/depositphotos_407590112-stock-illustration-food-and-drink-logo-plate.jpg",
    images: ["imagen1.jpg", "imagen2.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Tapas variadas", price: 10 },
      { item: "Paella", price: 14 },
      { item: "Crema catalana", price: 7 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 9,
    name: "Parrilla Las Cañitas",
    number: "9273852",
    location: {
      latitude: -34.5837,
      longitude: -58.4232
    },
    logoUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-8703dac2fe7a46fbbc1cd27ea9be1dd7_screen.jpg?ts=1652725319",
    images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Entraña", price: 13 },
      { item: "Ensalada rusa", price: 5 },
      { item: "Chimichurri", price: 2 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 10,
    name: "La Esquina del Gusto",
    number: "1092384",
    location: {
      latitude: -34.6121,
      longitude: -58.3832
    },
    logoUrl: "asdasd",
    images: ["imagen1.jpg", "imagen2.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Empanadas", price: 4 },
      { item: "Fugazzeta", price: 9 },
      { item: "Milanesa a la napolitana", price: 12 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 11,
    name: "Los Sabores de San Telmo",
    number: "1172634",
    location: {
      latitude: -34.6215,
      longitude: -58.3708
    },
    logoUrl: "asdasd",
    images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Bondiola a la cerveza", price: 15 },
      { item: "Choripán", price: 7 },
      { item: "Helado", price: 5 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 12,
    name: "Empanadas El Caminito",
    number: "1258934",
    location: {
      latitude: -34.6137,
      longitude: -58.3824
    },
    logoUrl: "asdasd",
    images: ["imagen1.jpg", "imagen2.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Empanada de carne", price: 4 },
      { item: "Empanada de jamón y queso", price: 4 },
      { item: "Empanada de pollo", price: 4 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 13,
    name: "Pizzería La Reina",
    number: "1329478",
    location: {
      latitude: -34.6061,
      longitude: -58.3799
    },
    logoUrl: "asdasd",
    images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Pizza Margherita", price: 8 },
      { item: "Pizza Napolitana", price: 9 },
      { item: "Calzone", price: 10 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 14,
    name: "Asador Palermo",
    number: "1428394",
    location: {
      latitude: -34.5872,
      longitude: -58.4298
    },
    logoUrl: "asdasd",
    images: ["imagen1.jpg", "imagen2.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Costillas de cerdo", price: 15 },
      { item: "Chimichurri", price: 3 },
      { item: "Vino tinto", price: 8 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  },
  {
    id: 15,
    name: "Parrilla Viejo Almacén",
    number: "1578390",
    location: {
      latitude: -34.6129,
      longitude: -58.3920
    },
    logoUrl: "asdasd",
    images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
    openingTime: "8am",
    closingTime: "12pm",
    menu: [
      { item: "Provoleta", price: 5 },
      { item: "Chorizo", price: 6 },
      { item: "Bondiola", price: 13 }
    ],
    orders: [{
      id: 1,
      items: [{
        menuItem: {
        item: "pisa",
        price: 123
        }, 
        quantity: 2,
      }],
      status: OrderStatus.READY_FOR_PICKUP,
      tableNumber: 3
    }],
    tableOrders: new Map([[1, 3]])
  }
];