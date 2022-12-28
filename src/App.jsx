import "./App.css";
import FormNav from "./components/FormNav";
import { Routes, Route, Outlet } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import Plans from "./components/Plans";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import ThankYou from "./components/ThankYou";

const SharedLayout = () => {
  return (
    <div className="App flex w-full h-screen bg-[url('/images/bg-sidebar-mobile.svg')] md:bg-none bg-no-repeat">
      <div className="form-container flex md:justify-between flex-col md:flex-row md:bg-white w-full max-w-3xl h-full md:h-3/4 m-auto md:rounded-xl md:p-3.5">
        <FormNav />
        <div className="forms md:w-2/3 h-full md:px-12 md:py-6 flex flex-col justify-between gap-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<PersonalInfo />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/add-ons" element={<AddOns />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Route>
    </Routes>
  );
}

export default App;
