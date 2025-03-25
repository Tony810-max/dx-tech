import React from "react";
import TitleHighlight from "./TitleHighlight";

export interface IHeading {
  title: string;
  description: string;
}

const Heading: React.FC<IHeading> = ({ description, title }) => {
  return (
    <div className="flex items-center gap-10">
      <TitleHighlight title={title} className="bg-primary text-[2.5rem]" />
      <span className="max-w-[36.25rem]">{description}</span>
    </div>
  );
};

export default Heading;
