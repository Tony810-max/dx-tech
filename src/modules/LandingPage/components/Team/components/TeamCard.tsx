import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React, { FC } from "react";

export interface ITeamCard {
  name: string;
  position: string;
  image: string;
  description: string;
}

const TeamCard: FC<ITeamCard> = ({ description, image, name, position }) => {
  return (
    <div className="border border-black py-10 px-[2.1875rem] space-y-7 rounded-[2.8125rem] shadow-[0px_5px_0px_0px_#191A23]">
      <div className="relative flex items-end gap-5">
        <Image
          src={image}
          alt="member"
          width={106}
          height={102}
          priority
          unoptimized
        />
        <div className="flex flex-col">
          <span className="text-xl font-medium">{name}</span>
          <span className="text-lg">{position}</span>
        </div>
        <Image
          src={"/LandingPage/iconTeam.webp"}
          alt="icon"
          width={34}
          height={34}
          className="absolute top-0 right-0"
        />
      </div>
      <Separator className="bg-black" />
      <span className="text-lg">{description}</span>
    </div>
  );
};

export default TeamCard;
