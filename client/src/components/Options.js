import { useState } from "react";
import Flavor from "./Flavor";

export default function Options() {
  const [container, setContainer] = useState("Tub");
  const [scoops, setScoops] = useState(1);
  const [flavors, setFlavors] = useState([]);
  const [topping, setTopping] = useState("Caramel");

  function handleFlavors(flavor, index) {
    let newFlavors = [...flavors];
    newFlavors[index] = flavor;
    setFlavors(newFlavors);
  }

  return (
    <div className="bg-white rounded-md shadow-md w-4/5 p-5">
      <h2 className="text-3xl pacifico-regular text-center mb-10">Options</h2>
      <div className="flex justify-center items-center gap-10 mb-5">
        <label className="w-24 cookie-regular text-2xl text-center">
          Container
        </label>
        <select
          className="border border-black w-40"
          value={container}
          onChange={(e) => setContainer(e.target.value)}
        >
          <option>Tub</option>
          <option>Cone</option>
        </select>
      </div>
      <div className="flex justify-center items-center gap-10 mb-5">
        <label className="w-24 cookie-regular text-2xl text-center">
          Scoops
        </label>
        <select
          className="border border-black w-40"
          value={scoops}
          onChange={(e) => setScoops(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      {Array.from({ length: scoops }, (_, ind) => ind + 1).map((e, i) => (
        <Flavor key={i + 1} index={i} handleFlavors={handleFlavors} />
      ))}
      <div className="flex justify-center items-center gap-10 mb-5">
        <label className="w-24 cookie-regular text-2xl text-center">
          Topping
        </label>
        <select
          className="border border-black w-40"
          value={topping}
          onChange={(e) => setTopping(e.target.value)}
        >
          <option>Caramel</option>
          <option>Strawberry sauce</option>
          <option>Chocolate chips</option>
          <option>Peanut chips</option>
        </select>
      </div>
    </div>
  );
}
