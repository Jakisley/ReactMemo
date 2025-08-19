import { useState, useCallback, Suspense, lazy } from "react";
import UserCard from "./components/UserCard";
import ExpensiveList from "./components/ExpensiveList";
import CounterButton from "./components/CounterButton";
import styles from "./App.module.css";
import { delay } from "./utilts/delay";
// import HeavyChart from "./components/HeavyChart";

const HeavyChart = lazy(async () => {
  await delay(2000);
  return import("./components/HeavyChart");
});

export default function App() {
  const [tab, setTab] = useState<
    "greeting" | "memo" | "useMemo" | "callback" | "lazy"
  >("greeting");
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([9, 2, 5, 1, 8]);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const handleAddItem = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setItems((prev) => [...prev, randomNumber]);
  };

  return (
    <div className={styles.container}>
      <h1>React оптимизация — демо</h1>

      <div className={styles.tabs}>
        <button className={styles.tabButton} onClick={() => setTab("memo")}>
          React.memo
        </button>
        <button className={styles.tabButton} onClick={() => setTab("useMemo")}>
          useMemo
        </button>
        <button className={styles.tabButton} onClick={() => setTab("callback")}>
          useCallback
        </button>
        <button className={styles.tabButton} onClick={() => setTab("lazy")}>
          React.lazy
        </button>
      </div>

      {tab === "greeting" && (
        <div className={styles.section}>
          <h2>
            Привет, здесь ты сможешь наглядно посмотреть, как работают useMemo,
            useCallback, React.memo и React.lazy.
          </h2>
        </div>
      )}

      {tab === "memo" && (
        <div className={styles.section}>
          <h2>Пример React.memo</h2>
          <UserCard name="Alice" />
          <button onClick={() => setCount(count + 1)}>
            Update state ({count})
          </button>
        </div>
      )}

      {tab === "useMemo" && (
        <div className={styles.section}>
          <h2>Пример useMemo</h2>
          <ExpensiveList items={items} />
          <button onClick={() => setCount(count + 1)}>
            Update state ({count})
          </button>
          <button onClick={handleAddItem}>Добавить случайное число</button>
        </div>
      )}

      {tab === "callback" && (
        <div className={styles.section}>
          <h2>Пример useCallback + React.memo</h2>
          <p>Count: {count}</p>
          <CounterButton onClick={handleClick} />
        </div>
      )}

      {tab === "lazy" && (
        <div className={styles.section}>
          <h2>Пример React.lazy</h2>
          <Suspense fallback={<div>Загрузка графика...</div>}>
            <HeavyChart />
          </Suspense>
        </div>
      )}
    </div>
  );
}
