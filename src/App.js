import Abstract from "./components/Abstract"
import SocialLinks from "./components/SocialLinks"
import Header from "./components/Header"
import { Form } from "./components/Form"

function App() {
  return (
    <div className="App">
    <Header />
    <Form />
    <Abstract/>
    <SocialLinks/>
    </div>
  );
}

export default App;
