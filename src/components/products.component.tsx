import { useState } from "react";
import { CreateProduct, Product } from "../interface/product.interface";

interface ProductComponentProps {
  products: Product[];
  resetProducts: () => void;
  deleteProduct: (id: string) => void;
  addProduct: (product: CreateProduct) => void;
  updateProductQuantity: (id: string, quantity: number) => void;
}

const initialFormValues: CreateProduct = {
  name: "",
  price: 0,
  cost: 0,
  quantity: 0,
};

function ProductsComponent(props: ProductComponentProps) {
  const {
    products,
    addProduct,
    updateProductQuantity,
    resetProducts,
    deleteProduct,
  } = props;
  const [formValues, setFormValues] =
    useState<CreateProduct>(initialFormValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (type === "name") {
      setFormValues({ ...formValues, name: e.target.value });
    } else {
      setFormValues({ ...formValues, [type]: +e.target.value });
    }
  };

  const onSubmit = () => {
    addProduct(formValues);
    setFormValues(initialFormValues);
  };
  return (
    <div
      className="grid grid-cols-2 gap-2"
      style={{ gridTemplateRows: "auto 1fr" }}
    >
      <h2 className="col-span-2 text-indigo-950 bg-white text-2xl py-2 px-4 text-center">
        Productos / Costos variables
      </h2>
      <div>
        <div className="bg-white px-4 py-2">
          <h3 className="text-xl border-b-2 border-indigo-950 pb-2">
            Agregregar Productos
          </h3>

          <form className="grid gap-2 pt-4">
            <div className="grid">
              <label htmlFor="">Producto</label>
              <input
                type="text"
                placeholder="Nombre del producto"
                value={formValues.name}
                onChange={(e) => onChange(e, "name")}
              />
            </div>
            <div className="grid">
              <label htmlFor="">Precio de venta</label>
              <input
                type="number"
                placeholder="Precio"
                value={formValues.price}
                onChange={(e) => onChange(e, "price")}
              />
            </div>
            <div className="grid">
              <label htmlFor="">Costo por unidad o CV</label>
              <input
                type="number"
                placeholder="Costo"
                value={formValues.cost}
                onChange={(e) => onChange(e, "cost")}
              />
            </div>
            <div className="grid">
              <label htmlFor="">Cantidad de ventas</label>
              <input
                type="number"
                placeholder="Cantidad"
                value={formValues.quantity}
                onChange={(e) => onChange(e, "quantity")}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="bg-green-500 px-4 py-2 text-white"
                onClick={onSubmit}
              >
                Agregar
              </button>
              <button
                type="button"
                className="bg-red-500 px-4 py-2 text-white"
                onClick={resetProducts}
              >
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
      <ul className="grid gap-2">
        {products.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center gap-2 bg-white py-2 px-4"
          >
            <form>
              <p>Nombre: {p.name}</p>
              <div className="flex">
                <p>
                  ({p.price} - {p.cost})*
                </p>
                <input
                  style={{ width: "70px" }}
                  type="number"
                  value={p.quantity}
                  onChange={(e) => updateProductQuantity(p.id, +e.target.value)}
                />
              </div>
            </form>
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4"
              onClick={() => deleteProduct(p.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsComponent;
