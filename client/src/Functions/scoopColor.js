export default function scoopColor(scoopNumber, flavors) {
  switch (flavors[scoopNumber - 1]) {
    case "Chocolate":
      return "bg-yellow-950";
    case "Vanilla":
      return "bg-yellow-200";
    case "Mango":
      return "bg-yellow-500";
    case "Cherry":
      return "bg-rose-950";
    case "Stracciatella":
      return "bg-neutral-200";
    case "Lemon":
      return "bg-yellow-300";
    case "Peppermint":
      return "bg-green-600";
    case "Raspberry":
      return "bg-pink-900";
    case "Bubblegum":
      return "bg-pink-300";
    case "Nocciola":
      return "bg-amber-900";
    case "Pistachio":
      return "bg-lime-900";
    case "Banana":
      return "bg-amber-200";
    default:
      return "bg-slate-500";
  }
}
