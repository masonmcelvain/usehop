import type { PropsWithChildren } from "react";

type KbdProps = PropsWithChildren;

export function Kbd({ children }: KbdProps) {
   return (
      <kbd className="rounded-md bg-gray-200 px-2 py-1 text-sm">{children}</kbd>
   );
}
