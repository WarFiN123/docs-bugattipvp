// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Overview", href: "/overview" },
      { title: "Requirements", href: "/requirements" },
      { title: "Join Now", href: "/join" },
    ],
  },
  {
    title: "Origins",
    href: "origins",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Human", href: "/human" },
      { title: "Arachnid", href: "/arachnid" },
      { title: "Avian", href: "/avian" },
      { title: "Blazeborn", href: "/blazeborn" },
      { title: "Elytrian", href: "/elytrian" },
      { title: "Enderian", href: "/enderian" },
      { title: "Feline", href: "/feline" },
      { title: "Merling", href: "/merling" },
      { title: "Phantom", href: "/phantom" },
      { title: "Shulk", href: "/shulk" },
    ],
  },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
