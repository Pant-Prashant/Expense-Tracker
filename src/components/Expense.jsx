import { GiClothes } from "react-icons/gi";

import styles from "./Expense.module.css";

function Expense() {
  return (
    <div className="expense-div container-cover">
      <div className={`${styles["box"]} container`}>
        <h3 style={{ color: "#0d6efd", fontWeight: "650" }}>Expense</h3>
        <ul type="none" className={styles["list"]}>
          <li>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <GiClothes size={30} />{" "}
              <span>
                Clothes <div></div>
              </span>{" "}
              <span>80%</span>
            </div>
          </li>
          <li>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <GiClothes size={30} />{" "}
              <span>
                Clothes <div></div>
              </span>{" "}
              <span>80%</span>
            </div>
          </li>
          <li>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <GiClothes size={30} />{" "}
              <span>
                Clothes <div></div>
              </span>{" "}
              <span>80%</span>
            </div>
          </li>
          <li>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <GiClothes size={30} />{" "}
              <span>
                Clothes <div></div>
              </span>{" "}
              <span>80%</span>
            </div>
          </li>
          <li>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <GiClothes size={30} />{" "}
              <span>
                Clothes <div></div>
              </span>{" "}
              <span>80%</span>
            </div>
          </li>
          <li>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <GiClothes size={30} />{" "}
              <span>
                Clothes <div></div>
              </span>{" "}
              <span>80%</span>
            </div>
          </li>
          <li>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <GiClothes size={30} />{" "}
              <span>
                Clothes <div></div>
              </span>{" "}
              <span>80%</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Expense;
