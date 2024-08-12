import { FixedCost } from "../interface/fixed-cost.interface";
import { Product } from "../interface/product.interface";

interface TotalComponentProps {
  products: Product[];
  fixedCost: FixedCost[];
  totalProducts: number;
  totalFixedCost: number;
}

function TotalComponent(props: TotalComponentProps) {
  const { products, fixedCost, totalProducts, totalFixedCost } = props;
  return (
    <div className="flex justify-center items-center gap-8 col-span-2 bg-white py-2 px-4">
      <div
        className="grid gap-2 text-2xl"
        style={{
          gridTemplateColumns: "1fr auto 1fr",
        }}
      >
        <p className="text-right">(P - Cv)*Q</p>
        <p>=</p>
        <p className="text-left">CF</p>

        <p className="text-right">
          {products
            .map((p) => `(${p.price} - ${p.cost})*${p.quantity}`)
            .join(" + ")}
        </p>
        <p>=</p>
        <p className="text-left">
          {fixedCost.map((fc) => fc.amount).join(" + ")}
        </p>

        <p className="text-right">{totalProducts}</p>
        <p className="">{`${
          totalProducts - totalFixedCost > 0 ? ">" : "<="
        }`}</p>
        <p className="text-left">{totalFixedCost}</p>
      </div>
      <div className="">
        <p className="text-center text-xl font-bold">
          Ganancia:{" "}
          <span
            className={`${
              totalProducts - totalFixedCost > 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {totalProducts - totalFixedCost}
          </span>
        </p>
        <p className="text-9xl">
          {`${totalProducts - totalFixedCost > 0 ? "😊" : "😔"}`}
        </p>
      </div>
    </div>
  );
}

export default TotalComponent;
