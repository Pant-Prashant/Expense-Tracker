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
  const { expensePerType, expenseTypePercentage, smallRecentPaymentsList } =
    useContext(DataContext);

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
              <span>{expenseTypePercentage[0]}%</span>
            </div>

            <div className={styles["display-expense"]}>
              <DisplayExpense
                type="Clothes"
                amount={expensePerType.Clothes}
                percentage={expenseTypePercentage[0]}
                paymentList={smallRecentPaymentsList.Clothes}
              />
            </div>
          </li>

          <li>
            <div className={styles["list-div"]}>
              <FaHouseChimney
                size={25}
                style={{ marginRight: "2.5px", marginLeft: "2.5px" }}
              />{" "}
              <span>Rent</span> <span>{expenseTypePercentage[3]}%</span>
            </div>
            <div className={styles["display-expense"]}>
              <DisplayExpense
                type="Rent"
                amount={expensePerType.Rent}
                percentage={expenseTypePercentage[3]}
                paymentList={smallRecentPaymentsList.Rent}
              />
            </div>
          </li>
          <li>
            <div className={styles["list-div"]}>
              <FaPerson size={30} /> <span>Remittance</span>{" "}
              <span>{expenseTypePercentage[5]}%</span>
            </div>
            <div className={styles["display-expense"]}>
              <DisplayExpense
                type="Remittance"
                amount={expensePerType.Remittance}
                percentage={expenseTypePercentage[5]}
                paymentList={smallRecentPaymentsList.Remittance}
              />
            </div>
          </li>
          <li>
            <div className={styles["list-div"]}>
              <CiCreditCard1 size={30} /> <span>EMI</span>{" "}
              <span>{expenseTypePercentage[1]}%</span>
            </div>
            <div className={styles["display-expense"]}>
              <DisplayExpense
                type="EMI"
                amount={expensePerType.EMI}
                percentage={expenseTypePercentage[1]}
                paymentList={smallRecentPaymentsList.EMI}
              />
            </div>
          </li>
          <li>
            <div className={styles["list-div"]}>
              <IoFastFoodOutline size={30} /> <span>Food</span>{" "}
              <span>{expenseTypePercentage[2]}%</span>
            </div>
            <div className={styles["display-expense"]}>
              <DisplayExpense
                type="Food"
                amount={expensePerType.Food}
                percentage={expenseTypePercentage[2]}
                paymentList={smallRecentPaymentsList.Food}
              />
            </div>
          </li>
          <li>
            <div className={styles["list-div"]}>
              <CgSmileMouthOpen size={30} /> <span>Entertainment</span>
              <span>{expenseTypePercentage[4]}%</span>
            </div>
            <div className={styles["display-expense"]}>
              <DisplayExpense
                type="Entertainment"
                amount={expensePerType.Entertainment}
                percentage={expenseTypePercentage[4]}
                paymentList={smallRecentPaymentsList.Entertainment}
              />
            </div>
          </li>
          <li>
            <div className={styles["list-div"]}>
              <MdOutlineStarPurple500 size={30} /> <span>Miscellaneous</span>
              <span>{expenseTypePercentage[6]}%</span>
            </div>
            <div className={styles["display-expense"]}>
              <DisplayExpense
                type="Miscellaneous"
                amount={expensePerType.Miscellaneous}
                percentage={expenseTypePercentage[6]}
                paymentList={smallRecentPaymentsList.Miscellaneous}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Expense;
