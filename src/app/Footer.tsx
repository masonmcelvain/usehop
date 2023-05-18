export function Footer() {
   return (
      <div className="my-8 flex w-full items-center justify-between">
         <a href="https://github.com/masonmcelvain" target="_blank">
            Made by{" "}
            <span className="font-semibold hover:underline">
               @masonmcelvain
            </span>
         </a>
         <div className="flex space-x-2 md:space-x-4">
            <a href="https://github.com/masonmcelvain/hop" target="_blank">
               GitHub
            </a>
            <a
               href="https://addons.mozilla.org/en-US/firefox/addon/hop"
               target="_blank"
            >
               Firefox
            </a>
            <a
               href="https://chrome.google.com/webstore/detail/hop/djdlkcbfbdebfaoakhnoienanaakgccd"
               target="_blank"
            >
               Chrome
            </a>
         </div>
      </div>
   );
}
