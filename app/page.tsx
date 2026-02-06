"use client";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black/50 dark:text-zinc-100 h-screen">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-36 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-300/40 blur-[96px] dark:bg-amber-400/20" />
          <div className="absolute -bottom-32 right-[-12%] h-80 w-80 rounded-full bg-indigo-300/40 blur-[96px] dark:bg-indigo-500/20" />
        </div>

        {/* <PageHeader /> */}

        <main className="relative  w-full max-w-6xl pb-20 pt-22 sm:px-10 mx-auto">
          {/* <div className="mb-10 flex w-full justify-start text-center">
            <h1 className="max-w-4xl font-poppins text-9xl font-semibold leading-tight tracking-tight sm:text-7xl">
              Introduction
            </h1>
          </div> */}
          <div className="mt-10 flex w-full justify-center max-w-6xl">
            <section className="w-full space-y-6 text-left text-lg text-zinc-700 dark:text-zinc-200">
              {[
              {
                 title: "Zibo Mine",
                icon: <ArrowRightIcon className="h-4 w-4" />,
                description:
                  "Acces direct a la plateforme miniere de Zibo Mining.",
                href: "https://zibomines.com/",
              },
              {
                title: "Prospectus",
                description:
                  "Analyse visuelle et suivi des performances en temps reel.",
                href: "http://agecongo.sycamore.cd/",
              },
            
              {
                title: "Be The Next",
                description:
                  "Assistance premium et demandes personnalisees.",
                href: "https://be-the-next.com/",
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
                <div className="max-w-4xl font-poppins text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-8xl">
                  {item.title}
                </div>
                <p className="text-base text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </p>
                {item.kind === "contact" && item.contacts ? (
                  <details className="group text-base">
                    <summary className="cursor-pointer list-none text-amber-700 transition-colors hover:text-amber-900 dark:text-amber-200 dark:hover:text-amber-100">
                      Afficher les adresses
                    </summary>
                    <div className="mt-3 space-y-1">
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
                  </details>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-base font-medium text-amber-700 transition-colors hover:text-amber-900 dark:text-amber-200 dark:hover:text-amber-100"
                  >
                    <span>Ouvrir le lien</span>
                    <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            ))}
            </section>
          </div>
{/* 
          <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-zinc-200/60 bg-white/70 p-6 text-sm text-zinc-600 shadow-lg shadow-zinc-200/40 dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-300 dark:shadow-black/40">
            <span className="text-base font-semibold text-zinc-900 dark:text-white">
              Mode systeme actif
            </span>
            <p>
              Ce portail respecte automatiquement vos preferences de theme.
              Passez du mode clair au mode sombre directement depuis votre
              systeme.
            </p>
          </div> */}
        </main>
      </div>
    </div>
  );
}
