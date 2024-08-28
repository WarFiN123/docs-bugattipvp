import { Leftbar } from "@/components/leftbar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-14 sm:container mx-auto w-[85vw] h-auto">
      <Leftbar />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
