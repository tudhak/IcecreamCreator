import { Label, Select } from "flowbite-react";

export default function Flavor({ index, features, onFlavorChange }) {
  return (
    <div className="flex justify-center items-center gap-10 mb-5">
      <Label className="w-24 cookie-regular text-2xl text-center">
        Flavor {index + 1}
      </Label>
      <Select
        className="w-40"
        value={features.flavors[index]}
        onChange={(e) => onFlavorChange(e.target.value, index)}
      >
        <option>Chocolate</option>
        <option>Vanilla</option>
        <option>Mango</option>
        <option>Cherry</option>
        <option>Stracciatella</option>
        <option>Lemon</option>
        <option>Peppermint</option>
        <option>Raspberry</option>
        <option>Bubblegum</option>
        <option>Nocciola</option>
        <option>Pistachio</option>
        <option>Banana</option>
        <option>Matcha</option>
        <option>Carrot</option>
        <option>Blue Moon</option>
      </Select>
    </div>
  );
}
