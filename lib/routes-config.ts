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
    title: "Commands",
    href: "commands",
    items: [
      { title: "Basic Commands", href: "/basic_commands" },
      { title: "Auction House", href: "/auction_house" },
      { title: "Kits", href: "/kits" },
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
      { title: "Bard", href: "/bard" },
      { title: "Bee", href: "/bee" },
      { title: "Blazeborn", href: "/blazeborn" },
      { title: "Drowned", href: "/drowned" },
      { title: "Centaur", href: "/centaur" },
      { title: "Creeper", href: "/creeper" },
      { title: "Dragonborn", href: "/dragonborn" },
      { title: "Dwarf", href: "/dwarf" },
      { title: "Elder Guardian", href: "/elder_guardian" },
      { title: "Elf", href: "/elf" },
      { title: "Elytrian", href: "/elytrian" },
      { title: "Enderian", href: "/enderian" },
      { title: "Evoker", href: "/evoker" },
      { title: "Feline", href: "/feline" },
      { title: "Fox", href: "/fox" },
      { title: "Giant", href: "/giant" },
      { title: "Guardian", href: "/guardian" },
      { title: "Husk", href: "/husk" },
      { title: "Merling", href: "/merling" },
      { title: "Naiad", href: "/naiad" },
      { title: "Phantom", href: "/phantom" },
      { title: "Piglin", href: "/piglin" },
      { title: "Shulk", href: "/shulk" },
      { title: "Skeleton", href: "/skeleton" },
      { title: "Slime", href: "/slime" },
      { title: "Snow Golem", href: "/snow_golem" },
      { title: "Stray", href: "/stray" },
      { title: "Strider", href: "/strider" },
      { title: "Vampire", href: "/vampire" },
      { title: "Warden", href: "/warden" },
      { title: "Witch", href: "/witch" },
      { title: "Wither Skeleton", href: "/wither_skeleton" },
      { title: "Wolf", href: "/wolf" },
      { title: "Zombie", href: "/zombie" },
      { title: "Zombified Piglin", href: "/zombified_piglin" },
    ],
  },
  {
    title: "Contribute",
    href: "contribute",
    items: [{ title: "Contributing", href: "/contributing" }],
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
