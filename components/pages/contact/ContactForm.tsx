"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import {
  Field,
  FieldError,
  FieldLabel,
  FieldGroup,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email({ message: "Invalid email format" }),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(/^[+]?[\d\s\-()]+$/, "Phone number contains invalid characters"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactForm() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit() {
    toast("Data sent successfully", {
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grow-1">
      <FieldGroup className="grid sm:grid-cols-2 mb-10 gap-x-6.5 gap-y-5.5">
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2.5">
              <FieldLabel htmlFor="input-first-name">First Name</FieldLabel>

              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                autoComplete="off"
                id="input-first-name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="lastName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2.5">
              <FieldLabel htmlFor="input-last-name">Last Name</FieldLabel>

              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                autoComplete="off"
                id="input-last-name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2.5">
              <FieldLabel htmlFor="input-email">Email</FieldLabel>

              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                autoComplete="off"
                id="input-email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2.5">
              <FieldLabel htmlFor="input-phone">Phone</FieldLabel>

              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                autoComplete="off"
                id="input-phone"
                placeholder="+380 99 123 45 67"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="message"
          control={control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className="gap-2.5 sm:col-span-2"
            >
              <FieldLabel htmlFor="input-message">Message</FieldLabel>

              <Textarea
                {...field}
                aria-invalid={fieldState.invalid}
                autoComplete="off"
                id="input-message"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button
        type="submit"
        className="gap-5 px-10 order-3 md:order-2"
        disabled={isSubmitSuccessful || isSubmitting}
      >
        Submit Now
        <ArrowRight size={16} strokeWidth={3} />
      </Button>
    </form>
  );
}
