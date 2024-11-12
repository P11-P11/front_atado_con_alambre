export class RestauranteInput {
    constructor(
        public name: string,

        public number: string,

        public location: Coordinate,

        public logoUrl: string,

        public images: string[],  

        public menu: MenuItem[],

        public numberOfTables: number
    ) {}
}

export class Restaurante {
    constructor(

        public id: number,

        public name: string,
        public number: string,

        public location: Coordinate,

        public logoUrl: string,

        public images: string[],  
        
        public openingTime: string,
        public closingTime: string,

        public menu: MenuItem[],
        public orders: Order[],

        public tableOrders: Map<Number, Number>
    ) {}
}

export class MenuItem {
    constructor(
        public item: string,
        public price: number
    ) {}
}

export class Coordinate {
    constructor(
        public latitude: number,
        public longitude: number
    ) {}
}

export class Order {
    constructor(
        public id: number,
        public items: OrderItem[],
        public status: OrderStatus,
        public tableNumber: number
    ) {}
}

export class OrderItem {
    constructor(
        public menuItem: MenuItem, 
        public quantity: number
    ) {}
}

export class OrderInput {
    constructor(
        public tableNumber: number,
        public items: OrderItem[],
        public userLocation: Coordinate
    ) {}
}

export enum OrderStatus {
    CREATED = "CREATED",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    IN_PREPARATION = "IN_PREPARATION",
    READY_FOR_PICKUP = "READY_FOR_PICKUP",
    READY_TO_BE_SERVED = "READY_TO_BE_SERVED",
    DELIVERED = "DELIVERED"
}