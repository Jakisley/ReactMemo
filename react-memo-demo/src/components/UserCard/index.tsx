import React from "react";
import styles from "./UserCard.module.css";

function UserCard({ name }: { name: string }) {
  console.log("UserCard rendered");
  return (
    <div className={styles.card}>
      <p>User: {name}</p>
    </div>
  );
}

export default React.memo(UserCard);
