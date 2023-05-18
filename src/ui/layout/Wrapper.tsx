export function Wrapper({ children }: React.PropsWithChildren) {
   return (
      <div className="mx-auto w-full max-w-[80rem] px-4 md:px-6 lg:px-8">
         {children}
      </div>
   );
}
