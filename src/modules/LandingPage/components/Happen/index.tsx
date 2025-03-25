import React from "react";
import ImageHappen from "./components/ImageHappen";
import ContentHappen from "./components/ContentHappen";

const Happen = () => {
  return (
    <div className="py-6">
      <div className="bg-third flex justify-between rounded-[2.8125rem]">
        <ContentHappen />
        <ImageHappen />
      </div>
    </div>
  );
};

export default Happen;
