"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import Card from "../../components/card";
import CreateButton from "../../components/newButton";
import NewForm from "../../components/modalNewForm";

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [occurencies, setOccurencies] = useState([]);

    const fetchCards = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/occurencies'); // Replace with your API URL
                if (!response.ok) throw new Error('Failed to fetch cards');
                const data = await response.json();
                setOccurencies(data.reverse()); // Update state with fetched data
                console.log(data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        }

    useEffect(() => {

        fetchCards();

    }, [])

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = async () => {
        setIsModalOpen(false);
        fetchCards();
    };

    return <div className='w-4/6'>


        <section className="flex flex-wrap flex-col sm:flex-row sm:gap-4 w-full items-center justify-between place-content-evenly pt-8">

            {occurencies.map((occurence) => (
                <Card key={occurence.id} title={occurence.title} description={occurence.description} />
            ))}

            
        </section>

        <NewForm isOpen={isModalOpen} onClose={closeModal}/>

        <CreateButton onClick={openModal}/>

    </div>



}