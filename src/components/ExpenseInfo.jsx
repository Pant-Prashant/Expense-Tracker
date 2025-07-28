import { GiClothes } from "react-icons/gi";
import { FaGooglePay } from "react-icons/fa";
import { FaHouseChimney, FaPerson } from "react-icons/fa6";
import { SiPaytm, SiAmazonpay } from "react-icons/si";
import { RiPaypalFill } from "react-icons/ri";
import { BsCashStack } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CgSmileMouthOpen } from "react-icons/cg";
import styles from "./ExpenseInfo.module.css";

function ExpenseInfo({ name, amount, type, method, currentDate }) {
  let date = currentDate;
  let expenseAmount = amount;
  let expenseName = name;
  let expenseType = type;
  let paymentMethod = method;
  return (
    <li>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          {paymentMethod == "Google Pay" && (
            <FaGooglePay size={35}></FaGooglePay>
          )}
          {paymentMethod == "Paytm" && <SiPaytm size={35}></SiPaytm>}
          {paymentMethod == "PayPal" && <RiPaypalFill size={30}></RiPaypalFill>}
          {paymentMethod == "Amazon Pay" && (
            <SiAmazonpay size={32}></SiAmazonpay>
          )}
          {paymentMethod == "Cash" && (
            <BsCashStack
              size={25}
              style={{ marginRight: "5px", marginLeft: "5px" }}
            ></BsCashStack>
          )}
          <span
            style={{ textAlign: "left", marginLeft: "8px", fontSize: "18px" }}
          >
            {expenseName}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "15px", textAlign: "right" }}>
            <div style={{ alignItems: "start" }}>
              {expenseType == "Clothes" && (
                <GiClothes style={{ marginBottom: "2px" }} />
              )}
              {expenseType == "EMI" && (
                <CiCreditCard1 style={{ marginBottom: "2px" }} />
              )}
              {expenseType == "Rent" && (
                <FaHouseChimney style={{ paddingBottom: "4px" }} />
              )}
              {expenseType == "Entertainment" && (
                <CgSmileMouthOpen style={{ marginBottom: "3px" }} />
              )}
              {expenseType == "Food" && (
                <IoFastFoodOutline style={{ marginBottom: "6px" }} />
              )}
              {expenseType == "Remittance" && (
                <FaPerson style={{ marginBottom: "4px" }} />
              )}
              {expenseType == "Miscellaneous" && (
                <MdOutlineStarPurple500 style={{ marginBottom: "2px" }} />
              )}

              <span style={{ marginLeft: "3px" }}>{expenseType}</span>
            </div>
            <span style={{ alignContent: "center", color: "red" }}>
              {" "}
              - {expenseAmount}Rs.
            </span>
          </span>

          <p className={styles["date"]}>{date}</p>
        </div>
      </div>
    </li>
  );
}

export default ExpenseInfo;
