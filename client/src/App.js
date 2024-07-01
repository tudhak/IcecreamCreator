import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Options from "./components/Options";
import Preview from "./components/Preview";
import PageContainer from "./components/PageContainer";

function App() {
  const [container, setContainer] = useState("Tub");
  const [scoops, setScoops] = useState(1);
  const [flavors, setFlavors] = useState(["Chocolate"]);
  const [topping, setTopping] = useState("Caramel");

  return (
    <PageContainer>
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
    </PageContainer>
  );
}

export default App;
