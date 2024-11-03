export class RestauranteInput {
    constructor(
        public name: string,

        public number: string,

        public location: Coordinate,

        public images: string[],  

        public menu: MenuItem[],

        public numberOfTables: number
    ) {}
}

export class Restaurante {
    constructor(

        public id: string,

        public name: string,
        public number: string,

        public location: Coordinate,

        public images: string[],  

        public menu: MenuItem[],

        public numberOfTables: number
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
        public id: string,
        public items: OrderItem[],
        public status: OrderStatus,
        public customerID?: string | null, 
        public tableID?: string | null
    ) {}
}

export class OrderItem {

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