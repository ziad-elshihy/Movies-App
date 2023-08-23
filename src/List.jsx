/* eslint-disable react/prop-types */
import { Card, CardHeader, Image, } from "@nextui-org/react";
import Prompt from './Prompt';

const List = ({ movie }) => {
   return (
      <div className="relative max-w-[900px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
         <Card className="col-span-12 sm:col-span-4 h-[340px]" >
            <CardHeader className="absolute z-10 bottom-0 flex justify-between">
               <Prompt movie={movie} />
            </CardHeader>
            <Image
               isZoomed
               removeWrapper
               alt={movie.Title}
               className="z-0 w-full h-full object-cover"
               src={movie.Poster}
            />
         </Card>
      </div>
   )
}

export default List
