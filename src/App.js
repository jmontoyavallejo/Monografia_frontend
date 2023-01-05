import Abstract from "./components/Abstract"
import NavBar from "./components/NavBar"
import FormContainer from "./components/FormContainer"
import Predict from "./components/Predict"
import SocialLinks from "./components/SocialLinks"
function App() {
  return (
    <div className="App">
    <NavBar />
    <Abstract/>
    <Predict/>
    <FormContainer/>
    
    <SocialLinks/>
    </div>
  );
}

export default App;
