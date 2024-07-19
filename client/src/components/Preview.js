export default function Preview({ features }) {
  return (
    <div className="bg-white rounded-md shadow-md w-4/5 max-w-2xl p-5 pb-10">
      <h2 className="text-3xl pacifico-regular text-center mb-48">Preview</h2>
      <div className="flex justify-center items-center relative">
        {features.container === "Tub" && (
          <div className="w-28 h-20 bg-gray-200 border border-stone-400 z-40"></div>
        )}
        {features.container === "Cone" && (
          <div
            className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[100px] border-t-orange-200
            border-r-[50px] border-r-transparent z-40"
          ></div>
        )}
        {features.scoops === 1 && (
          <div
            className={`w-20 h-20 rounded-full bg-red-800 absolute ${
              features.container === "Cone" ? "-top-14" : "-top-10"
            }`}
          ></div>
        )}
        {features.scoops === 2 && (
          <>
            <div
              className={`w-20 h-20 rounded-full bg-red-800 absolute scoops-2-left ${
                features.container === "Cone" ? "-top-16" : "-top-10"
              }`}
            ></div>
            <div
              className={`w-20 h-20 rounded-full bg-blue-800 absolute scoops-2-right z-30 ${
                features.container === "Cone" ? "-top-16" : "-top-10"
              }`}
            ></div>
          </>
        )}
        {features.scoops === 3 && (
          <>
            <div
              className={`w-20 h-20 rounded-full bg-red-800 absolute scoops-2-left ${
                features.container === "Cone" ? "-top-16" : "-top-10 z-20"
              }`}
            ></div>
            <div
              className={`w-20 h-20 rounded-full bg-blue-800 absolute scoops-2-right z-30 ${
                features.container === "Cone" ? "-top-16" : "-top-10"
              }`}
            ></div>
            <div
              className={`w-20 h-20 rounded-full bg-yellow-800 absolute scoops-3 z-10 ${
                features.container === "Cone" ? "-top-24" : "scoops-3-top-tub"
              }`}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}
