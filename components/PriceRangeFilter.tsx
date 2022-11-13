import { useState } from "react";
import { Filter } from "../types";

type Props = {
  onChange: (filter: Filter) => void;
};

const PriceRangeFilter: React.FC<Props> = ({ onChange }) => {
const [min, setMin] = useState<number>(0); 
const [max, setMax] = useState<number>(0); 

  function handleChangeMin(value: number) {
    setMin(value)

    onChange(value ? (product) => product.price >= value && product.price <= max : null);
  }

  function handleChangeMax(value: number) {
    setMax(value)

    onChange(value ? (product) => product.price <= min && product.price <= value : null);
  }

  return (
    <div
      style={{
        border: "1px solid white",
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <h4>Price</h4>
      <ul>
          <li >
            <label style={{ display: "flex", gap: 12 }}>
                Mínimo:
              <input
                onChange={(e) => handleChangeMin(Number(e.target.value))}
                name="rating"
                type="number"
                value={min}
              />
            </label>
          </li>
          <li >
            <label style={{ display: "flex", gap: 12 }}>
                Máximo:
              <input
                onChange={(e) => handleChangeMax(Number(e.target.value))}
                name="rating"
                type="number"
                value={max}
              />
            </label>
          </li>
      </ul>
    </div>
  );
};

export default PriceRangeFilter;
