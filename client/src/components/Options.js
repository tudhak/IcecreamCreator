import Flavor from "./Flavor";

import { Label, Select } from "flowbite-react";

export default function Options({ features, setFeatures }) {
  function handleFlavorChange(flavor, index) {
    let newFlavors = [...features.flavors];
    newFlavors[index] = flavor;
    setFeatures({ ...features, flavors: newFlavors });
  }

  // The idea is to make the flavors state variable (an array) the same length as the number of scoops
  // A shallow copy of the flavors array is created, its length is set to the scoops state
  // If we increase the number of scoops, the array is populated with empty elements
  // The findLastIndex method will find the last truthy value in the array and we fill empty values with the starting value "Chocolate"
  // Updating both flavors and scoops when updating the scoops instead of a useEffect (better practice)

  function updateScoopsAndFlavors(numberOfScoops) {
    let newFlavors = [...features.flavors];
    newFlavors.length = numberOfScoops;
    const lastTruthyValue = newFlavors.findLastIndex((el) => el);
    newFlavors.fill("Chocolate", lastTruthyValue + 1);
    setFeatures({ ...features, flavors: newFlavors, scoops: numberOfScoops });
  }

  return (
    <div className="bg-white rounded-md shadow-md w-4/5 max-w-2xl p-5">
      <h2 className="text-3xl pacifico-regular text-center mb-10">Options</h2>
      <div className="flex justify-center items-center gap-10 mb-5">
        <Label
          className="w-24 cookie-regular text-2xl text-center"
          value="Container"
        />
        <Select
          className="w-40"
          value={features.container}
          onChange={(e) =>
            setFeatures({ ...features, container: e.target.value })
          }
        >
          <option>Tub</option>
          <option>Cone</option>
        </Select>
      </div>
      <div className="flex justify-center items-center gap-10 mb-5">
        <Label
          className="w-24 cookie-regular text-2xl text-center"
          value="Scoops"
        />
        <Select
          className="w-40"
          value={features.scoops}
          onChange={(e) => updateScoopsAndFlavors(Number(e.target.value))}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Select>
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
        <Label className="w-24 cookie-regular text-2xl text-center">
          Topping
        </Label>
        <Select
          className="w-40"
          value={features.topping}
          onChange={(e) =>
            setFeatures({ ...features, topping: e.target.value })
          }
        >
          <option>Caramel</option>
          <option>Strawberry sauce</option>
          <option>Chocolate chips</option>
          <option>Peanut chips</option>
        </Select>
      </div>
    </div>
  );
}
