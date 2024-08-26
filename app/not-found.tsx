import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Particles from "../components/particles";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col gap-3 justify-center items-center px-2 py-8">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-9xl font-bold">404</h2>
        <p className="text-muted-foreground text-2xl">Page not found</p>
        <br />
      </div>

      <Link href="/" className={buttonVariants({})}>
        Back to homepage
      </Link>
    </div>
  );
}
