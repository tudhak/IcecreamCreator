export default function ChocolateChips({ features }) {
  return (
    <div>
      {features.topping === "Chocolate chips" && features.scoops === 1 && (
        <>
          <div
            className={`w-3 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-8" : "-top-4"
            } z-50 center-chip rotate-45`}
          ></div>
          <div
            className={`w-3 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-14" : "-top-10"
            } left-chip-1 z-50 rotate-45`}
          ></div>
          <div
            className={`w-4 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-10" : "-top-6"
            } left-chip-2 z-50 rotate-45`}
          ></div>
          <div
            className={`w-3 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-12" : "-top-8"
            } right-chip-1 z-50 -rotate-45`}
          ></div>
          <div
            className={`w-4 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-8" : "-top-4"
            } right-chip-2 z-50 -rotate-45`}
          ></div>
        </>
      )}
      {features.topping === "Chocolate chips" && features.scoops === 2 && (
        <>
          <div
            className={`w-4 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-14" : "-top-4"
            } z-50 center-chip -rotate-45`}
          ></div>
          <div
            className={`w-3 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-6" : "-top-10"
            } left-chip-1 z-50 rotate-45`}
          ></div>
          <div
            className={`w-3 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-14" : "-top-6"
            } left-chip-2 z-50 rotate-45`}
          ></div>
          <div
            className={`w-4 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-10" : "-top-6"
            } left-chip-3 z-50 rotate-45`}
          ></div>
          <div
            className={`w-3 h-1 bg-yellow-950 absolute -top-6
             right-chip-3 z-50 -rotate-45`}
          ></div>
          <div
            className={`w-4 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-12" : "-top-10"
            } right-chip-2 z-50 -rotate-45`}
          ></div>
        </>
      )}
      {features.topping === "Chocolate chips" && features.scoops === 3 && (
        <>
          <div
            className={`w-4 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-14" : "-top-4"
            } z-50 center-chip -rotate-45`}
          ></div>
          <div
            className={`w-4 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-6" : "-top-8 hidden"
            } left-chip-1 z-50 rotate-45`}
          ></div>
          <div
            className={`w-3 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-14" : "-top-8"
            } left-chip-2 z-50 rotate-45`}
          ></div>
          <div
            className={`w-4 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-10" : "-top-6"
            } left-chip-3 z-50 rotate-45`}
          ></div>
          <div
            className={`w-4 h-1 bg-yellow-950 absolute -top-6
             right-chip-3 z-50 -rotate-45`}
          ></div>
          <div
            className={`w-3 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-12" : "-top-8"
            } right-chip-2 z-50 -rotate-45`}
          ></div>
          <div
            className={`w-4 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-24" : "-top-16"
            }
             center-chip z-50 -rotate-45`}
          ></div>
          <div
            className={`w-3 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-20" : "-top-14"
            } right-chip-2 z-50 -rotate-45`}
          ></div>
          <div
            className={`w-4 h-1 bg-yellow-950 absolute ${
              features.container === "Cone" ? "-top-20" : "-top-14"
            } left-chip-2 z-50 rotate-45`}
          ></div>
        </>
      )}
    </div>
  );
}
