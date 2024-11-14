const axios = require('axios');

const BASE_URL = 'https://alambre-5fd9d904972d.herokuapp.com'; // Cambia esta URL según tu configuración
// const BASE_URL = 'http://localhost:8080';

// 1. GET /restaurants con parámetros opcionales
async function getRestaurants(latitude = null, longitude = null) {
    const params = {};
    if (latitude !== null && longitude !== null) {
        params.latitude = latitude;
        params.longitude = longitude;
    }
    try {
        const response = await axios.get(`${BASE_URL}/restaurants`, { params });
        console.log('Lista de restaurantes:', response.data);
    } catch (error) {
        console.error('Error en getRestaurants:', error.response ? error.response.data : error.message);
    }
}

// 2. POST /restaurants
async function addRestaurant(restaurantInput) {
    try {
        const response = await axios.post(`${BASE_URL}/restaurants`, restaurantInput, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log('Restaurante agregado:', response);
    } catch (error) {
        console.error('Error en addRestaurant:', error.response ? error.response.data : error.message);
    }
}

// 3. GET /restaurants/{restaurantID}
async function getRestaurant(restaurantID) {
    try {
        const response = await axios.get(`${BASE_URL}/restaurants/${restaurantID}`);
        console.log('Detalles del restaurante:', response.data);
    } catch (error) {
        console.error('Error en getRestaurant:', error.response ? error.response.data : error.message);
    }
}

// 4. DELETE /restaurants
async function emptyRestaurants() {
    try {
        const response = await axios.delete(`${BASE_URL}/restaurants`);
        console.log('Todos los restaurantes eliminados:', response.status);
    } catch (error) {
        console.error('Error en emptyRestaurants:', error.response ? error.response.data : error.message);
    }
}

// 5. GET /restaurants/{restaurantID}/menu
async function getMenu(restaurantID) {
    try {
        const response = await axios.get(`${BASE_URL}/restaurants/${restaurantID}/menu`);
        console.log('Menú del restaurante:', response.data);
    } catch (error) {
        console.error('Error en getMenu:', error.response ? error.response.data : error.message);
    }
}

// 6. GET /restaurants/{restaurantID}/qrs
async function getQRImages(restaurantID) {
    try {
        const response = await axios.get(`${BASE_URL}/restaurants/${restaurantID}/qrs`);
        console.log('Imágenes de QR:', response.data);
    } catch (error) {
        console.error('Error en getQRImages:', error.response ? error.response.data : error.message);
    }
}

// 7. GET /restaurants/{restaurantID}/orders
async function getRestaurantOrders(restaurantID) {
    try {
        const response = await axios.get(`${BASE_URL}/restaurants/${restaurantID}/orders`);
        console.log('Órdenes del restaurante:', response.data);
    } catch (error) {
        console.error('Error en getRestaurantOrders:', error.response ? error.response.data : error.message);
    }
}

// 8. POST /restaurants/{restaurantID}/orders
async function addOrder(restaurantID, orderInput) {
    try {
        const response = await axios.post(`${BASE_URL}/restaurants/${restaurantID}/orders`, orderInput, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log('Orden agregada:', response.data);
    } catch (error) {
        console.error('Error en addOrder:', error.response ? error.response.data : error.message);
    }
}

// 9. GET /restaurants/{restaurantID}/orders/{orderID}
async function getOrder(restaurantID, orderID) {
    try {
        const response = await axios.get(`${BASE_URL}/restaurants/${restaurantID}/orders/${orderID}`);
        console.log('Detalles de la orden:', response.data);
    } catch (error) {
        console.error('Error en getOrder:', error.response ? error.response.data : error.message);
    }
}

// 10. PATCH /restaurants/{restaurantID}/orders/{orderID}
async function updateOrderStatus(restaurantID, orderID, newStatus) {
    try {
        const response = await axios.patch(`${BASE_URL}/restaurants/${restaurantID}/orders/${orderID}`, newStatus, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log('Estado de la orden actualizado:', response.status);
    } catch (error) {
        console.error('Error en updateOrderStatus:', error.response ? error.response.data : error.message);
    }
}

// Ejemplos de uso
const restaurantInput = {
    name: "pepito",
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
    numberOfTables: 4,
    openingTime: "11am",
    closingTime: "11pm"
  };

const orderInput = {
    tableNumber: 2,
    userLocation: { latitude: 40.7128, longitude: -74.0060 },
    items: [
        { menuItem: { item: "Pizza", price: 12 }, quantity: 2 },
        { menuItem: { item: "Soda", price: 3 }, quantity: 1 }
    ]
};

// Llamadas de prueba
//getRestaurants();
addRestaurant(restaurantInput);
// getRestaurant(1);
// emptyRestaurants();
// getMenu(1);
// getQRImages(1);
// getRestaurantOrders(1);
// addOrder(1, orderInput);
// getOrder(1, 1);
// updateOrderStatus(1, 1, { status: "DELIVERED" });
