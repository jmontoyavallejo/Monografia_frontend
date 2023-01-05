import Abstract from "./components/Abstract"
import NavBar from "./components/NavBar"
import FormContainer from "./components/FormContainer"
import Predict from "./components/Predict"
function App() {
  return (
    <div className="App">
    <NavBar />
    <Abstract/>
    <Predict/>
    <FormContainer/>
    </div>
  );
}

export default App;
