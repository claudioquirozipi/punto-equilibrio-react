import { useState } from "react";
import { CreateProduct, Product } from "../interface/product.interface";

function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const getTotalProducts = (products: Product[]): number => {
    return products.reduce(
      (acc, p) => acc + (p.price - p.cost) * p.quantity,
      0
    );
  };

  const addProduct = (product: CreateProduct) => {
    const newProduct = {
      ...product,
      id: Math.random().toString(),
    };
    const newList = [...products, newProduct];
    setProducts(newList);
    const total = getTotalProducts(newList);
    setTotalProducts(total);
  };

  const updateProductQuantity = (id: string, quantity: number) => {
    const newProducts = products.map((p) =>
      p.id === id ? { ...p, quantity } : p
    );
    setProducts(newProducts);
    const total = getTotalProducts(newProducts);
    setTotalProducts(total);
  };

  const resetProducts = () => {
    setProducts([]);
    setTotalProducts(0);
  };

  const deleteProduct = (id: string) => {
    const newProducts = products.filter((p) => p.id !== id);
    setProducts(newProducts);
    const total = getTotalProducts(newProducts);
    setTotalProducts(total);
  };
  return {
    products,
    totalProducts,
    addProduct,
    updateProductQuantity,
    resetProducts,
    deleteProduct,
  };
}

export default useProducts;
