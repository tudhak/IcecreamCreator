export default function Preview({ features }) {
  return (
    <div className="bg-white rounded-md shadow-md w-4/5 max-w-2xl p-5 pb-10">
      <h2 className="text-3xl pacifico-regular text-center mb-48">Preview</h2>
      <div className="flex justify-center items-center">
        {features.container === "Tub" && (
          <div className="w-28 h-20 bg-gray-200 border border-black"></div>
        )}
        {features.container === "Cone" && (
          <div
            className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[100px] border-t-orange-200
            border-r-[50px] border-r-transparent"
          ></div>
        )}
      </div>
    </div>
  );
}
