import styles from "./DisplayExpense.module.css";
import CircleGraph from "./CircleGraph";

function DisplayExpense() {
  let mainText = "Rent";
  let expenseAmount = 2000;
  const today = new Date();
  const date = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return (
    <div className={styles.box1}>
      <div className={styles["box2"]}>
        <p className={styles["text-1"]}>{mainText}:</p>
        <p className={styles["text-1"]}>
          ₹{expenseAmount}
          <span style={{ paddingBottom: "10px" }}> spent</span>
        </p>
      </div>
      <div className={styles.line}></div>
      <CircleGraph percentage={20} expenseType={"Rent"} />
      <div className={styles["box3"]}>
        Recent Payments:
        <div className={styles["recent-payments"]}>
          <div className={styles.info}>
            <span style={{ fontSize: "12px", color: "#4b4b4bff" }}>
              ₹{expenseAmount}
            </span>
            <span style={{ fontSize: "12px", color: "#4b4b4bff" }}>{date}</span>
          </div>
          <div className={styles.info}>
            <span style={{ fontSize: "12px", color: "#4b4b4bff" }}>
              ₹{expenseAmount}
            </span>
            <span style={{ fontSize: "12px", color: "#4b4b4bff" }}>{date}</span>
          </div>
          <div className={styles.info}>
            <span style={{ fontSize: "12px", color: "#4b4b4bff" }}>
              ₹{expenseAmount}
            </span>
            <span style={{ fontSize: "12px", color: "#4b4b4bff" }}>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayExpense;
