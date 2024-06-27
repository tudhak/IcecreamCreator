import "./index.css";
import Header from "./components/Header";
import Options from "./components/Options";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <Header />
      <Options />
      <Preview />
    </div>
  );
}

export default App;
