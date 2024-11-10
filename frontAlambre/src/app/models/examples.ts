import { RestauranteInput } from "./models";

export const exampleRestaurantes: RestauranteInput[] = [
    {
      name: "Parrilla El Porteño",
      number: "1029384",
      location: {
        latitude: -34.6037,
        longitude: -58.3816
      },
      logoUrl: "asdasd",
      images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
      menu: [
        { item: "Bife de chorizo", price: 15 },
        { item: "Ensalada mixta", price: 7 },
        { item: "Empanadas", price: 4 }
      ],
      numberOfTables: 25
    },
    {
      name: "La Cocina del Sur",
      number: "2398472",
      location: {
        latitude: -34.6050,
        longitude: -58.3835
      },
      logoUrl: "asdasd",
      images: ["imagen1.jpg", "imagen2.jpg"],
      menu: [
        { item: "Milanesa", price: 12 },
        { item: "Sopa de verduras", price: 6 },
        { item: "Churrasco", price: 14 }
      ],
      numberOfTables: 20
    },
    {
      name: "Bistro Buenos Aires",
      number: "3459821",
      location: {
        latitude: -34.6083,
        longitude: -58.3700
      },
      logoUrl: "asdasd",
      images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
      menu: [
        { item: "Quiche Lorraine", price: 8 },
        { item: "Pasta al pesto", price: 11 },
        { item: "Tarta de espinaca", price: 7 }
      ],
      numberOfTables: 15
    },
    {
      name: "Café Plaza Mayor",
      number: "4927810",
      location: {
        latitude: -34.6012,
        longitude: -58.3860
      },
      logoUrl: "asdasd",
      images: ["imagen1.jpg", "imagen2.jpg"],
      menu: [
        { item: "Café con leche", price: 3 },
        { item: "Medialuna", price: 2 },
        { item: "Tostado mixto", price: 5 }
      ],
      numberOfTables: 18
    },
    {
      name: "El Asador Criollo",
      number: "5912039",
      location: {
        latitude: -34.6104,
        longitude: -58.3755
      },
      logoUrl: "asdasd",
      images: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
      menu: [
        { item: "Asado", price: 16 },
        { item: "Provoleta", price: 6 },
        { item: "Morcilla", price: 4 }
      ],
      numberOfTables: 30
    },
    {
      name: "Rincón Porteño",
      number: "6782398",
      location: {
        latitude: -34.6055,
        longitude: -58.3721
      },
      logoUrl: "asdasd",
      images: ["imagen1.jpg", "imagen2.jpg"],
      menu: [
        { item: "Pasta Alfredo", price: 10 },
        { item: "Bife de costilla", price: 14 },
        { item: "Flan casero", price: 5 }
      ],
      numberOfTables: 17
    },
    {
      name: "Sabores de La Boca",
      number: "7823491",
      location: {
        latitude: -34.6142,
        longitude: -58.3623
      },
      logoUrl: "asdasd",
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
      logoUrl: "asdasd",
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
      logoUrl: "asdasd",
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