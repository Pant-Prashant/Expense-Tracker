import { useState, createContext, useReducer, use } from "react";

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

  let percentage = [
    (expensePerType.Clothes / totalExpense) * 100,
    (expensePerType.EMI / totalExpense) * 100,
    (expensePerType.Food / totalExpense) * 100,
    (expensePerType.Rent / totalExpense) * 100,
    (expensePerType.Entertainment / totalExpense) * 100,
    (expensePerType.Remittance / totalExpense) * 100,
    (expensePerType.Miscellaneous / totalExpense) * 100,
  ];
  let roundPercentage = percentage.map((num) => num.toFixed(2));

  let [expenseTypePercentage, setExpenseTypePercentage] =
    useState(roundPercentage);

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
    let roundPercentage = newPercentage.map((num) => num.toFixed(2));
    setExpenseTypePercentage(roundPercentage);
  }

  let [smallRecentPaymentsList, setSmallRecentPaymentList] = useState({
    Clothes: [{ amount: 600, date: "July 28" }, {}, {}],
    EMI: [
      { amount: 500, date: "July 15" },
      { amount: 500, date: "July 01" },
      {},
    ],
    Food: [
      { amount: 500, date: "July 25" },
      { amount: 300, date: "July 17" },
      { amount: 2000, date: "July 05" },
    ],
    Rent: [{ amount: 5000, date: "July 9" }, {}, {}],
    Entertainment: [
      { amount: 400, date: "July 18" },
      { amount: 600, date: "July 02" },
      {},
    ],
    Remittance: [
      { amount: 500, date: "July 27" },
      { amount: 2000, date: "July 18" },
      { amount: 1000, date: "July 08" },
    ],
    Miscellaneous: [
      { amount: 500, date: "July 28" },
      { amount: 700, date: "July 20" },
      { amount: 300, date: "July 19" },
    ],
  });

  function updateSmallRecentPaymentsList(amount, date, type) {
    switch (type) {
      case "Clothes":
        setSmallRecentPaymentList((prev) => ({
          ...prev,
          Clothes: [{ amount, date }, ...prev.Clothes.slice(0, -1)],
        }));
        break;
      case "EMI":
        setSmallRecentPaymentList((prev) => ({
          ...prev,
          EMI: [{ amount, date }, ...prev.EMI.slice(0, -1)],
        }));
        break;
      case "Food":
        setSmallRecentPaymentList((prev) => ({
          ...prev,
          Food: [{ amount, date }, ...prev.Food.slice(0, -1)],
        }));
        break;
      case "Rent":
        setSmallRecentPaymentList((prev) => ({
          ...prev,
          Rent: [{ amount, date }, ...prev.Rent.slice(0, -1)],
        }));
        break;
      case "Entertainment":
        setSmallRecentPaymentList((prev) => ({
          ...prev,
          Entertainment: [{ amount, date }, ...prev.Entertainment.slice(0, -1)],
        }));
        break;
      case "Remittance":
        setSmallRecentPaymentList((prev) => ({
          ...prev,
          Remittance: [{ amount, date }, ...prev.Remittance.slice(0, -1)],
        }));
        break;
      case "Miscellaneous":
        setSmallRecentPaymentList((prev) => ({
          ...prev,
          Miscellaneous: [{ amount, date }, ...prev.Miscellaneous.slice(0, -1)],
        }));
        break;
    }
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
        expensePerType,
        setExpensePerType,
        expenseTypePercentage,
        updateExpensePerType,
        smallRecentPaymentsList,
        updateSmallRecentPaymentsList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
