"use client";
import { Button, useDisclosure } from "@nextui-org/react";
import React, { useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import ModalValoration from './ModalValoration';
import { useValorationsStore } from "@/store/valorationsStore";
import { useSession } from "next-auth/react";
import ButtonAnimate from '../../ui/button-animate/ButtonAnimate';

function ButtonAddValoration({teacherId}:{teacherId:string}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {existValoration, getExistValoration}= useValorationsStore()
  const {data:session} =useSession()
  useEffect(() => {
    getExistValoration(teacherId)
    
  }, [getExistValoration, teacherId]);
  
  return (
    <div>
      
      {
        session ? <><Button
        isDisabled={existValoration}
          onClick={onOpen}
          startContent={<IoIosAddCircle className="text-xl" />}
          size="lg"
          className=" bg-gradient-to-tr from-primary to-secondary text-white shadow-sm text-xs lg:text-sm py-5 font-bold my-1"
        >
          Agregar Valoración
        </Button>
        <ModalValoration isOpen={isOpen} onOpenChange={onOpenChange} /></> :  <Button
      isDisabled={existValoration}
        onClick={onOpen}
        startContent={<IoIosAddCircle className="text-xl" />}
        size="lg"
        className="bg-gradient-to-tr from-primary to-secondary text-white shadow-sm text-xs lg:text-sm py-5 font-bold my-1"
      >
        Inicia sesión para valorar
      </Button>
      }
      
     
    </div>
  );
}

export default ButtonAddValoration;
