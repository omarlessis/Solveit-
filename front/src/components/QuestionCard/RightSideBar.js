const RightSideBar = () => {
  return (
    <div className="bg-white w-80 ml-8 h-1/3 rounded shadow-md border border-gray-300">
      <span
        className="block pl-4 py-2 text-left  mb-4 text-gray-600 bg-gray-100 border-b-2 border-gray-200 bg-opacity-60"
        style={{ backgroundColor: "#FAFAFB" }}
      >
     Process :
      </span>
      <span className="text-xs block pl-4 pb-4 text-left">
        Your coworkers are her to solve  specific coding, algorithm problems and answer all your questions.
      </span>
      <span className="text-xs block pl-4 pb-4 text-left">
       
      </span>
      <div className="flex pl-4 pb-2.5 mb-2 text-sm border-b border-gray-300 font-semibold">
        <img
          className="mr-4"
          src="https://img.icons8.com/color/96/000000/1-circle-c--v1.png"
          width="30"
          height="30"
          alt="1."
        />
        Titrate your question
      </div>
      <div className="flex pl-4 pb-2.5 mb-2 text-sm border-b border-gray-300 font-semibold">
        <img
          className="mr-4"
          src="https://img.icons8.com/color/96/000000/2-circle-c--v1.png"
          width="30"
          height="30"
          alt="2."
        />
        Describe your question
      </div>
      <div className="flex pl-4 pb-2.5 text-sm font-semibold">
        <img
          className="mr-4"
          src="https://img.icons8.com/color/96/000000/3-circle-c--v1.png"
          width="30"
          height="10"
          alt="3."
        />
        Enter a Tag or a keyword
      </div>
    </div>
  );
};

export default RightSideBar;
