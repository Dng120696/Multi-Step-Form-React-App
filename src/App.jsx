import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonalInfo from "./pages/PersonalInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import { FormProvider } from "./context/MultiFormContext";

function App() {
  return (
    <BrowserRouter>
      <FormProvider>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<PersonalInfo />} />
            <Route path="select_plan" element={<SelectPlan />} />
            <Route path="add_ons" element={<AddOns />} />
            <Route path="summary" element={<Summary />} />
          </Route>
        </Routes>
      </FormProvider>
    </BrowserRouter>
  );
}

export default App;
