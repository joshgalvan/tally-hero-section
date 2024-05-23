import Link from "next/link"
import Reveal from "./reveal"
import { Braces, EllipsisVertical } from "lucide-react"

export default function Hero() {
  return (
    <>
      <header className="relative flex min-h-[70vh] flex-col overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-[#eff1f4] dark:border-slate-100/5 pb-16">
        <div className="px-4 sm:px-6 md:px-8">
          <div className="absolute inset-0 bg-[url(/light_grid.svg)] dark:bg-[url(/dark_grid.svg)] bg-center"></div>
          <div className="absolute inset-0 bg-center bg-gradient-to-b from-slate-50 dark:from-slate-900 from-15% to-transparent to-70%"></div>
          <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
            <div className="flex items-center gap-x-3">
              <Braces />
              <span className="font-bold text-lg">Tally</span>
            </div>
            <div className="sm:flex items-center hidden">
              <nav>
                <ul className="flex items-center gap-x-8">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                    >
                      One
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                    >
                      Two
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                    >
                      Three
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center sm:hidden">
              <EllipsisVertical />
            </div>
          </div>
          <div className="relative max-w-5xl mx-auto pt-28 lg:pt-32">
            <Reveal>
              <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
                Lorem ipsum dolor sit amet, conse ctetur adipiscing
              </h1>
            </Reveal>
            <Reveal width="100%">
              <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis
              </p>
            </Reveal>
            <Reveal width="100%">
              <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
                <Link
                  href="#"
                  className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
                >
                  Get started
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </header>
      <div className="bg-slate-100 dark:bg-slate-800 pb-40">
        <section className="text-center px-8 pt-20 sm:pt-32 md:pt-40">
          <h2 className="text-slate-900 text-4xl font-extrabold sm:text-5xl dark:text-white">
            Extra content
          </h2>
        </section>
      </div>
    </>
  )
}
