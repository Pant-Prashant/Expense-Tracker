import { useState, useContext } from "react";
import styles from "./AddIncomeForm.module.css";
import { DataContext } from "../store/ExpenseTrackerStore";

function AddIncomeForm({ clickAddIncome, setBalance, balance }) {
  let { incomeDetails, setIncomeDetails } = useContext(DataContext);

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const digitsOnly = event.target.value.replace(/\D/g, "");
    setValue(digitsOnly);
  };

  const formSubmit = () => {
    if (incomeName.value && amount.value && medium.value != "Click here!") {
      let newIncome = {
        date: new Date().toLocaleString(),
        incomeName: incomeName.value,
        incomeMethod: medium.value,
        amount: amount.value,
      };
      setIncomeDetails([newIncome, ...incomeDetails]);
      setBalance(balance + Number(amount.value));
      setValue("");
      clickAddIncome();
    }
  };
  return (
    <div className={styles["add-income"]}>
      <h3 style={{ color: "white", fontWeight: "550" }}>Add Income</h3>
      <form action={formSubmit}>
        Enter income name/source:
        <input
          class="form-control form-control-sm"
          type="text"
          id="incomeName"
          placeholder="Income Name"
          style={{ fontSize: "17px" }}
        ></input>
        Enter amount received:
        <input
          class="form-control form-control-sm"
          type="text"
          id="amount"
          placeholder="Amount"
          value={value}
          onChange={handleChange}
          style={{ fontSize: "17px" }}
        ></input>
        Select income medium:
        <select
          id="medium"
          class="form-select form-select-sm"
          style={{ fontSize: "17px", marginBottom: "15px" }}
        >
          <option hidden>Click here!</option>
          <option value="Google Pay">Google Pay</option>
          <option value="Paypal">Paypal</option>
          <option value="Amazon Pay">Amazon Pay</option>
          <option value="Paytm">Paytm</option>
          <option value="Cash">Cash</option>
        </select>
        <input type="submit" className={styles["submit-button"]} />
        <button className={styles["close-button"]} onClick={clickAddIncome}>
          Close
        </button>
      </form>
    </div>
  );
}

export default AddIncomeForm;
