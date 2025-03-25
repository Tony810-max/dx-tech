import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface ITitleHighLight extends HTMLAttributes<HTMLParagraphElement> {
  title: string;
}

const TitleHighlight: React.FC<ITitleHighLight> = ({ title, className }) => {
  return (
    <p className={cn("leading-none rounded-md pl-2 pr-2 w-fit", className)}>
      {title}
    </p>
  );
};

export default TitleHighlight;
