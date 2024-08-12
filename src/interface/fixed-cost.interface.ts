export interface FixedCost {
  id: string;
  name: string;
  amount: number;
}

export type CreateFixedCost = Omit<FixedCost, "id">;
