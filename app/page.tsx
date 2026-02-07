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
    <div className="md:min-h-screen font-sans text-zinc-900 dark:bg-black/50 dark:text-zinc-100 ">
      <div className=" relative overflow-hidden  flex items-center justify-center h-screen">
        <AppBackground />
        <main className="relative  w-full max-w-6xl  sm:px-10 mx-auto h-auto ">
          <div className=" flex w-full justify-center max-w-6xl mx-4">
            <motion.section
              className="w-full md:space-y-8 space-y-4 text-left text-lg text-zinc-700 dark:text-zinc-200"
              variants={containerMotion}
              initial="hidden"
              animate="show"
            >
              {[
              {
                id: "zibo-mining",
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
                id: "investor-prospectus",
                title: (
                  <>
                    <span className="block sm:inline">Investor</span> Prospectus
                  </>
                ),
                description: "More",
                href: "/doc.pdf",
              },
              {
                id: "be-the-next",
                title: "Be The Next",
                description: (
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>
                      Acquisition of Chemaf by Virtus Mineral Group (USA).
                    </li>
                    <li>
                      Acquisition of GEA Solar by Vinergo (Vietnam).
                    </li>
                  </ol>
                ),
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
                    name: "Mr Peter C. Orena",
                    items: [
                      {
                        icon: <Mail className="h-4 w-4" />,
                        value: "peter@zibomines.com",
                        href: "mailto:peter@zibomines.com",
                      },
                      {
                        icon: <Phone className="h-4 w-4" />,
                        value: "+243 821 816 662",
                        href: "tel:+243821816662",
                      },
                      {
                        icon: <Phone className="h-4 w-4" />,
                        value: "+1 516 504 5719",
                        href: "tel:+15165045719",
                      },
                    ],
                  },
                ],
            
              },
              // {
              //   title: "Be The Next",
              //   //   "Un contact.",
              //   // href: "https://be-the-next.com/",
              //   kind: "contact",
              //   contacts: [
              //     {
              //       name: "Senator Bernard Muhindo",
              //       items: [
              //         {
              //           icon: <Mail className="h-4 w-4" />,
              //           value: "bernard.muhindo@pm.me",
              //           href: "mailto:bernard.muhindo@pm.me",
              //         },
              //         {
              //           icon: <Phone className="h-4 w-4" />,
              //           value: "+243 813 991 155",
              //           href: "tel:+243813991155",
              //         },
              //       ],
              //     },
              //     {
              //       name: "Peter Orena",
              //       items: [
              //         {
              //           icon: <Mail className="h-4 w-4" />,
              //           value: "peter@zibomines.com",
              //           href: "mailto:peter@zibomines.com",
              //         },
              //         {
              //           icon: <Phone className="h-4 w-4" />,
              //           value: "+243 821 816 662",
              //           href: "tel:+243821816662",
              //         },
              //         {
              //           icon: <Phone className="h-4 w-4" />,
              //           value: "+1 516 504 5719",
              //           href: "tel:+15165045719",
              //         },
              //       ],
              //     },
              //   ],
            
              //   },
              ].map((item) => (
              <motion.div
                key={item.id}
                className="md:space-y-1 space-y-0"
                variants={itemMotion}
              >
                <div className="flex flex-wrap items-center gap-4">
                <div className="relative inline-block overflow-hidden">
                <div className="md:max-w-4xl w-full font-poppins text-5xl font-semibold leading-tight tracking-tight  lg:text-8xl drop-shadow-2xl">
  {item.title}
</div>

  {/* Reflet qui passe */}
  {/* <div className="absolute inset-0 -translate-x-full animate-[shine_2.5s_infinite] bg-linear-to-r from-transparent via-white/50 to-transparent blur-sm"></div> */}
</div>



                  {!item.kind && item.title !== "Unlocked deals" && (
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
                <div className="md:text-base text-xs text-zinc-600 dark:text-zinc-300">
                  {item.title === "Be The Next" && (
                    <div className="mb-1 flex items-center text-xl md:text-4xl gap-1 pl-2  font-semibold uppercase tracking-wide ">
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                      <span>Unlocked deals</span>
                    </div>
                  )}
                  <div className={item.title === "Be The Next" ? "pl-6" : undefined}>
                    {item.description}
                  </div>
                </div>
                {item.kind === "contact" && item.contacts ? (
                  <div className="mt-3 space-y-1 text-base">
                    {item.title === "Be The Next" && (
                      <div className="flex items-center gap-1 pl-2 text-xl md:text-4xl font-semibold uppercase tracking-wide ">
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                        <span>Contact</span>
                      </div>
                    )}
                    <div className={item.title === "Be The Next" ? "pl-6 " : undefined}>
                      {item.contacts.map((person) => (
                        <div key={person.name} className="">
                          <div className=" font-bold text-white/80 font-poppins text-sm  md:text-base space-x-5">
                            {person.name}
                          </div>
                          <div className="space-y-1">
                            {person.items.map((contact, index) => (
                              <motion.a
                                key={`${person.name}-${contact.value}-${contact.href}-${index}`}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white transition-colors hover:text-white"
                                initial={{ opacity: 0, x: 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 2.4, delay: index * 1.45 }}
                              >
                                <span className="text-amber-200">
                                  {contact.icon}
                                </span>
                                <span className="md:text-sm text-xs">
                                  {contact.value}
                                </span>
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
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
