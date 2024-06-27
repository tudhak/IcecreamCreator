export default function Flavor({ index, flavors, handleFlavors }) {
  return (
    <div className="flex justify-center items-center gap-10 mb-5">
      <label className="w-24 cookie-regular text-2xl text-center">
        Flavor {index + 1}
      </label>
      <select
        className="border border-black w-40"
        value={flavors}
        onChange={(e) => handleFlavors(e.target.value, index)}
      >
        <option>Chocolate</option>
        <option>Vanilla</option>
        <option>Mango</option>
        <option>Cherry</option>
        <option>Stracciatella</option>
        <option>Lemon</option>
        <option>Amarena</option>
        <option>Raspberry</option>
        <option>Bubblegum</option>
        <option>Nocciola</option>
        <option>Pistachio</option>
        <option>Banana</option>
      </select>
    </div>
  );
}
