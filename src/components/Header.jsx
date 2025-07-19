import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <div className="header-div">
      <div>
        <h2 style={{ margin: "0px" }}>Expense Tracker</h2>
      </div>
      <div style={{ display: "flex" }}>
        <p
          style={{
            textAlign: "right",
            fontSize: "12px",
            margin: "8px",
          }}
        >
          User Name <br />
          Discription of User
        </p>
        <CgProfile size={50} />
      </div>
    </div>
  );
}

export default Header;
