/* eslint-disable react/prop-types */
import { Card, CardFooter, Image } from "@nextui-org/react";
import Prompt from './Prompt';

const List = ({ movie }) => {
   return (
      <div className="relative max-w-[900px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
         <Card
            isFooterBlurred
            radius="lg"
            className="border-none col-span-12 sm:col-span-4 h-[450px] md:h-[340px] lg:h-[340px]"
         >
            <Image
               isZoomed
               removeWrapper
               alt={movie.Title}
               className="z-0 w-full h-full object-cover"
               src={movie.Poster}
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <Prompt  movie={movie} />
            </CardFooter>
         </Card>
      </div>
   )
}

export default List
