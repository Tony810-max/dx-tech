import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const FormContact = () => {
  return (
    <form className="absolute pt-[3.75rem] pl-[6.25rem] pb-20 min-w-[34.75rem] space-y-10">
      <RadioGroup className="flex items-center gap-[2.1875rem]">
        <div className="flex items-center gap-[.875rem]">
          <RadioGroupItem
            value="value-one"
            id="option-one"
            className="border border-black w-7 h-7 data-[state=checked]:after:scale-150 "
          />
          <label htmlFor="option-one" className="text-lg">
            Say Hi
          </label>
        </div>
        <div className="flex items-center gap-[.875rem]">
          <RadioGroupItem
            value="value-two"
            id="option-two"
            className="border border-black w-7 h-7 data-[state=checked]:after:scale-150 "
          />
          <label htmlFor="option-two" className="text-lg">
            Get a Quote
          </label>
        </div>
      </RadioGroup>
      <div className="space-y-[1.5625rem]">
        <div className="space-y-[.3125rem]">
          <label>Name</label>
          <Input
            className="py-[1.125rem] pl-[30px] border-black bg-white"
            placeholder="Name"
          />
        </div>
        <div className="space-y-[.3125rem]">
          <label>Email*</label>
          <Input
            className="py-[1.125rem] pl-[30px] border-black bg-white"
            placeholder="Email"
          />
        </div>
        <div className="space-y-[.3125rem]">
          <label>Message**</label>
          <Textarea placeholder="Message" className="resize-none bg-white" />
        </div>
      </div>
      <Button variant={"secondary"} className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default FormContact;
