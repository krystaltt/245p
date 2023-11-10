import LoginForm from "./LoginForm";
import "./App.css";

function App() {
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear(); // clearing previous console logs
    console.log(json); // showing what we actually submitted thru the form
  };

  // render method
  return (
    <div className="App">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
