import React from "react";
import TopSevenTags from "./TopSevenTags";
import LeftSideBar   from "./LeftSideBar";
import { useSelector } from "react-redux";

const LeftTop = (props) => {
  const { loading } = useSelector((state) => state.question);

  return (
    <>
      {!loading && (
        <div className="flex flex-col w-1/3 ml-10 mr-10 mt-16 "> 
          <LeftSideBar/>
          <TopSevenTags />
        </div>
      )}                      
    </>
  );
};

export default LeftTop;
