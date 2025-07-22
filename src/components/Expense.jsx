import { GiClothes } from "react-icons/gi";
import { FaHouseChimney, FaPerson } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { CgSmileMouthOpen } from "react-icons/cg";
import { CiCreditCard1 } from "react-icons/ci";
import DisplayExpense from "./DisplayExpense";
import styles from "./Expense.module.css";

function Expense() {
  return (
    <div className="expense-div container-cover">
      <div className={`${styles["box"]} container`}>
        <h3 style={{ color: "#0d6efd", fontWeight: "650" }}>Expense</h3>
        <ul type="none" className={styles["list"]}>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <GiClothes size={30} />{" "}
              <span>
                Clothes <div></div>
              </span>{" "}
              <span>80%</span>
            </div>
          </li>
          <li>
            {" "}
            <DisplayExpense />{" "}
          </li>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FaHouseChimney
                size={25}
                style={{ marginRight: "2.5px", marginLeft: "2.5px" }}
              />{" "}
              <span>Rent</span> <span>80%</span>
            </div>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FaPerson size={30} /> <span>Remittance</span> <span>80%</span>
            </div>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CiCreditCard1 size={30} /> <span>EMI</span> <span>80%</span>
            </div>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IoFastFoodOutline size={30} /> <span>Food</span> <span>80%</span>
            </div>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CgSmileMouthOpen size={30} /> <span>Entertainment</span>
              <span>80%</span>
            </div>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <MdOutlineStarPurple500 size={30} /> <span>Miscellaneous</span>
              <span>80%</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Expense;
