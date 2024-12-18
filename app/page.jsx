"use client";


import dynamic from "next/dynamic";
import { useEffect, useState } from 'react';
import CreateButton from "../components/newButton";
import NewForm from "../components/modalNewForm";


const Map = dynamic(() => import ("../components/homeMap"), {ssr: false}) ;

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = async () => {
        setIsModalOpen(false);
    }

    return <div className="w-full h-full">
            <Map />
            <NewForm isOpen={isModalOpen} onClose={closeModal}/>
            <CreateButton onClick={openModal} openModal/>
        </div>

}