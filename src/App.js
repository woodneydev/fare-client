import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderFooterLayout from "./layouts/HeaderFooterLayout/HeaderFooterLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage.js/HomePage";
import Layout from "./layouts/Layout/Layout";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
