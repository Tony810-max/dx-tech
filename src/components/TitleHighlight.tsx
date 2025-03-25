import { cn } from "@/lib/utils";
import React from "react";

interface ITitleHighLight {
  title: string;
  bgHightLight: string;
  sizeText: string;
}

const TitleHighlight: React.FC<ITitleHighLight> = ({
  title,
  bgHightLight,
  sizeText,
}) => {
  return (
    <p
      className={cn(
        "leading-none rounded-md pl-2 pr-2 w-fit",
        bgHightLight,
        sizeText
      )}
    >
      {title}
    </p>
  );
};

export default TitleHighlight;
