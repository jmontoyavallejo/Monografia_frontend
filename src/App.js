import Abstract from "./components/Abstract"
import NavBar from "./components/NavBar"
import FormContainer2 from "./components/FormContainer2"
import Predict from "./components/Predict"
function App() {
  return (
    <div className="App">
    <NavBar />
    <Abstract/>
    <Predict/>
   
    <FormContainer2/>
    </div>
  );
}

export default App;
