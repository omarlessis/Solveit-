import React from "react";
import Question from "../../assets/svg/Question";
import Trophy from "../../assets/svg/Trophy";
import Upvotes from "../../assets/svg/Upvotes";
import Bookmark from "../../assets/svg/Bookmark";

const Intro = () => {
  return (
    <div className="w-1/3 p-10">
      <div className="text-left font-medium text-3xl mb-5">
        Join the ETC Team
      </div>
      <div className="flex text-md text-left mb-3">
        <Question />
        <span className="ml-5">Ask a question</span>
      </div>
      <div className="flex text-md text-left mb-3">
        <Upvotes />
        <span className="ml-5">
        Voting and answering
        </span>
      </div>
      <div className="flex text-md text-left mb-3">
        <Bookmark />
        <span className="ml-5">Add tags, filters questions</span>
      </div>
      <div className="flex text-md text-left mb-3">
        <Trophy />
        <span className="ml-5">Share knowledge and help others</span>
      </div>
    </div>
  );
};

export default Intro;
