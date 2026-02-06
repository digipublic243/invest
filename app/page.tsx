"use client";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black/50 dark:text-zinc-100">
      <div className="relative overflow-hidden h-screen flex items-center justify-center">
        <div className="pointer-events-none absolute inset-0 ">
          <div className="absolute -top-36 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-300/40 blur-[96px] dark:bg-amber-400/20" />
          <div className="absolute -bottom-32 right-[-12%] h-80 w-80 rounded-full bg-indigo-300/40 blur-[96px] dark:bg-indigo-500/20" />
        </div>
        <main className="relative  w-full max-w-6xl  sm:px-10 mx-auto">
          <div className="mt-10 flex w-full justify-center max-w-6xl mx-4">
            <section className="w-full space-y-6 text-left text-lg text-zinc-700 dark:text-zinc-200">
              {[
              {
                title: "Zibo Mine",
                icon: <ArrowRightIcon className="h-4 w-4" />,
                description: (
                  <>
                    One of our <span className="font-semibold text-amber-200">success</span>{" "}
                    story.
                  </>
                ),
                href: "https://zibomines.com/",
              },
              {
                title: "Prospectus",
                description:
                  "En savoir plus",
                href: "http://agecongo.sycamore.cd/",
              },
            
              {
                title: "Be The Next",
                // description:
                //   "Un contact.",
                // href: "https://be-the-next.com/",
                kind: "contact",
                contacts: [
                  {
                    label: "Site officiel",
                    value: "be-the-next.com",
                    href: "https://be-the-next.com/",
                  },
                  {
                    label: "Support",
                    value: "Contact via le site",
                    href: "https://be-the-next.com/",
                  },
                ],
              },
              ].map((item) => (
              <div key={item.title} className="space-y-2">
                <div className="flex flex-wrap items-center gap-8">
                  <div className="max-w-4xl font-poppins text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-8xl">
                    {item.title}
                  </div>
                  {!item.kind && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-amber-700 transition-colors hover:text-amber-900 dark:text-amber-200 dark:hover:text-amber-100"
                      aria-label={`Ouvrir ${item.title}`}
                    >
                      <ArrowRightIcon className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" size={24} />
                    </a>
                  )}
                </div>
                <p className="text-base text-zinc-600 dark:text-zinc-300 ">
                  {item.description}
                </p>
                {item.kind === "contact" && item.contacts ? (
                  <div className="mt-3 space-y-1 text-base">
                    {item.contacts.map((contact) => (
                      <a
                        key={contact.label}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-amber-700 transition-colors hover:text-amber-900 dark:text-amber-200 dark:hover:text-amber-100"
                      >
                        {contact.label}: {contact.value}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            </section>
          </div>

        </main>
      </div>
    </div>
  );
}
