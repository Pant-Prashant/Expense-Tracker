import classNames from "classnames";
import styles from "./Dashboard.module.css";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import AddIncomeForm from "./AddIncomeForm";
import RecentExpenses from "./RecentExpenses";
import AddExpenseForm from "./AddExpenseForm";
import { useState } from "react";

function Dashboard({
  setIncomeDetails,
  incomeDetails,
  setExpenseDetails,
  expenseDetails,
}) {
  let [addIncomeVisibility, setAddIncomeVisibility] = useState(false);
  function clickAddIncome(event) {
    setAddIncomeVisibility(!addIncomeVisibility);
  }

  let [addExpenseVisibility, setAddExpenseVisibility] = useState(false);
  function clickAddExpense(event) {
    setAddExpenseVisibility(!addExpenseVisibility);
  }

  const [balance, setBalance] = useState(1000);
  const className = classNames({
    [styles.balance]: true,
    [styles.red]: balance < 0,
  });

  function getSavingsMessage(balance) {
    if (balance < -50000)
      return "You're deep in the red. But every comeback starts somewhere.";
    if (balance < -25000)
      return "Debt is heavy. Let’s lighten the load together.";
    if (balance < -10000) return "Red alert! It’s time to get serious.";
    if (balance < -5000) return "Yikes! Time for a budget reset.";
    if (balance < -1000) return "Warning: You’re spending more than you earn.";
    if (balance < -500) return "A small setback, not the end. You got this!";
    if (balance < 0) return "Oops! You’ve dipped a little. Let’s fix it quick.";

    if (balance === 0) return "Let’s get started! Try saving a little today.";
    if (balance < 500) return "Nice! Every rupee counts!";
    if (balance < 1000) return "Good job! You're off to a solid start!";
    if (balance < 5000) return "Awesome! Your savings are stacking up.";
    if (balance < 10000) return "Great discipline! Keep it going.";
    if (balance < 25000) return "Amazing! You're building real momentum.";
    if (balance < 50000) return "Wow! That’s some serious saving power.";
    if (balance < 100000) return "Incredible! You’re crushing your goals.";
    return "You’re a savings master! Time to invest?";
  }

  return (
    <div className="dashboard-div container-cover">
      {addIncomeVisibility == true && (
        <>
          <div className={styles["blur-background"]}></div>
          <AddIncomeForm
            clickAddIncome={clickAddIncome}
            setBalance={setBalance}
            balance={balance}
          ></AddIncomeForm>
        </>
      )}

      {addExpenseVisibility == true && (
        <>
          <div className={styles["blur-background"]}></div>
          <AddExpenseForm
            clickAddExpense={clickAddExpense}
            /*setExpenseDetails={setExpenseDetails}
            expenseDetails={expenseDetails}*/
            setBalance={setBalance}
            balance={balance}
          ></AddExpenseForm>
        </>
      )}
      <div className="container" style={{ paddingBottom: "3px" }}>
        <div className={styles["top-div"]}>
          <div>
            <h1 style={{ fontWeight: "700", marginBottom: "0" }}>
              Your Balance:
            </h1>
            <h3 className={className}>
              {balance}
              <span
                style={{
                  fontSize: "0.5em",
                  verticalAlign: "2px",
                  marginLeft: "2px",
                }}
              >
                Rs.
              </span>
            </h3>
            <p>{getSavingsMessage(balance)}</p>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles["line"]}></div>
            <span>
              <button className={styles[`add-button`]} onClick={clickAddIncome}>
                <MdOutlineAddCircleOutline
                  size={18}
                  style={{ marginBottom: "2px" }}
                />{" "}
                Add Income
              </button>
              <br />
              <button
                className={styles[`expense-button`]}
                onClick={clickAddExpense}
              >
                <GrSubtractCircle size={18} style={{ marginBottom: "2px" }} />{" "}
                Add Expense
              </button>
            </span>
          </div>
        </div>
        <div className={styles["lower-div"]}>
          <RecentExpenses></RecentExpenses>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
