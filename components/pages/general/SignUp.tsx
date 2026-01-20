"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  email: z.email({ message: "Invalid email format" }),
  agree: z.boolean().refine((v) => v === true, {
    message: "You must agree to the Privacy Policy",
  }),
});

export default function SignUp() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      agree: false,
    },
  });

  // function onSubmit(data: z.infer<typeof formSchema>) {
  function onSubmit() {
    toast("Data sent successfully", {
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-x-center flex-wrap gap-x-2.5 gap-y-4 md:gap-y-9.5"
    >
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field
            data-invalid={fieldState.invalid}
            className="max-w-130 items-start order-1"
          >
            <Input
              {...field}
              aria-invalid={fieldState.invalid}
              placeholder="Enter Your Email Address"
              autoComplete="off"
              className="h-15.5"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Button
        type="submit"
        className="gap-5 px-11 order-3 md:order-2"
        disabled={isSubmitSuccessful || isSubmitting}
      >
        Subscribe
        <ArrowRight size={16} />
      </Button>

      <Controller
        name="agree"
        control={control}
        render={({ field, fieldState }) => (
          <div className="basis-full order-2 md:order-3">
            <Field
              data-invalid={fieldState.invalid}
              orientation="horizontal"
              className="justify-center"
            >
              <Checkbox
                id="form-rhf-checkbox-agree"
                name={field.name}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <FieldLabel
                htmlFor="form-rhf-checkbox-agree"
                className="font-normal gap-1"
              >
                <span>I agree to the</span>
                <Link href="/">Privacy Policy</Link>
              </FieldLabel>
            </Field>

            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} className="text-center" />
            )}
          </div>
        )}
      />
    </form>
  );
}
