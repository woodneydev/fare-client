import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderFooterLayout from "./layouts/HeaderFooterLayout/HeaderFooterLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage.js/HomePage";
import Layout from "./layouts/Layout/Layout";

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
            <Layout>
              <LoginPage/>
            </Layout>
            
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
