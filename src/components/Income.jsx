import styles from "./Income.module.css";
import IncomeInfo from "./IncomeInfo";
import { useContext } from "react";
import { DataContext } from "../store/ExpenseTrackerStore";
function Income() {
  let { incomeDetails } = useContext(DataContext);
  return (
    <div className="income-div container-cover">
      <div className={`${styles["box"]} container`}>
        <h3 style={{ color: "#0d6efd", fontWeight: "650" }}>Income</h3>
        <ul type="none">
          {incomeDetails.map((incomeDetails) => (
            <IncomeInfo
              currentDate={incomeDetails.date}
              name={incomeDetails.incomeName}
              method={incomeDetails.incomeMethod}
              amount={incomeDetails.amount}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Income;
