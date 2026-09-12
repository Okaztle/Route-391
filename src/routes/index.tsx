import { createFileRoute } from "@tanstack/react-router";
import { Clock3, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Route 391 | Northern Manitoba Diner" },
      {
        name: "description",
        content: "Browse the Route 391 diner menu, hours, and locations in Flin Flon and Lynn Lake, Manitoba.",
      },
      { property: "og:title", content: "Route 391 | Northern Manitoba Diner" },
      {
        property: "og:description",
        content: "Comfort food, breakfast, burgers, pizza, and more in Flin Flon and Lynn Lake.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = [
  {
    id: "appetizers",
    name: "Appetizers / Salads",
    note: "Start here",
    items: [
      ["Loaded Route Fries", "Crispy fries, cheese, bacon and green onion", "$12.00"],
      ["Prairie Caesar", "Romaine, parmesan, croutons and house dressing", "$11.50"],
      ["Chicken Caesar", "Our Prairie Caesar topped with grilled chicken", "$16.00"],
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    note: "Served with fries",
    items: [
      ["Classic Route Burger", "Beef patty, cheddar, lettuce, tomato and house sauce", "$12.50"],
      ["Nanook Bacon Stack", "Double beef, bacon, cheddar and crispy onions", "$16.00"],
      ["Cedar Chicken Melt", "Grilled chicken, smoked cheese and garlic aioli", "$15.25"],
    ],
  },
  {
    id: "platters",
    name: "Platters",
    note: "Big northern plates",
    items: [
      ["Roadhouse Rib Platter", "Slow-cooked ribs, fries, slaw and toast", "$24.00"],
      ["Northwoods Fried Fish", "Crispy fish, fries, slaw and tartar sauce", "$21.50"],
      ["Family Combo Board", "A generous mix made for sharing", "$32.00"],
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    note: "Fresh from the oven",
    items: [
      ["Route 391 Special", "Pepperoni, bacon, mushrooms, peppers and onion", "$24.00"],
      ["Northern Meat Lovers", "Pepperoni, bacon, ham and sausage", "$26.00"],
      ["Garden Pizza", "Mushrooms, tomato, peppers, onion and olives", "$22.00"],
    ],
  },
  {
    id: "chicken",
    name: "Chicken",
    note: "Crispy or grilled",
    items: [
      ["Crispy Chicken Dinner", "Golden chicken, fries, slaw and gravy", "$19.50"],
      ["Chicken Fingers", "Hand-breaded strips, fries and dipping sauce", "$15.00"],
      ["Hot Chicken Sandwich", "Crispy chicken, pickles and house hot sauce", "$14.75"],
    ],
  },
  {
    id: "dinner",
    name: "Dinner Meals",
    note: "Comfort classics",
    items: [
      ["Hot Beef Dinner", "Roast beef, mashed potatoes, vegetables and gravy", "$20.00"],
      ["Pan-Fried Pickerel", "Pickerel, potato, vegetables and lemon", "$22.00"],
      ["Homestyle Meatloaf", "Mashed potatoes, vegetables and rich gravy", "$18.50"],
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    note: "Save room",
    items: [
      ["Blackstrap Caramel Pie", "Caramel cream, flaky crust and whipped cream", "$7.00"],
      ["Berry Snow Pie", "Northern berries, vanilla cream and crumb crust", "$6.50"],
      ["Warm Caramel Cake", "Molten caramel centre and vanilla ice cream", "$7.50"],
    ],
  },
  {
    id: "breakfast",
    name: "Breakfast",
    note: "Morning favourites",
    items: [
      ["Diner Stack", "Three eggs, bacon, sausage, hash browns and toast", "$14.00"],
      ["Maple Pancakes", "Three fluffy pancakes with butter and maple syrup", "$9.75"],
      ["Breakfast Skillet", "Eggs, bacon, peppers, onion, cheese and potatoes", "$15.50"],
    ],
  },
] as const;

const navItems = ["appetizers", "burgers", "platters", "pizza", "chicken", "dinner", "desserts", "breakfast"];

function Index() {
  return (
    <div className="min-h-screen bg-cream font-body text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-creamline bg-cream/95 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex min-w-0 items-baseline gap-2" aria-label="Route 391 home">
            <span className="font-script text-2xl leading-none text-primary">Route</span>
            <span className="font-display text-2xl font-bold text-navy">391</span>
          </a>
          <nav className="hidden items-center gap-7 font-display text-sm uppercase text-navy/70 md:flex" aria-label="Primary navigation">
            <a href="#menu" className="transition-colors hover:text-primary">Menu</a>
            <a href="#locations" className="transition-colors hover:text-primary">Locations</a>
            <Button asChild variant="diner" size="sm"><a href="tel:2046876115"><Phone /> Call to order</a></Button>
          </nav>
          <Button asChild variant="diner" size="icon" className="md:hidden" aria-label="Call Route 391">
            <a href="tel:2046876115"><Phone /></a>
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-navy text-cream">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(90deg,transparent_0,transparent_78px,var(--color-gold)_79px,var(--color-gold)_80px)]" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 md:py-18">
            <div className="md:col-span-7">
              <p className="font-display text-xs uppercase text-gold">Flin Flon &amp; Lynn Lake · Since 2009</p>
              <h1 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-[0.95] sm:text-6xl md:text-7xl">
                Big-north comfort, cooked right.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-cream/80 sm:text-lg">
                Two kitchens. One Route. Breakfast to late—no fuss, plenty of flavour, and a warm seat waiting.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="diner" size="lg"><a href="#menu">Browse the menu</a></Button>
                <Button asChild variant="dinerOutline" size="lg"><a href="#locations"><MapPin /> Find your counter</a></Button>
              </div>
            </div>
            <div className="self-end md:col-span-5">
              <div className="grid grid-cols-3 divide-x divide-cream/15 rounded-md border border-cream/15 bg-cream/10">
                {[["17+", "Years serving"], ["8", "Menu sections"], ["2", "Locations"]].map(([number, label]) => (
                  <div className="px-2 py-4 text-center sm:p-5" key={label}>
                    <div className="font-display text-3xl font-bold text-gold">{number}</div>
                    <div className="mt-1 text-[10px] uppercase leading-4 text-cream/65 sm:text-xs">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-md bg-cream p-5 text-foreground shadow-xl">
                <p className="font-script text-lg leading-snug text-primary">“Good food, hot coffee, and northern hospitality.”</p>
                <p className="mt-2 text-xs text-muted-foreground">Route 391 · serving northern Manitoba</p>
              </div>
            </div>
          </div>
        </section>

        <div className="sticky top-[65px] z-40 overflow-x-auto border-b border-creamline bg-cream/95 backdrop-blur-md md:hidden">
          <nav className="flex min-w-max gap-1 px-4 py-2" aria-label="Menu categories">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="rounded-sm px-3 py-2 font-display text-sm uppercase text-navy transition-colors hover:bg-primary hover:text-primary-foreground">
                {item === "appetizers" ? "Starters" : item}
              </a>
            ))}
          </nav>
        </div>

        <section id="menu" className="scroll-mt-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[180px_minmax(0,1fr)] lg:grid-cols-[210px_minmax(0,1fr)]">
            <aside className="hidden md:block">
              <div className="sticky top-24">
                <p className="mb-4 font-display text-xs uppercase text-muted-foreground">Jump to</p>
                <nav className="border-l border-creamline" aria-label="Menu categories">
                  {categories.map((category) => (
                    <a key={category.id} href={`#${category.id}`} className="block border-l-2 border-transparent px-4 py-2 font-display text-base uppercase text-navy/70 transition-colors hover:border-primary hover:text-primary">
                      {category.name}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 border-t border-creamline pt-5">
                  <p className="flex items-center gap-2 font-display text-xs uppercase text-primary"><Clock3 className="size-4" /> Today’s hours</p>
                  <p className="mt-2 text-sm font-medium text-foreground">8 am–8 pm</p>
                  <p className="text-xs text-muted-foreground">Friday &amp; Saturday until 10 pm</p>
                </div>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b-2 border-navy pb-5">
                <div className="min-w-0">
                  <p className="font-script text-xl text-primary">Pick a favourite</p>
                  <h2 className="font-display text-4xl font-bold text-navy sm:text-5xl">The Menu</h2>
                </div>
                <span className="shrink-0 font-display text-xs uppercase text-muted-foreground">Prices in CAD</span>
              </div>

              <div className="grid gap-x-10 lg:grid-cols-2">
                {categories.map((category) => (
                  <article id={category.id} key={category.id} className="scroll-mt-32 border-b border-creamline py-8">
                    <div className="mb-5 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3">
                      <h3 className="min-w-0 font-display text-2xl font-semibold uppercase text-primary">{category.name}</h3>
                      <span className="shrink-0 text-right text-[10px] font-bold uppercase text-muted-foreground">{category.note}</span>
                    </div>
                    <ul className="space-y-5">
                      {category.items.map(([name, description, price]) => (
                        <li key={name}>
                          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                            <h4 className="min-w-0 font-medium text-foreground">{name}</h4>
                            <span className="font-display text-lg text-navy">{price}</span>
                          </div>
                          <p className="mt-1 pr-10 text-sm leading-5 text-muted-foreground">{description}</p>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p className="mt-6 text-xs leading-5 text-muted-foreground">Menu items, availability, and prices may vary by location. Please call to confirm.</p>
            </div>
          </div>
        </section>

        <section id="locations" className="scroll-mt-16 bg-navy text-cream">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
            <p className="font-script text-xl text-gold">Come by hungry</p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Hours &amp; Locations</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Location name="Flin Flon" address="93 Main St, Flin Flon, MB R8A 1J9" phone="204-687-6115" tel="2046876115" />
              <Location name="Lynn Lake" address="546 Sherritt Ave, Lynn Lake, MB R0B 0W0" phone="204-356-8050" tel="2043568050" />
              <div className="rounded-md bg-primary p-5">
                <h3 className="font-display text-xl font-semibold uppercase">Open hours</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4"><dt>Mon–Thu</dt><dd className="font-display">8 am–8 pm</dd></div>
                  <div className="flex justify-between gap-4"><dt>Fri–Sat</dt><dd className="font-display">8 am–10 pm</dd></div>
                  <div className="flex justify-between gap-4"><dt>Sunday</dt><dd className="font-display">9 am–7 pm</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center text-sm text-muted-foreground sm:px-6 md:flex-row md:text-left">
        <a href="#top" className="font-script text-lg text-primary">Route 391</a>
        <span>Serving northern Manitoba since 2009.</span>
        <span>Liquor License · Manitoba LGCA</span>
      </footer>
    </div>
  );
}

function Location({ name, address, phone, tel }: { name: string; address: string; phone: string; tel: string }) {
  return (
    <article className="rounded-md border border-cream/15 bg-cream/10 p-5">
      <h3 className="font-script text-xl text-gold">{name}</h3>
      <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-cream/80"><MapPin className="mt-1 size-4 shrink-0 text-gold" />{address}</p>
      <a href={`tel:${tel}`} className="mt-3 inline-flex items-center gap-2 font-display text-lg text-gold"><Phone className="size-4" />{phone}</a>
    </article>
  );
}
