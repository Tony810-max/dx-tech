import React from "react";
import TitleHighlight from "@/components/TitleHighlight";
import { ROUTES } from "@/lib/routes";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ICard {
  title1: string;
  title2: string;
  dark: boolean;
  image: string;
  backgroundColor: string;
}

const Card: React.FC<ICard> = ({
  dark,
  image,
  title1,
  title2,
  backgroundColor,
}) => {
  return (
    <div
      className={cn(
        "p-[3.125rem] border flex justify-between rounded-[2.8125rem] border-secondary shadow-[0px_5px_0px_0px_#191A23]",
        backgroundColor
      )}
    >
      <div className="flex flex-col justify-between">
        <div>
          <TitleHighlight
            title={title1}
            bgHightLight="bg-primary"
            sizeText="text-[1.875rem]"
          />
          <TitleHighlight
            title={title2}
            bgHightLight="bg-primary"
            sizeText="text-[1.875rem]"
          />
        </div>
        <Link
          href={ROUTES?.LEARN_MORE}
          className="flex gap-4 items-center hover:opacity-80"
        >
          <div
            className={cn(
              "w-[42px] h-[42px] rounded-full flex items-center justify-center",
              dark ? "bg-white" : `bg-black`
            )}
          >
            <ArrowUpRight color={dark ? " #000" : "var(--primary)"} size={24} />
          </div>
          <span className={cn("text-xl", dark ? "text-white" : "text-black")}>
            Learn more
          </span>
        </Link>
      </div>
      <div className="relative w-[13.125rem] h-[13.125rem] ">
        <Image src={image} alt="card" fill priority unoptimized />
      </div>
    </div>
  );
};

export default Card;
