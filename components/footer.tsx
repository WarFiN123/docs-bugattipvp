import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ImInfo } from "react-icons/im";
import { SiKofi } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <div className="flex items-center gap-3">
          <ImInfo className="sm:block hidden w-5 h-5 text-muted-foreground fill-current" />
          <p className="text-center">
            Original theme by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/CapnKitten/Translucence"
            >
              CapnKitten
            </Link>
            . The source code is available on{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/warfin123/translucencev2"
            >
              GitHub
            </Link>
            .
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://ko-fi.com/warfin"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <SiKofi className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Donate
      </Link>
    </>
  );
}
