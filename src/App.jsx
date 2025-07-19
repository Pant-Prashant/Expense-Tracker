import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Income from "./components/Income";
import Expense from "./components/Expense";
import Footer from "./components/Footer";
import { DataProvider } from "./store/ExpenseTrackerStore";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className="div1">
        <Header></Header>
        <div className="div2">
          <Dashboard></Dashboard>
          <div className="div3">
            <Income></Income>
            <Expense></Expense>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </DataProvider>
  );
}

export default App;
