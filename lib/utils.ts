import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ShowToastOptions {
  description?: string;
  type?: "success" | "info" | "warning" | "error" | "loading";
}

export function showToast(
  message: string,
  { description, type = "success" }: ShowToastOptions = {},
) {
  toast[type](message, {
    description,
    position: "bottom-right",
    // classNames: {
    //   content: "",
    // },
  });
}

/**
 * Rounds a number to two decimal places.
 * Example: 12.345 -> 12.35
 */
export function roundNumberToTwo(num: number): number {
  return Math.round(num * 100) / 100;
}

/**
 * Formats a credit card number by:
 * - removing all non-digit characters
 * - inserting a space after every 4 digits
 *
 * Example:
 * "1234abcd56789012" -> "1234 5678 9012"
 */
export function formatCardNumber(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
}
