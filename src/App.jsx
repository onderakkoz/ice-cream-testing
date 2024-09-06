import Form from "./components/Form"
import Scoops from "./components/Scoops"
import Toppings from "./components/Toppings"

const App = () => {
  return (
    <div className="bg-black d-flex flex-column gap-5 px-lg-5 px-3 py-5 bg-dark min-vh-100 text-white ">
      <Scoops/>
      <Toppings/>
      <Form/>
    </div>
  );
};

export default App;
