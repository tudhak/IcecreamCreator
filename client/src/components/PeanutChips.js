export default function PeanutChips({ features }) {
  return (
    <div>
      {features.topping === "Peanut chips" && features.scoops === 1 && (
        <>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-8" : "-top-4"
            } z-50 center-chip`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-14" : "-top-10"
            } left-chip-1 z-50`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-10" : "-top-6"
            } left-chip-2 z-50`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-12" : "-top-8"
            } right-chip-1 z-50`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-8" : "-top-4"
            } right-chip-2 z-50`}
          ></div>
        </>
      )}
      {features.topping === "Peanut chips" && features.scoops === 2 && (
        <>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-14" : "-top-4"
            } z-50 center-chip`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-6" : "-top-10"
            } left-chip-1 z-50`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-14" : "-top-6"
            } left-chip-2 z-50`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-10" : "-top-4"
            } left-chip-3 z-50`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full -top-4
             right-chip-3 z-50`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-12" : "-top-8"
            } right-chip-2 z-50`}
          ></div>
        </>
      )}
      {features.topping === "Peanut chips" && features.scoops === 3 && (
        <>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-14" : "-top-4"
            } z-50 center-chip -rotate-45`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-6" : "-top-8 hidden"
            } left-chip-1 z-50 rotate-45`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-14" : "-top-8"
            } left-chip-2 z-50 rotate-45`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-8" : "-top-4"
            } left-chip-3 z-50 rotate-45`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-6" : "-top-4"
            }
             right-chip-3 z-50 -rotate-45`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-10" : "-top-8"
            } right-chip-2 z-50 -rotate-45`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-24" : "-top-16"
            }
             center-chip z-50 -rotate-45`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-16" : "-top-14"
            } right-chip-1 z-50 -rotate-45`}
          ></div>
          <div
            className={`w-2 h-2 bg-yellow-500 absolute rounded-full ${
              features.container === "Cone" ? "-top-20" : "-top-14"
            } left-chip-2 z-50 rotate-45`}
          ></div>
        </>
      )}
    </div>
  );
}
