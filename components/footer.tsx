import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { SiKofi } from "react-icons/si";
import { Images, Box, Info } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <div className="flex items-center gap-3">
          <Info className="sm:block hidden w-5 h-5 text-muted-foreground" />
          <p className="text-center">
            The source code is available on{""}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/warfin123/docs-bugattipvp"
            >
              GitHub
            </Link>
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
        href="https://3d.bugattipvp.net"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Box className="h-4 w-4 mr-2 text-green-600 fill-current" />
        3D Map
      </Link>
      <Link
        href="https://gallery.bugattipvp.net/"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Images className="h-4 w-4 mr-2 text-yellow-600 fill-current" />
        Gallery
      </Link>
      <Link
        href="https://ko-fi.com/bugattipvp"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <SiKofi className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Donate
      </Link>
    </>
  );
}
