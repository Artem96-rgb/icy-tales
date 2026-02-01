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

export function roundNumberToTwo(num: number): number {
  return Math.round(num * 100) / 100;
}
