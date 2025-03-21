import { Badge, Kbd } from "@/components/data";
import Image from "next/image";
import { FaDragon, FaImage, FaKeyboard } from "react-icons/fa";

export default function Home() {
   return (
      <div className="flex flex-col space-y-8 md:space-y-16">
         <section className="flex flex-col items-center justify-between md:flex-row md:px-24 lg:px-48">
            <div className="flex flex-col items-center justify-center space-y-0 md:flex-row md:space-y-0 md:space-x-2">
               <Image
                  src="/screenshot.png"
                  alt="Screenshot of hop in action"
                  width={318}
                  height={436}
                  priority
                  className="rounded-md shadow-lg shadow-zinc-500"
               />
            </div>
            <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center md:mt-0">
               <h2 className="mb-8 font-semibold">
                  Travel at the speed of sight
               </h2>
               <a
                  className="cursor-pointer rounded-md bg-blue-500 px-4 leading-[2.5rem] font-semibold text-white hover:bg-blue-600 focus:ring-3 active:bg-blue-700"
                  href="https://addons.mozilla.org/en-US/firefox/addon/hop"
                  target="_blank"
               >
                  Install on Firefox
               </a>
               <a
                  className="cursor-pointer rounded-md bg-yellow-500 px-4 leading-[2.5rem] font-semibold text-white hover:bg-yellow-600 focus:ring-3 active:bg-yellow-700"
                  href="https://chrome.google.com/webstore/detail/hop/djdlkcbfbdebfaoakhnoienanaakgccd"
                  target="_blank"
               >
                  Install on Chrome
               </a>
            </div>
         </section>
         <section className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 md:px-24 lg:px-48">
            <Badge Icon={FaImage} text="Icon-first" />
            <Badge Icon={FaDragon} text="Drag and drop" />
            <Badge Icon={FaKeyboard} text="Power user friendly" />
         </section>
         <section className="flex flex-col items-start space-y-4 md:px-24 lg:px-48">
            <h2 className="font-semibold">Keyboard shortcuts</h2>
            <div className="grid w-full grid-cols-1 gap-x-16 md:grid-cols-2">
               <div className="flex justify-between px-2 py-4">
                  Open popup
                  <span>
                     <Kbd>alt</Kbd> + <Kbd>shift</Kbd> + <Kbd>o</Kbd>
                  </span>
               </div>
               <div className="flex justify-between border-t border-zinc-200 px-2 py-4 md:border-none">
                  Visit link 1 through 9
                  <span>
                     <Kbd>1..9</Kbd>
                  </span>
               </div>
               <div className="flex justify-between border-t border-zinc-200 px-2 py-4">
                  Visit in new tab
                  <span>
                     <Kbd>ctrl</Kbd> + <Kbd>1..9</Kbd>
                  </span>
               </div>
               <div className="flex justify-between border-t border-zinc-200 px-2 py-4">
                  Edit link
                  <span>
                     <Kbd>e</Kbd> then <Kbd>1..9</Kbd>
                  </span>
               </div>
               <div className="flex justify-between border-t border-zinc-200 px-2 py-4">
                  Create new link
                  <span>
                     <Kbd>n</Kbd>
                  </span>
               </div>
               <div className="flex justify-between border-t border-zinc-200 px-2 py-4">
                  Close popup
                  <span>
                     <Kbd>esc</Kbd>
                  </span>
               </div>
            </div>
         </section>
      </div>
   );
}
