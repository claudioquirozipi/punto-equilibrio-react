import FixedCostComponent from "./components/fixed-cost.component";
import ProductsComponent from "./components/products.component";
import TotalComponent from "./components/total.component";
import useFixedConst from "./hooks/fixed-cost.hook";
import useProducts from "./hooks/products.hook";

function App() {
  const {
    products,
    totalProducts,
    addProduct,
    updateProductQuantity,
    resetProducts,
    deleteProduct,
  } = useProducts();
  const {
    fixedCost,
    totalFixedCost,
    addFixedCost,
    resetFixedCost,
    deleteFixedCost,
  } = useFixedConst();

  return (
    <div className="bg-indigo-950 text-indigo-950 min-h-screen px-20 py-2">
      <div className="grid grid-cols-2 gap-12">
        <TotalComponent
          products={products}
          fixedCost={fixedCost}
          totalProducts={totalProducts}
          totalFixedCost={totalFixedCost}
        />
        <ProductsComponent
          products={products}
          addProduct={addProduct}
          updateProductQuantity={updateProductQuantity}
          resetProducts={resetProducts}
          deleteProduct={deleteProduct}
        />

        <FixedCostComponent
          fixedCost={fixedCost}
          addFixedCost={addFixedCost}
          resetFixedCost={resetFixedCost}
          deleteFixedCost={deleteFixedCost}
        />
      </div>
    </div>
  );
}

export default App;
