import { GiClothes } from "react-icons/gi";
import { FaHouseChimney, FaPerson } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { CgSmileMouthOpen } from "react-icons/cg";
import { CiCreditCard1 } from "react-icons/ci";
import DisplayExpense from "./DisplayExpense";
import styles from "./Expense.module.css";
import { DataContext } from "../store/ExpenseTrackerStore";
import { useContext } from "react";

function Expense() {
  const { expensePerType, expenseTypePercentage } = useContext(DataContext);
  console.log(expenseTypePercentage);

  return (
    <div className="expense-div container-cover">
      <div className={`${styles["box"]} container`}>
        <h3 style={{ color: "#0d6efd", fontWeight: "650" }}>Expense</h3>
        <ul type="none" className={styles["list"]}>
          <li>
            <div className={styles["list-div"]}>
              <GiClothes size={30} />{" "}
              <span>
                Clothes <div></div>
              </span>{" "}
              <span>80%</span>
            </div>

            <div className={styles["display-expense"]}>
              <DisplayExpense type="Clothes" amount={expensePerType.Clothes} />
            </div>
          </li>

          <li>
            <div className={styles["list-div"]}>
              <FaHouseChimney
                size={25}
                style={{ marginRight: "2.5px", marginLeft: "2.5px" }}
              />{" "}
              <span>Rent</span> <span>80%</span>
            </div>
            <div className={styles["display-expense"]}>
              <DisplayExpense type="Rent" amount={expensePerType.Rent} />
            </div>
          </li>
          <li>
            <div className={styles["list-div"]}>
              <FaPerson size={30} /> <span>Remittance</span> <span>80%</span>
            </div>
            <div className={styles["display-expense"]}>
              <DisplayExpense
                type="Remittance"
                amount={expensePerType.Remittance}
              />
            </div>
          </li>
          <li>
            <div className={styles["list-div"]}>
              <CiCreditCard1 size={30} /> <span>EMI</span> <span>80%</span>
            </div>
            <div className={styles["display-expense"]}>
              <DisplayExpense type="EMI" amount={expensePerType.EMI} />
            </div>
          </li>
          <li>
            <div className={styles["list-div"]}>
              <IoFastFoodOutline size={30} /> <span>Food</span> <span>80%</span>
            </div>
            <div className={styles["display-expense"]}>
              <DisplayExpense type="Food" amount={expensePerType.Food} />
            </div>
          </li>
          <li>
            <div className={styles["list-div"]}>
              <CgSmileMouthOpen size={30} /> <span>Entertainment</span>
              <span>80%</span>
            </div>
            <div className={styles["display-expense"]}>
              <DisplayExpense
                type="Entertainment"
                amount={expensePerType.Entertainment}
              />
            </div>
          </li>
          <li>
            <div className={styles["list-div"]}>
              <MdOutlineStarPurple500 size={30} /> <span>Miscellaneous</span>
              <span>80%</span>
            </div>
            <div className={styles["display-expense"]}>
              <DisplayExpense
                type="Miscellaneous"
                amount={expensePerType.Miscellaneous}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Expense;
