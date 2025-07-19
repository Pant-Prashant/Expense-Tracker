import { useState, createContext, useReducer } from "react";

export let DataContext = createContext();

export function DataProvider({ children }) {
  /* let [expenseTypePercentage, dispatchExpenseTypePercentage] = useReducer(
    reducerExpenseTypePercentage,
    []
  );

  function reducerExpenseTypePercentage(newExpense, action) {
    let expense = newExpense;
    if (action.type === "Clothes") {
      console.log();
    }
  }*/
  let totalExpense = 18100;

  let [expensePerType, setExpensePerType] = useState({
    Clothes: 600,
    EMI: 1000,
    Food: 4000,
    Rent: 5000,
    Entertainment: 1000,
    Remittance: 4500,
    Miscellaneous: 2000,
  });

  let [expenseTypePercentage, setExpenseTypePercentage] = useState();

  function updateExpensePerType() {
    let newPercentage = [
      (expensePerType.Clothes / totalExpense) * 100,
      (expensePerType.EMI / totalExpense) * 100,
      (expensePerType.Food / totalExpense) * 100,
      (expensePerType.Rent / totalExpense) * 100,
      (expensePerType.Entertainment / totalExpense) * 100,
      (expensePerType.Remittance / totalExpense) * 100,
      (expensePerType.Miscellaneous / totalExpense) * 100,
    ];
    setExpenseTypePercentage(newPercentage);
  }

  let [incomeDetails, setIncomeDetails] = useState([
    {
      date: new Date().toLocaleString(),
      incomeName: "Salary",
      incomeMethod: "Google Pay",
      amount: 100000,
    },

    {
      date: new Date().toLocaleString(),
      incomeName: "Crypto",
      incomeMethod: "Paypal",
      amount: 5000,
    },
  ]);

  let [expenseDetails, setExpenseDetails] = useState([
    {
      date: new Date().toLocaleString(),
      expenseAmount: 5000,
      expenseName: "Zudio",
      expenseType: "Clothes",
      paymentMethod: "Cash",
    },

    {
      date: new Date().toLocaleString(),
      expenseAmount: 15000,
      expenseName: "Card Payment",
      expenseType: "EMI",
      paymentMethod: "Google Pay",
    },
  ]);

  return (
    <DataContext.Provider
      value={{
        incomeDetails,
        setIncomeDetails,
        expenseDetails,
        setExpenseDetails,
        setExpensePerType,
        updateExpensePerType,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
