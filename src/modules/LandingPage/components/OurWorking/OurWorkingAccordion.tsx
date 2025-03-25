"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { FC, useState } from "react";

export interface IOurWorkingAccordion {
  number: string;
  title: string;
  description: string;
}

const OurWorkingAccordion: FC<IOurWorkingAccordion> = (props) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const { description, number, title } = props;

  const renderIcon = () => {
    if (isShow) {
      return (
        <Minus
          onClick={() => setIsShow(false)}
          size={58}
          className="cursor-pointer hover:opacity-70 border border-black rounded-full"
        />
      );
    }

    return (
      <Plus
        onClick={() => setIsShow(true)}
        size={58}
        className="cursor-pointer hover:opacity-70 border border-black rounded-full"
      />
    );
  };

  return (
    <div
      className={cn(
        "py-10 rounded-[2.75rem] transition-all ease-in-out duration-300 px-15 shadow-[0px_5px_0px_0px_#191A23] border border-secondary",
        {
          "bg-primary space-y-[1.875rem]": isShow,
        }
      )}
    >
      <div className="flex justify-between">
        <div className="flex gap-6 items-center">
          <span className="text-6xl font-medium">{number}</span>
          <span className="font-medium text-3xl">{title}</span>
        </div>
        {renderIcon()}
      </div>

      <div
        className={cn(
          "max-h-0 overflow-hidden opacity-0 space-y-[1.875rem] transition-all ease-in-out duration-500",
          {
            "max-h-[500px] opacity-100": isShow,
          }
        )}
      >
        <Separator className="bg-black" />
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default OurWorkingAccordion;
