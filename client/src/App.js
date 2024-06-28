import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Options from "./components/Options";
import Preview from "./components/Preview";

function App() {
  const [container, setContainer] = useState("Tub");
  const [scoops, setScoops] = useState(1);
  const [flavors, setFlavors] = useState(["Chocolate"]);
  const [topping, setTopping] = useState("Caramel");

  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <Header />
      <Options
        container={container}
        setContainer={setContainer}
        scoops={scoops}
        setScoops={setScoops}
        flavors={flavors}
        setFlavors={setFlavors}
        topping={topping}
        setTopping={setTopping}
      />
      <Preview
        container={container}
        scoops={scoops}
        flavors={flavors}
        topping={topping}
      />
    </div>
  );
}

export default App;
