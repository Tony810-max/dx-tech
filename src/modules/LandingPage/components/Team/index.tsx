import Heading from "@/components/Heading";
import React from "react";
import TeamCard from "./components/TeamCard";
import { TEAMCARD_DATA } from "../../utils/const";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

const Team = () => {
  return (
    <div className="pt-[8.75rem] min-h-screen">
      <Heading
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className="grid grid-cols-3 gap-10 pt-20 pb-10">
        {TEAMCARD_DATA?.map((card, index) => (
          <TeamCard
            key={index}
            name={card?.name}
            position={card?.position}
            description={card?.description}
            image={card?.image}
          />
        ))}
      </div>
      <Link href={ROUTES?.TEAM} className="flex justify-end">
        <Button variant={"secondary"} className="px-[4.75rem]">
          See all team
        </Button>
      </Link>
    </div>
  );
};

export default Team;
