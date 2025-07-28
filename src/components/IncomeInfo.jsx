import { FaGooglePay } from "react-icons/fa";
import { SiPaytm, SiAmazonpay } from "react-icons/si";
import { RiPaypalFill } from "react-icons/ri";
import { BsCashStack } from "react-icons/bs";
import styles from "./IncomeInfo.module.css";

function IncomeInfo({ name, method, amount, currentDate }) {
  let incomeMethod = method;
  let incomeName = name;
  let incomeAmount = amount;
  let date = currentDate;
  return (
    <li>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {incomeMethod == "Google Pay" && (
            <FaGooglePay size={35}></FaGooglePay>
          )}
          {incomeMethod == "Paytm" && <SiPaytm size={35}></SiPaytm>}
          {incomeMethod == "PayPal" && <RiPaypalFill size={30}></RiPaypalFill>}
          {incomeMethod == "Amazon Pay" && (
            <SiAmazonpay size={32}></SiAmazonpay>
          )}
          {incomeMethod == "Cash" && <BsCashStack size={30}></BsCashStack>}
          <span style={{ textAlign: "left", marginLeft: "8px" }}>
            {incomeName}
            <p className={styles["date"]}>{date}</p>
          </span>
        </div>

        <span style={{ alignContent: "center", color: "#36d636" }}>
          {" "}
          + {incomeAmount}Rs.
        </span>
      </div>
    </li>
  );
}

export default IncomeInfo;
