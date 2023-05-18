import { HopIcon } from "@/components/icons";

export default function Home() {
   return (
      <div className="mx-auto w-full max-w-[80rem] px-4 md:px-6 lg:px-8">
         <div className="my-4 flex w-full items-center justify-start">
            <h1 className="text-2xl font-semibold text-slate-800">Hop</h1>
         </div>
         <div className="flex flex-col items-center justify-between md:flex-row md:px-24 lg:px-64">
            <HopIcon className="h-48 w-48" />
            <div className="flex flex-col items-center justify-center space-y-4">
               <a
                  className="cursor-pointer rounded-md bg-blue-500 px-4 font-semibold leading-[2.5rem] text-white hover:bg-blue-600 focus:ring active:bg-blue-700"
                  href="https://addons.mozilla.org/en-US/firefox/addon/hop"
                  target="_blank"
               >
                  Install Hop on Firefox
               </a>
               <a
                  className="cursor-pointer rounded-md bg-yellow-500 px-4 font-semibold leading-[2.5rem] text-white hover:bg-yellow-600 focus:ring active:bg-yellow-700"
                  href="https://chrome.google.com/webstore/detail/hop/djdlkcbfbdebfaoakhnoienanaakgccd"
                  target="_blank"
               >
                  Install Hop on Chrome
               </a>
            </div>
         </div>
      </div>
   );
}
