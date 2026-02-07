"use client";
import { motion } from "framer-motion";
import { ArrowRightIcon, Mail, Phone } from "lucide-react";
import AppBackground from "@/components/shared/app-background";

export default function Home() {
  const containerMotion = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.42, delayChildren: 0.2 },
    },
  };

  const itemMotion = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen font-sans text-zinc-900 dark:bg-black/50 dark:text-zinc-100">
      <div className="relative overflow-hidden h-screen flex items-center justify-center">
        <AppBackground />
        <main className="relative  w-full max-w-6xl  sm:px-10 mx-auto">
          <div className=" flex w-full justify-center max-w-6xl mx-4">
            <motion.section
              className="w-full space-y-8 text-left text-lg text-zinc-700 dark:text-zinc-200"
              variants={containerMotion}
              initial="hidden"
              animate="show"
            >
              {[
              {
                title: "Zibo Mining",
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
                  "Know more",
                href: "/doc.pdf",
              },
            
              {
                title: "Be The Next",
                // description:
                //   "Un contact.",
                // href: "https://be-the-next.com/",
                kind: "contact",
                contacts: [
                  {
                    name: "Senator Bernard Muhindo",
                    items: [
                      {
                        icon: <Mail className="h-4 w-4" />,
                        value: "bernard.muhindo@pm.me",
                        href: "mailto:bernard.muhindo@pm.me",
                      },
                      {
                        icon: <Phone className="h-4 w-4" />,
                        value: "+243 813 991 155",
                        href: "tel:+243813991155",
                      },
                    ],
                  },
                  {
                    name: "Peter Orena",
                    items: [
                      {
                        icon: <Mail className="h-4 w-4" />,
                        value: "peter@zibomines.com",
                        href: "mailto:peter@zibomines.com",
                      },
                      {
                        icon: <Phone className="h-4 w-4" />,
                        value: "+1 516 504 5719",
                        href: "tel:+15165045719",
                      },
                      {
                        icon: <Phone className="h-4 w-4" />,
                        value: "+243 821 816 662",
                        href: "tel:+243821816662",
                      },
                    ],
                  },
                ],
              },
              ].map((item) => (
              <motion.div
                key={item.title}
                className="space-y-2"
                variants={itemMotion}
              >
                <div className="flex flex-wrap items-center gap-4">
                <div className="relative inline-block overflow-hidden">
                <div className="max-w-4xl font-black font-poppins md:text-8xl text-5xl tracking-tighter silver-3d">
  {item.title}
</div>

  {/* Reflet qui passe */}
  <div className="absolute inset-0 -translate-x-full animate-[shine_2.5s_infinite] bg-linear-to-r from-transparent via-white/50 to-transparent blur-sm"></div>
</div>



                  {!item.kind && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-amber-200 transition-colors hover:text-amber-200text-amber-200 dark:text-amber-200text-amber-200 dark:hover:text-amber-200text-amber-200"
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
                  <div className="mt-3 space-y-2 text-base">
                    {item.contacts.map((person) => (
                      <div key={person.name} className="space-y-1">
                        <div className=" font-bold text-white/80 font-poppins text-sm  ">
                          {person.name}
                        </div>
                        <div className="space-y-1">
                          {person.items.map((contact) => (
                            <a
                              key={`${person.name}-${contact.value}`}
                              href={contact.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 text-white transition-colors hover:text-white text-sm"
                            >
                              <span className="text-amber-200">
                                {contact.icon}
                              </span>
                              <span className="text-sm">{contact.value}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            ))}
            </motion.section>
          </div>

        </main>
      </div>
    </div>
  );
}
