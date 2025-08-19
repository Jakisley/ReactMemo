import { useEffect, useMemo } from "react";
import styles from "./ExpensiveList.module.css";

function ExpensiveList({ items }: { items: number[] }) {
  const sorted = useMemo(() => {
    return [...items].sort((a, b) => a - b);
  }, [items]);

  useEffect(() => console.log("Sorting..."), [sorted]);
  return (
    <div className={styles.list}>
      <h3>Отсортированный список:</h3>
      <ul>
        {sorted.map((i, idx) => (
          <li key={idx} className={styles.listItem}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpensiveList;
