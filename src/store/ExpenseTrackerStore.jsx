import { useState, createContext, useEffect } from "react";

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
  let [totalExpense, setTotalExpense] = useState(() => {
    const saved = localStorage.getItem("totalExpense");
    return saved ? JSON.parse(saved) : 0;
  });

  let [expensePerType, setExpensePerType] = useState(() => {
    const saved = localStorage.getItem("expensePerType");
    return saved
      ? JSON.parse(saved)
      : {
          Clothes: 0,
          EMI: 0,
          Food: 0,
          Rent: 0,
          Entertainment: 0,
          Remittance: 0,
          Miscellaneous: 0,
        };
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

  function updateExpensePerType(amount, type) {
    setExpensePerType((prev) => ({
      ...prev,
      [type]: prev[type] + Number(amount),
    }));
    setTotalExpense((prev) => prev + Number(amount));
  }
  useEffect(() => {
    if (totalExpense === 0) {
      setExpenseTypePercentage([
        "0.00",
        "0.00",
        "0.00",
        "0.00",
        "0.00",
        "0.00",
        "0.00",
      ]);
      return;
    }
    let newPercentage = [
      (expensePerType.Clothes / totalExpense) * 100,
      (expensePerType.EMI / totalExpense) * 100,
      (expensePerType.Food / totalExpense) * 100,
      (expensePerType.Rent / totalExpense) * 100,
      (expensePerType.Entertainment / totalExpense) * 100,
      (expensePerType.Remittance / totalExpense) * 100,
      (expensePerType.Miscellaneous / totalExpense) * 100,
    ];
    let roundOfPercentage = newPercentage.map((num) => num.toFixed(2));
    setExpenseTypePercentage(roundOfPercentage);
  }, [expensePerType, totalExpense]);

  let [smallRecentPaymentsList, setSmallRecentPaymentList] = useState(() => {
    const saved = localStorage.getItem("smallRecentPaymentsList");
    return saved
      ? JSON.parse(saved)
      : {
          Clothes: [{}, {}, {}],
          EMI: [{}, {}, {}],
          Food: [{}, {}, {}],
          Rent: [{}, {}, {}],
          Entertainment: [{}, {}, {}],
          Remittance: [{}, {}, {}],
          Miscellaneous: [{}, {}, {}],
        };
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

  let [incomeDetails, setIncomeDetails] = useState(() => {
    const saved = localStorage.getItem("incomeDetails");
    return saved ? JSON.parse(saved) : [];
  });

  let [expenseDetails, setExpenseDetails] = useState(() => {
    const saved = localStorage.getItem("expenseDetails");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("incomeDetails", JSON.stringify(incomeDetails));
  }, [incomeDetails]);

  useEffect(() => {
    localStorage.setItem("expenseDetails", JSON.stringify(expenseDetails));
  }, [expenseDetails]);

  useEffect(() => {
    localStorage.setItem("expensePerType", JSON.stringify(expensePerType));
  }, [expensePerType]);

  useEffect(() => {
    localStorage.setItem("totalExpense", JSON.stringify(totalExpense));
  }, [totalExpense]);

  useEffect(() => {
    localStorage.setItem(
      "smallRecentPaymentsList",
      JSON.stringify(smallRecentPaymentsList)
    );
  }, [smallRecentPaymentsList]);

  function clearLocalStorage() {
    localStorage.clear();
    window.location.reload();
  }

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
        totalExpense,
        setTotalExpense,
        clearLocalStorage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
