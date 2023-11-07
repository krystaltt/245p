// CSS and other resources
import logo from "./logo.svg";
import "./App.css";
import "./Header.css";
import "./Footer.css";
import "./SideBar.css";

// Components
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <SideBar />
    </div>
  );
}

export default App;
