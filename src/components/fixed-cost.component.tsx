import { useState } from "react";
import { CreateFixedCost, FixedCost } from "../interface/fixed-cost.interface";

interface FixedCostComponentProps {
  fixedCost: FixedCost[];
  addFixedCost: (fc: CreateFixedCost) => void;
  resetFixedCost: () => void;
  deleteFixedCost: (id: string) => void;
}

const initialFormValues: CreateFixedCost = {
  name: "",
  amount: 0,
};
function FixedCostComponent(props: FixedCostComponentProps) {
  const { fixedCost, addFixedCost, resetFixedCost, deleteFixedCost } = props;

  const [formValues, setFormValues] =
    useState<CreateFixedCost>(initialFormValues);

  const onSumit = () => {
    addFixedCost(formValues);
    setFormValues(initialFormValues);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    if (type === "name") {
      setFormValues({ ...formValues, name: e.target.value });
    }
    if (type === "amount") {
      setFormValues({ ...formValues, amount: +e.target.value });
    }
  };

  return (
    <div
      className="grid grid-cols-2 gap-2"
      style={{ gridTemplateRows: "auto 1fr" }}
    >
      <h2 className="col-span-2 text-indigo-950 bg-white text-2xl py-2 px-4 text-center">
        Costos fijos{" "}
      </h2>
      <div>
        <div className="bg-white px-4 py-2">
          <h3 className="text-xl border-b-2 border-indigo-950 pb-2">
            Agregregar Costos fijos
          </h3>

          <form className="grid gap-2 pt-4">
            <div className="grid">
              <label htmlFor="">Nombre CF</label>
              <input
                type="text"
                placeholder="Nombre"
                value={formValues.name}
                onChange={(e) => handleChange(e, "name")}
              />
            </div>
            <div className="grid">
              <label htmlFor="">Monto a pagar</label>
              <input
                type="number"
                placeholder="Monto"
                value={formValues.amount}
                onChange={(e) => handleChange(e, "amount")}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="bg-green-500 px-4 py-2 text-white"
                onClick={onSumit}
              >
                Agregar
              </button>
              <button
                type="button"
                className="bg-red-500 px-4 py-2 text-white"
                onClick={resetFixedCost}
              >
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
      <ul className="grid gap-2">
        {fixedCost.map((fc) => (
          <li
            key={fc.id}
            className="flex justify-between items-center gap-2 bg-white py-2 px-4"
          >
            <div>
              <p>Nombre: {fc.name}</p>
              <p>Monto: {fc.amount}</p>
            </div>
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4"
              onClick={() => deleteFixedCost(fc.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FixedCostComponent;
