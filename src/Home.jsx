import { CircularProgress, } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Movies from "./Movies";
import List from "./List";
const Home = () => {
   // eslint-disable-next-line no-unused-vars
   const [movies, setMovies] = useState(Movies)
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 1700)
   }, [])
   return (
      <main className="py-[50px]">
         {loading
            ? <CircularProgress aria-label="Loading..." className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] scale-150" />
            : <div className="cursor-pointer container mx-auto px-[15px] grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
               {movies.map((movie) => {
                  return (
                     <List key={movie.imdbID} movie={movie} />
                  )
               })}
            </div>}
      </main>

   )
}

export default Home
