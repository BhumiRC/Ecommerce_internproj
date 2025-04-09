// This file defines the Product interface used in the application.

export interface Product {
    id: number;
    title:string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };  
}