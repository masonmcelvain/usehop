import { HopIcon } from "@/components/icons";

export function Header() {
   return (
      <div className="my-8 flex w-full items-center justify-start">
         <HopIcon className="h-14 w-14" />
         <h1 className="ml-4 font-semibold">Hop</h1>
         <a
            className="ml-auto text-lg"
            href="https://github.com/masonmcelvain/hop"
            target="_blank"
         >
            GitHub
         </a>
      </div>
   );
}
