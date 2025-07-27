import styles from "./DisplayExpense.module.css";
import CircleGraph from "./CircleGraph";
import SmallRecentPayments from "./SmallRecentPayments";

function DisplayExpense({ type, amount, percentage, paymentList }) {
  let mainText = type;
  let expenseAmount = amount;
  let list = paymentList;
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
      <CircleGraph percentage={percentage} expenseType={mainText} />
      <div className={styles["box3"]}>
        Recent Payments:
        <div className={styles["recent-payments"]}>
          {list.map(
            (list) =>
              list.date && (
                <SmallRecentPayments amount={list.amount} date={list.date} />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default DisplayExpense;
