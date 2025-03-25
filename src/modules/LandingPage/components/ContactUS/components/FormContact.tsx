"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      className="absolute pt-[3.75rem] pl-[6.25rem] pb-20 min-w-[34.75rem] space-y-10"
      onSubmit={handleSubmit((d) => console.log(d))}
    >
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
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-red-500 italic">{errors.email?.message}</p>
          )}
        </div>
        <div className="space-y-[.3125rem]">
          <label>Message*</label>
          <Textarea
            placeholder="Message"
            className="resize-none bg-white"
            {...register("message")}
          />
          {errors.message?.message && (
            <p className="text-red-500 italic">{errors.message?.message}</p>
          )}
        </div>
      </div>
      <Button type="submit" variant={"secondary"} className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default FormContact;
