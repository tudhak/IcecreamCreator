export default function ChocolateChips({ features }) {
  return (
    <div>
      {features.topping === "Chocolate chips" && features.scoops === 1 && (
        <>
          <div
            className={`w-5 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-8" : "-top-4"
            } z-50 center-chip rotate-45`}
          ></div>
          <div
            className={`w-5 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-14" : "-top-10"
            } left-chip-1 z-50 rotate-45`}
          ></div>
          <div
            className={`w-5 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-10" : "-top-6"
            } left-chip-2 z-50 rotate-45`}
          ></div>
          <div
            className={`w-5 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-12" : "-top-8"
            } right-chip-1 z-50 -rotate-45`}
          ></div>
          <div
            className={`w-5 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-8" : "-top-4"
            } right-chip-2 z-50 -rotate-45`}
          ></div>
        </>
      )}
    </div>
  );
}
