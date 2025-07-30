import { useContext } from "react";
import { DataContext } from "../store/ExpenseTrackerStore";

function Footer() {
  let { clearLocalStorage } = useContext(DataContext);
  return (
    <div class="footer-div">
      <hr />
      <p>
        © 2025 Company, Inc{" "}
        <button
          style={{
            border: "none",
            background: "rgba(255, 255, 255, 0)",
            color: "white",
            marginTop: "7px",
            fontSize: "15px",
          }}
          onClick={clearLocalStorage}
        >
          Clear Data
        </button>
      </p>
    </div>
  );
}

export default Footer;
