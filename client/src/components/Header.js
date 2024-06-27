import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIceCream } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="flex justify-center items-center gap-6 mb-10">
      <h1 className="pacifico-regular text-6xl text-pink-600">
        Icecream Creator
      </h1>
      <FontAwesomeIcon icon={faIceCream} className="text-6xl text-pink-600" />
    </div>
  );
}
