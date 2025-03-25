import { FC, HTMLAttributes } from "react";
import TitleHighlight from "@/components/TitleHighlight";
import { ROUTES } from "@/lib/routes";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type TCardVariant = "outline" | "primary" | "secondary";

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  textFirstLine: string;
  textSecondLine: string;
  image: string;
  variant: TCardVariant;
  bgText?: ICardProps["className"];
}

const Card: FC<ICardProps> = ({
  image,
  textFirstLine,
  textSecondLine,
  variant,
  bgText,
  className,
  ...props
}) => {
  const getBgColor = () => {
    switch (variant) {
      case "outline":
        return "bg-[#F3F3F3]";
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-secondary";
      default:
        return "bg-primary";
    }
  };

  const bgColor = getBgColor();

  const getLearnMoreIconColor = () => {
    switch (variant) {
      case "outline":
        return {
          color: "var(--primary)",
          bg: "bg-secondary",
        };
      case "primary":
        return {
          color: "var(--primary)",
          bg: "bg-secondary",
        };
      case "secondary":
        return {
          color: "#000",
          bg: "bg-white",
        };
      default:
        return {
          color: "var(--primary)",
          bg: "bg-secondary",
        };
    }
  };

  const isLearnMoreTextBlack =
    variant === "outline" || variant === "primary" ? true : false;

  const renderLearnMoreIcon = () => {
    const color = getLearnMoreIconColor();
    return (
      <div
        className={cn(
          "w-[42px] h-[42px] rounded-full flex items-center justify-center",
          color.bg
        )}
      >
        <ArrowUpRight color={color.color} size={24} />
      </div>
    );
  };

  return (
    <div
      className={cn(
        "p-[3.125rem] border flex justify-between rounded-[2.8125rem] border-secondary shadow-[0px_5px_0px_0px_#191A23]",
        bgColor,
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-between">
        <div>
          <TitleHighlight
            title={textFirstLine}
            className={cn("bg-primary text-[1.875rem]", bgText)}
          />
          <TitleHighlight
            title={textSecondLine}
            className={cn("bg-primary text-[1.875rem]", bgText)}
          />
        </div>
        <Link
          href={ROUTES?.LEARN_MORE}
          className="flex gap-4 items-center hover:opacity-80"
        >
          {renderLearnMoreIcon()}
          <span
            className={cn("text-xl text-white", {
              "text-black": isLearnMoreTextBlack,
            })}
          >
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
