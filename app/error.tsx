"use client"; // Failure components must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Failure({
  failure,
  reset,
}: {
  failure: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the failure to an failure reporting service
    console.error(failure);
  }, [failure]);

  return (
    <div className="min-h-[99vh] px-2 py-8 flex flex-col gap-3 items-start">
      <div>
        <h2 className="text-5xl font-bold">Oops!</h2>
        <p className="text-muted-foreground">Something went wrong!</p>
      </div>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
