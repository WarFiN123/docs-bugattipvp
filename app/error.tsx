"use client"; // Failure components must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Particles from "../components/particles";

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
    <div className="min-h-screen flex flex-col gap-3 justify-center items-center px-2 py-8">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
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
