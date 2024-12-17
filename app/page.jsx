"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import Card from "../components/card";
import CreateButton from "../components/newButton";
import NewForm from "../components/modalNewForm";

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {

        console.log("mudei de pagina");

    }, [usePathname()])

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return <>


        <section className="flex flex-wrap flex-col mt-20 md:flex-row md:gap-4 w-full items-center place-content-evenly">
            <Card title="title"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis iaculis, elementum neque at, bibendum risus. Curabitur ac elementum."
                location="vila nova da rabona" />

            <Card title="tital"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis iaculis, elementum neque at, bibendum risus. Curabitur ac elementum."
                location="siiiiiii" />

            <Card title="title mais merda"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis iaculis, elementum neque at, bibendum risus. Curabitur ac elementum."
                location="vila nova de gaia crlll" />

            <Card title="title mais merda"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis iaculis, elementum neque at, bibendum risus. Curabitur ac elementum."
                location="vila nova de gaia crlll" />

            <Card title="title mais merda"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis iaculis, elementum neque at, bibendum risus. Curabitur ac elementum."
                location="vila nova de gaia crlll" />

            <Card title="title"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis iaculis, elementum neque at, bibendum risus. Curabitur ac elementum."
                location="vila nova da rabona" />

            <Card title="tital"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis iaculis, elementum neque at, bibendum risus. Curabitur ac elementum."
                location="siiiiiii" />

            <Card title="title mais merda"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis iaculis, elementum neque at, bibendum risus. Curabitur ac elementum."
                location="vila nova de gaia crlll" />

            <Card title="title mais merda"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis iaculis, elementum neque at, bibendum risus. Curabitur ac elementum."
                location="vila nova de gaia crlll" />

            <Card title="title mais merda"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis iaculis, elementum neque at, bibendum risus. Curabitur ac elementum."
                location="vila nova de gaia crlll" />
        </section>

        <NewForm isOpen={isModalOpen} onClose={closeModal}/>

        <CreateButton onClick={openModal} openModal/>

    </>



}