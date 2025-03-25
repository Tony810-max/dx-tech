import React from "react";
import ImageHappen from "./components/ImageHappen";
import ContentHappen from "./components/ContentHappen";

const Happen = () => {
  return (
    <div className="py-6">
      <div className="bg-third rounded-[2.8125rem] relative">
        <div className="w-1/2">
          <ContentHappen />
        </div>
        <ImageHappen />
      </div>
    </div>
  );
};

export default Happen;
