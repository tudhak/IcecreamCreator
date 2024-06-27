import "./index.css";
import Header from "./components/Header";
import Options from "./components/Options";

function App() {
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <Header />
      <Options />
    </div>
  );
}

export default App;
