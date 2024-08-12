export interface Product {
  id: string;
  name: string;
  price: number;
  cost: number;
  quantity: number;
}

export type CreateProduct = Omit<Product, "id">;
