export default function StrawberrySauce({ features }) {
  return (
    <div>
      {features.topping === "Strawberry sauce" && features.scoops === 1 && (
        <>
          <div
            className={`z-30 absolute left-chip-1 ${
              features.container === "Cone" ? "-top-12 -rotate-45" : "-top-10"
            } sauce bg-red-700`}
          ></div>
        </>
      )}
      {features.topping === "Strawberry sauce" && features.scoops === 2 && (
        <>
          <div
            className={`z-30 absolute left-chip-2 ${
              features.container === "Cone" ? "-top-16" : "-top-10"
            } sauce -rotate-45 bg-red-700`}
          ></div>
          <div
            className={`z-30 absolute  ${
              features.container === "Cone"
                ? "-top-14 right-chip-2"
                : "-top-10 right-chip-1"
            } sauce rotate-45 bg-red-700`}
          ></div>
        </>
      )}
      {features.topping === "Strawberry sauce" && features.scoops === 3 && (
        <>
          <div
            className={`z-30 absolute left-chip-2 ${
              features.container === "Cone" ? "-top-14 -rotate-45" : "-top-16"
            } sauce bg-red-700`}
          ></div>
          <div
            className={`z-30 absolute  ${
              features.container === "Cone"
                ? "-top-14 right-chip-2"
                : "-top-12 right-chip-1"
            } sauce rotate-45 bg-red-700`}
          ></div>
          <div
            className={`z-30 absolute  ${
              features.container === "Cone"
                ? "-top-24 center-chip mini-length-sauce"
                : "hidden"
            } sauce bg-red-700`}
          ></div>
        </>
      )}
    </div>
  );
}
