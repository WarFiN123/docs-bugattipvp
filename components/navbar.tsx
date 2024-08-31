import { SiDiscord } from "react-icons/si";
import { Image } from 'lucide-react';
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";

export const NAVLINKS = [
  {
    title: "Documentation",
    href: `/docs/${page_routes[0].href}`,
  },
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:p-3 p-2 max-w-[1530px] mx-auto h-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-8">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex">
            <Link
                href="https://gallery-bugattipvp.vercel.app"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <Image className="h-[1.1rem] w-[1.1rem]" />
              </Link>   
              <Link
                href="https://discord.gg/ZewyUmtVSS"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <SiDiscord className="h-[1.1rem] w-[1.1rem]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <img
        src="https://github.com/WarFiN123/docs-bugattipvp/blob/950dfa7d9809056683eb8b1486395b7e7230ef26/app/Logo.webp?raw=true"
        className="w-12 h-12 text-muted-foreground fill-current"
        alt="Logo"
      />
      <h2 className="text-md font-bold">Bugatti PvP</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="text-black dark:text-white font-semibold"
            absolute
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
