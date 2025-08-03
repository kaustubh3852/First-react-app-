import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMssg from "./components/ErrorMssg";
import FoodItems from "./components/FoodItems";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Green Vegitables", "Roti", "Salad", "Milk", "Ghee"];


 
  return (
    <>
      <h1>Healthy Foods</h1>
     <ErrorMssg></ErrorMssg>
     <FoodItems></FoodItems>
     
    </>
  );
}

export default App;
