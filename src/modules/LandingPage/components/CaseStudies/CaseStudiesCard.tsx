import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { HTMLAttributes } from "react";

const CaseStudiesCard = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn("flex-1 border-r-white space-y-5", props?.className)}
    >
      <p className="text-white max-w-[17.875rem] text-lg">
        For a local restaurant, we implemented a targeted PPC campaign that
        resulted in a 50% increase in website traffic and a 25% increase in
        sales.
      </p>
      <Link
        href={ROUTES?.LEARN_MORE}
        className="flex items-center text-primary text-xl gap-2 hover:opacity-70"
      >
        Learn more
        <ArrowUpRight color="var(--primary)" strokeWidth={3} />
      </Link>
    </div>
  );
};

export default CaseStudiesCard;
