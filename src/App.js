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
import EditRidePage from "./pages/EditRidePage/EditRidePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import DriverDashBoardPage from "./pages/DriverDashboardPage/DriverDashboardPage";
import DriverLayout from "./layouts/DriverLayout/DriverLayout";
import LogoutPrompt from "./components/LogoutPrompt/LogoutPrompt";
import Overlay from "./components/Overlay/Overlay";

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
        <Route path="/signup" element={
            <HeaderFooterLayout>
              <SignUpPage />
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
        <Route path="/dashboard/driver" element= {
            <DriverLayout>
                <DriverDashBoardPage />
            </DriverLayout>
          } 
        />
        <Route path="/dashboard/edit/:ride_id" element= {
            <DashboardLayout>
                <EditRidePage />
            </DashboardLayout>
          } 
        />
        <Route path="/test" element= {
            <Layout>
              <Overlay />
            </Layout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
