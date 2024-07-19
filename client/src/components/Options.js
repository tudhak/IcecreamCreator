import { useEffect } from "react";
import Flavor from "./Flavor";

export default function Options({ features, setFeatures }) {
  function handleFlavorChange(flavor, index) {
    let newFlavors = [...features.flavors];
    newFlavors[index] = flavor;
    setFeatures({ ...features, flavors: newFlavors });
  }

  // The idea is to make the flavors state variable (an array) the same length as the number of scoops
  // The effect is triggered as soon as we update the scoops variable
  // A shallow copy of the flavors array is created, its length is set to the scoops state
  // If we increase the number of scoops, the array is populated with empty elements
  // The findLastIndex method will find the last truthy value in the array and we fill empty values with the starting value "Chocolate"
  useEffect(() => {
    let newFlavors = [...features.flavors];
    newFlavors.length = features.scoops;
    const lastTruthyValue = newFlavors.findLastIndex((el) => el);
    newFlavors.fill("Chocolate", lastTruthyValue + 1);
    setFeatures({ ...features, flavors: newFlavors });
  }, [features.scoops, setFeatures]);

  return (
    <div className="bg-white rounded-md shadow-md w-4/5 max-w-2xl p-5">
      <h2 className="text-3xl pacifico-regular text-center mb-10">Options</h2>
      <div className="flex justify-center items-center gap-10 mb-5">
        <label className="w-24 cookie-regular text-2xl text-center">
          Container
        </label>
        <select
          className="border border-black w-40"
          value={features.container}
          onChange={(e) =>
            setFeatures({ ...features, container: e.target.value })
          }
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
          value={features.scoops}
          onChange={(e) =>
            setFeatures({ ...features, scoops: Number(e.target.value) })
          }
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      {Array.from({ length: features.scoops }, (_, i) => (
        <Flavor
          key={i + 1}
          index={i}
          onFlavorChange={handleFlavorChange}
          features={features}
        />
      ))}
      <div className="flex justify-center items-center gap-10 mb-5">
        <label className="w-24 cookie-regular text-2xl text-center">
          Topping
        </label>
        <select
          className="border border-black w-40"
          value={features.topping}
          onChange={(e) =>
            setFeatures({ ...features, topping: e.target.value })
          }
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
