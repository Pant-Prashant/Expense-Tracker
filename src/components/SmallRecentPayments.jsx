import styles from "./SmallRecentPayments.module.css";

function SmallRecentPayments({ amount, date }) {
  return (
    <div className={styles.info}>
      <span style={{ fontSize: "12px", color: "#4b4b4bff" }}>₹{amount}</span>
      <span style={{ fontSize: "12px", color: "#4b4b4bff" }}>{date}</span>
    </div>
  );
}

export default SmallRecentPayments;
