import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderFooterLayout from "./layouts/HeaderFooterLayout/HeaderFooterLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage.js/HomePage";
import Layout from "./layouts/Layout/Layout";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import AddNewRide from "./components/AddNewRide/AddNewRide";
import PendingRidesPage from "./pages/PendingRidesPage/PendingRidesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {
            <HeaderFooterLayout>
                <HomePage />
            </HeaderFooterLayout>
          } 
        />
        <Route path="/login" element={
            <HeaderFooterLayout>
              <LoginPage/>
            </HeaderFooterLayout>
          } 
        />
        <Route path="/dashboard" element= {
            <DashboardLayout>
                <DashboardPage />
            </DashboardLayout>
          } 
        />
        <Route path="/dashboard/rides" element= {
            <DashboardLayout>
                <PendingRidesPage />
            </DashboardLayout>
          } 
        />
        <Route path="/test" element= {
            <Layout>
              <AddNewRide />
            </Layout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
