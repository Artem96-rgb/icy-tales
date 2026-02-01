"use client";

import { Spinner } from "@/components/ui/spinner";
import { useLoaderStore } from "@/store/loaderStore";

export default function GlobalLoader() {
  const isGlobalLoading = useLoaderStore((state) => state.isGlobalLoading);

  return (
    <>
      {isGlobalLoading && (
        <div className="loader-full-screen">
          <Spinner />
        </div>
      )}
    </>
  );
}
