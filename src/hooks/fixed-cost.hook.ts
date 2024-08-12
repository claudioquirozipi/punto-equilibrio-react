import { useState } from "react";
import { CreateFixedCost, FixedCost } from "../interface/fixed-cost.interface";

function useFixedConst() {
  const [fixedCost, setFixedCost] = useState<FixedCost[]>([]);
  const [totalFixedCost, setTotalFixedCost] = useState(0);

  const getTotalFixedCost = (fixedCost: FixedCost[]): number => {
    return fixedCost.reduce((acc, fc) => acc + fc.amount, 0);
  };

  const addFixedCost = (fc: CreateFixedCost) => {
    const newFixedCost = {
      ...fc,
      id: Math.random().toString(),
    };
    const newList = [...fixedCost, newFixedCost];
    setFixedCost(newList);
    const total = getTotalFixedCost(newList);
    setTotalFixedCost(total);
  };

  const resetFixedCost = () => {
    setFixedCost([]);
    setTotalFixedCost(0);
  };

  const deleteFixedCost = (id: string) => {
    const newFixedCost = fixedCost.filter((fc) => fc.id !== id);
    setFixedCost(newFixedCost);
    const total = getTotalFixedCost(newFixedCost);
    setTotalFixedCost(total);
  };

  return {
    fixedCost,
    totalFixedCost,
    addFixedCost,
    resetFixedCost,
    deleteFixedCost,
  };
}

export default useFixedConst;
