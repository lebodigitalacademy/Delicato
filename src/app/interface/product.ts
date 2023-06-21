export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category:{
        categoryId: number;
        categoryName: string;
    };
    image:{
        imageId: string;
        imageURL: string;
    };
    
}
