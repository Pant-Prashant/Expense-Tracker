import styles from "./DisplayExpense.module.css";

function DisplayExpense() {
  let mainText = "Rent";
  let expenseAmount = 2000;
  return (
    <div className={styles.box1}>
      <div className={styles["box2"]}>
        <p className={styles["text-1"]}>{mainText}:</p>
        <p className={styles["text-1"]}>{expenseAmount}Rs.</p>
      </div>
    </div>
  );
}

export default DisplayExpense;
