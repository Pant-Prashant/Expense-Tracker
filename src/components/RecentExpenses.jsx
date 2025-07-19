import ExpenseInfo from "./ExpenseInfo";
import { useContext } from "react";
import { DataContext } from "../store/ExpenseTrackerStore";
import styles from "./RecentExpenses.module.css";

function RecentExpenses() {
  let { expenseDetails } = useContext(DataContext);
  return (
    <div className={styles.box}>
      <h3>Your Recent Expenses:</h3>
      <ul type="none">
        {expenseDetails.map((expenseDetails) => (
          <ExpenseInfo
            currentDate={expenseDetails.date}
            amount={expenseDetails.expenseAmount}
            name={expenseDetails.expenseName}
            type={expenseDetails.expenseType}
            method={expenseDetails.paymentMethod}
          ></ExpenseInfo>
        ))}
      </ul>
    </div>
  );
}

export default RecentExpenses;
