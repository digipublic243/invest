"use client";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

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
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black/50 dark:text-zinc-100">
      <div className="relative overflow-hidden h-screen flex items-center justify-center">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -top-36 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ff0909]/40 blur-[96px] dark:bg-[#ff0909]/20"
            animate={{
              x: [-30, 20, -30],
              y: [0, 18, 0],
              scale: [1, 1.08, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-32 right-[-12%] h-80 w-80 rounded-full bg-indigo-300/40 blur-[96px] dark:bg-indigo-500/20"
            animate={{
              x: [20, -15, 20],
              y: [0, -14, 0],
              scale: [1, 1.12, 1],
              opacity: [0.55, 0.85, 0.55],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
        <main className="relative  w-full max-w-6xl  sm:px-10 mx-auto">
          <div className="mt-10 flex w-full justify-center max-w-6xl mx-4">
            <motion.section
              className="w-full space-y-6 text-left text-lg text-zinc-700 dark:text-zinc-200"
              variants={containerMotion}
              initial="hidden"
              animate="show"
            >
              {[
              {
                title: "Zibo Mine",
                icon: <ArrowRightIcon className="h-4 w-4" />,
                description: (
                  <>
                    One of our <span className="font-semibold text-[#ff0909]">success</span>{" "}
                    story.
                  </>
                ),
                href: "https://zibomines.com/",
              },
              {
                title: "Prospectus",
                description:
                  "En savoir plus",
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
                    label: "Adresse email",
                    value: "bernard.muhindo@sycamore.cd",
                    href: "mailto:bernard.muhindo@sycamore.cd",
                  },
                  {
                    label: "Numero de telephone",
                    value: "+243 813 991 155",
                    href: "tel:+243813991155",
                  },
                ],
              },
              ].map((item) => (
              <motion.div
                key={item.title}
                className="space-y-2"
                variants={itemMotion}
              >
                <div className="flex flex-wrap items-center gap-8">
                  <div className="max-w-4xl font-poppins text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-8xl">
                    {item.title}
                  </div>
                  {!item.kind && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-[#ff0909] transition-colors hover:text-[#ff0909] dark:text-[#ff0909] dark:hover:text-[#ff0909]"
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
                        className="block text-[#d42727] transition-colors hover:text-[#ff0909] dark:text-[#ff0909] dark:hover:text-[#ff0909]"
                      >
                        {contact.label}: {contact.value}
                      </a>
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
