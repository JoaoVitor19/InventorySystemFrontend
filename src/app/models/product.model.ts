export class Product {
    id?: string;
    name: string;
    description?: string;
    category?: string;
    initialPrice: number;
    finalPrice: number;
    imagePath?: string;
    stockQuantity?: number;

    constructor(
        name: string,
        initialPrice: number,
        finalPrice: number,
        description?: string,
        category?: string,
        imagePath?: string,
        stockQuantity?: number
    ) {
        this.name = name;
        this.initialPrice = initialPrice;
        this.finalPrice = finalPrice;
        this.description = description;
        this.category = category;
        this.imagePath = imagePath;
        this.stockQuantity = stockQuantity;
    }
}
