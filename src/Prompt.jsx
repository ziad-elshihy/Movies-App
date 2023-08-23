/* eslint-disable react/prop-types */
import { Image, Modal, ModalContent, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
const Prompt = ({ movie }) => {
   const { isOpen, onOpen, onOpenChange } = useDisclosure();
   return (
      <>
         <Button className="text-tiny text-white bg-black/40" variant="flat" color="default" radius="lg" size="sm" onPress={onOpen}>Info</Button>
         <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
               {(onClose) => (
                  <div className=" text-center uppercase ">
                     <h2 className="font-bold text-3xl py-4">{movie.Title}</h2>
                     <div className="w-[100%] mt-2 mb-4 flex justify-center ">
                        <Image
                           isBlurred
                           width={150}
                           src={movie.Poster}
                           alt={movie.Title}
                        />
                     </div>
                     <p className="font-bold">Year: {movie.Year}</p>
                     <p className="font-bold ">Type: {movie.Type}</p>
                     <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                           Close
                        </Button>
                     </ModalFooter>
                  </div>
               )}
            </ModalContent>
         </Modal>
      </>
   )
}

export default Prompt
