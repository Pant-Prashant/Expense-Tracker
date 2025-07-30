import styles from "./AddExpenseForm.module.css";
import { useState, useContext } from "react";
import { DataContext } from "../store/ExpenseTrackerStore";

function AddExpenseForm({ clickAddExpense, setBalance, balance }) {
  let {
    expenseDetails,
    setExpenseDetails,
    updateExpensePerType,
    updateSmallRecentPaymentsList,
  } = useContext(DataContext);

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const digitsOnly = event.target.value.replace(/\D/g, "");
    setValue(digitsOnly);
  };

  const formSubmit = () => {
    if (
      expenseName.value &&
      amount.value &&
      medium.value != "Click here!" &&
      type.value != "Click here!"
    ) {
      let newExpense = {
        date: new Date().toLocaleString(),
        expenseName: expenseName.value,
        expenseType: type.value,
        expenseAmount: amount.value,
        paymentMethod: medium.value,
      };
      const today = new Date();
      const shortDate = today.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      });
      setExpenseDetails([newExpense, ...expenseDetails]);

      updateSmallRecentPaymentsList(amount.value, shortDate, type.value);

      updateExpensePerType(amount.value, type.value);
      setBalance(balance - Number(amount.value));
      setValue("");
      clickAddExpense();
    }
  };
  return (
    <div className={styles["add-expense"]}>
      <h3 style={{ color: "white", fontWeight: "550" }}>Add Expense</h3>
      <form action={formSubmit}>
        Enter expense name:
        <input
          class="form-control form-control-sm"
          type="text"
          id="expenseName"
          placeholder="Expense Name"
          style={{ fontSize: "17px" }}
        ></input>
        Enter amount paid:
        <input
          class="form-control form-control-sm"
          type="text"
          id="amount"
          placeholder="Amount"
          value={value}
          onChange={handleChange}
          style={{ fontSize: "17px" }}
        ></input>
        Select payment method:
        <select
          id="medium"
          class="form-select form-select-sm"
          style={{ fontSize: "17px", marginBottom: "15px" }}
        >
          <option hidden>Click here!</option>
          <option value="Google Pay">Google Pay</option>
          <option value="PayPal">PayPal</option>
          <option value="Amazon Pay">Amazon Pay</option>
          <option value="Paytm">Paytm</option>
          <option value="Cash">Cash</option>
        </select>
        Select expense type:
        <select
          id="type"
          class="form-select form-select-sm"
          style={{ fontSize: "17px", marginBottom: "15px" }}
        >
          <option hidden>Click here!</option>
          <option value="Clothes">Clothes</option>
          <option value="EMI">EMI</option>
          <option value="Rent">Rent</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
          <option value="Remittance">Remittance</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
        <input type="submit" className={styles["submit-button"]} />
        <button className={styles["close-button"]} onClick={clickAddExpense}>
          Close
        </button>
      </form>
    </div>
  );
}

export default AddExpenseForm;
