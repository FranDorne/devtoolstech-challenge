import { useState } from "react";
import { Filter } from "../types";

type Props = {
  onChange: (filter: Filter) => void;
};

const RatingFilter: React.FC<Props> = ({ onChange }) => {
  const [selected, setSelected] = useState<Set<number>>(() => new Set());

  function handleChange(rating: number, isChecked: boolean) {
    const draft = structuredClone(selected);

    if (isChecked) {
      draft.add(rating);
    } else {
      draft.delete(rating);
    }

    onChange(draft.size ? (product) => draft.has(product.rating) : null);

    setSelected(draft);
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
      <h4>Rating</h4>
      <ul>
        {[5,4,3,2,1].map((rating) => (
          <li key={String(rating)}>
            <label style={{ display: "flex", gap: 12 }}>
              <input
                onChange={(e) => handleChange(rating, e.target.checked)}
                name="rating"
                type="checkbox"
                value={rating}
              />
              {'★'.repeat(rating).padEnd(5, "☆")}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingFilter;
