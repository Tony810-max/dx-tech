import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const FormSubscribe = () => {
  return (
    <form className="flex gap-5 py-[3.625rem] px-10 bg-[#292A32] rounded-[.875rem]">
      <Input
        className="py-[1.375rem] pl-[2.1875rem] border-white h-[4.1875rem] min-w-[17.8125rem]"
        placeholder="Email"
      />
      <Button className="h-[4.1875rem]">Subscribe to news</Button>
    </form>
  );
};

export default FormSubscribe;
