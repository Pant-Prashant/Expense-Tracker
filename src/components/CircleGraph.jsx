const CircleGraph = ({ percentage, expenseType }) => {
  return (
    <div
      style={{
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        background: `conic-gradient(rgb(13, 110, 253) ${percentage}%, #eee ${percentage}% 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "5px auto",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        marginBottom: "0px",
      }}
    >
      <div
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          border: "0.5px solid rgba(0, 0, 0, 0.39)",
        }}
      >
        {percentage}% spent on {expenseType}!
      </div>
    </div>
  );
};

export default CircleGraph;
