"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, useWatch } from "react-hook-form";
import * as z from "zod";
import { ArrowRight } from "lucide-react";
import {
  Field,
  FieldError,
  FieldLabel,
  FieldGroup,
  FieldSet,
  FieldLegend,
} from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatCardNumber, showToast } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { monthsData } from "@/data/months";

const formSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.email({ message: "Invalid email format" }),
    state: z.string().min(1, "State is required"),
    city: z.string().min(1, "City is required"),
    zip: z.string().min(1, "Zip is required"),
    paymentMethod: z.enum(["card", "cash-on-delivery"], {
      message: "Payment method is required",
    }),
    creditCard: z.object({
      cardNumber: z.string().optional(),
      cardExpirationMonth: z.string().optional(),
      cardExpirationYear: z.string().optional(),
    }),
  })
  .refine(
    (data) =>
      data.paymentMethod !== "card" ||
      (data.creditCard.cardNumber &&
        /^\d{4} \d{4} \d{4} \d{4}$/.test(data.creditCard.cardNumber)),
    {
      message:
        "Card number is required and must be in format XXXX XXXX XXXX XXXX",
      path: ["cardNumber"],
    },
  )
  .refine(
    (data) =>
      data.paymentMethod !== "card" || !!data.creditCard.cardExpirationMonth,
    {
      message: "Expiration month is required",
      path: ["cardExpirationMonth"],
    },
  )
  .refine(
    (data) =>
      data.paymentMethod !== "card" || !!data.creditCard.cardExpirationYear,
    {
      message: "Expiration year is required",
      path: ["cardExpirationYear"],
    },
  );

export default function CheckoutForm() {
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
      state: "",
      city: "",
      zip: "",
      paymentMethod: "card",
      creditCard: {
        cardNumber: "",
        cardExpirationMonth: "",
        cardExpirationYear: "",
      },
    },
  });

  const paymentMethod = useWatch({ control, name: "paymentMethod" });

  function onSubmit() {
    showToast("Data sent successfully");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-182.5 grow-1 space-y-7.5"
    >
      <FieldSet>
        <FieldLegend>Billing Address:</FieldLegend>
        <FieldGroup className="grid sm:grid-cols-2 gap-x-7.5 gap-y-7">
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="input-first-name" className="mb-2.5">
                  First Name
                </FieldLabel>

                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  id="input-first-name"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="input-last-name" className="mb-2.5">
                  Last Name
                </FieldLabel>

                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  id="input-last-name"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="input-email" className="mb-2.5">
                  Email address
                </FieldLabel>

                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  id="input-email"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="state"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="mb-2.5">State</FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="min-w-45.5">
                    <SelectItem value="florida">Florida</SelectItem>
                    <SelectItem value="illinois">Illinois</SelectItem>
                    <SelectItem value="kansas">Kansas</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="city"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="mb-2.5">City</FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="min-w-45.5">
                    <SelectItem value="NewYork">New York</SelectItem>
                    <SelectItem value="Washington">Washington</SelectItem>
                    <SelectItem value="Miami">Miami</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="zip"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="input-zip" className="mb-2.5">
                  Zip/ postal code
                </FieldLabel>

                <Input
                  {...field}
                  type="number"
                  inputMode="numeric"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  id="input-zip"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Payment Method:</FieldLegend>

        <FieldGroup className="grid gap-x-7.5 gap-y-7">
          <Controller
            name="paymentMethod"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="gap-2.5">
                <RadioGroup
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                  aria-invalid={fieldState.invalid}
                >
                  <FieldLabel
                    htmlFor="form-rhf-radiogroup-card"
                    className="cursor-pointer"
                  >
                    <Field
                      data-invalid={fieldState.invalid}
                      orientation="horizontal"
                      className="pl-5.5 pr-6.5 h-12.75 gap-4"
                    >
                      <RadioGroupItem
                        value="card"
                        id="form-rhf-radiogroup-card"
                        aria-invalid={fieldState.invalid}
                        className="size-7.25 [&_svg]:size-4"
                      />
                      <span className="text-foreground font-medium leading-none">
                        Credit card
                      </span>
                    </Field>
                  </FieldLabel>

                  <FieldLabel
                    htmlFor="form-rhf-radiogroup-cash-on-delivery"
                    className="cursor-pointer"
                  >
                    <Field
                      data-invalid={fieldState.invalid}
                      orientation="horizontal"
                      className="pl-5.5 pr-6.5 h-12.75 gap-4"
                    >
                      <RadioGroupItem
                        value="cash-on-delivery"
                        id="form-rhf-radiogroup-cash-on-delivery"
                        aria-invalid={fieldState.invalid}
                        className="size-7.25 [&_svg]:size-4"
                      />
                      <span className="text-foreground font-medium leading-none">
                        Cash on Delivery
                      </span>
                    </Field>
                  </FieldLabel>
                </RadioGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {paymentMethod === "card" && (
            <div className="grid grid-cols-3 gap-7">
              <Controller
                name="creditCard.cardNumber"
                control={control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    className="sm:col-span-3"
                  >
                    <FieldLabel htmlFor="input-card-number" className="mb-2.5">
                      Card number
                    </FieldLabel>

                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      inputMode="numeric"
                      maxLength={19}
                      placeholder="1234 5678 9012 3456"
                      onChange={(e) =>
                        field.onChange(formatCardNumber(e.target.value))
                      }
                      id="input-card-number"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="creditCard.cardExpirationMonth"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="mb-2.5">Expiration month</FieldLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {monthsData.map((month) => (
                          <SelectItem key={month.id} value={month.id}>
                            {month.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="creditCard.cardExpirationYear"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="mb-2.5">Expiration year</FieldLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2028">2028</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          )}
        </FieldGroup>
      </FieldSet>

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
