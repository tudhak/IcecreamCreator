import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Options from "./components/Options";
import Preview from "./components/Preview";
import PageContainer from "./components/PageContainer";

function App() {
  const initialFeatures = {
    container: "Tub",
    scoops: 1,
    flavors: ["Chocolate"],
    topping: "Caramel",
  };

  const [features, setFeatures] = useState(initialFeatures);

  return (
    <PageContainer>
      <Header />
      <Options features={features} setFeatures={setFeatures} />
      <Preview features={features} />
    </PageContainer>
  );
}

export default App;
