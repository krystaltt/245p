import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
import Header from "./Header";
import Sidebar from "./Sidebar";
import LandingView from "./LandingView";
import Scottie from "./Scottie";
import Westie from "./Westie";
import Norwich from "./Norwich";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="sidebar_content">
          <Sidebar />
          <Routes>
            <Route index element={<LandingView />} />
            <Route path="scottie" element={<Scottie />}></Route>
            <Route path="westie" element={<Westie />}></Route>
            <Route path="norwich" element={<Norwich />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
