import { Input } from "@nextui-org/react";
import { useState } from "react";
const Searchinput = () => {
   const [title, setTitle] = useState('')
   return (
      <main className="container">
         <div className=" my-[30px] w-[340px] md:w-full lg:w-full mx-auto h-[150px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-cyan-400 to-blue-500 text-white shadow-lg">
            <Input
               type='text'
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               label="Search"
               isClearable
               radius="lg"
               classNames={{
                  label: "text-black/50 dark:text-white/90",
                  input: [
                     "bg-transparent",
                     "text-black/90 dark:text-white/90",
                     "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                     "shadow-xl",
                     "bg-default-200/50",
                     "dark:bg-default/60",
                     "backdrop-blur-xl",
                     "backdrop-saturate-200",
                     "hover:bg-default-200/70",
                     "dark:hover:bg-default/70",
                     "group-data-[focused=true]:bg-default-200/50",
                     "dark:group-data-[focused=true]:bg-default/60",
                     "!cursor-text",
                  ],
               }}
               placeholder="Type to search..."
               startContent={
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6 text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
               }
            />
         </div>
      </main>

   );
}

export default Searchinput
