"use client";


import dynamic from "next/dynamic";
import { useEffect, useState } from 'react';
import CreateButton from "../components/newButton";
import NewForm from "../components/modalNewForm";
import Card from "../components/card";


const Map = dynamic(() => import("../components/homeMap"), { ssr: false });

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const [getLocation, setGetLocation] = useState([]);
    const [mapClick, setMapClick] = useState(false);
    const [closestOccurrences, setClosestOccurrences] = useState([]);

    const fetchClosestOccurrences = async () => {

        const payload = {
            locationLat: getLocation[0],
            locationLng: getLocation[1],
        }

        console.log("FETCHING");

        try {
            const response = await fetch('http://localhost:4000/api/closestOccurrences', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            console.log(response);

            if (response.ok) {
                console.log("RESPONSE OK");
                const data = await response.json();
                console.log(data);
                setClosestOccurrences(data);
            } else {
                console.log("closestOccurrences caquinha");
            }
        } catch (error) {
            console.log("closestOccurrences caquinha");
        }

    }

    const openModal = (mapLocation) => {
        setGetLocation(mapLocation);
        console.log("Opening Modal");
        setIsModalOpen(true);
        console.log(getLocation);
    };

    const closeModal = async () => {
        setIsModalOpen(false);
        setRefresh(refresh + 1);
    }

    useEffect(() => {
        fetchClosestOccurrences();
    }, [getLocation])

    return <div className="w-full h-full flex justify-start items-center">

        <div id="parentTransparent" className="fixed px-3 pt-3 pb-12 ml-3 h-3/6 rounded-md z-[1000] flex flex-col overflow-scroll items-center">
            <p className="px-2 py-3 text-white text-2xl rounded-md mb-4">Closest unsolved occurrences</p>
            <div className="gap-12 flex flex-col items-center">
                {closestOccurrences.map((occurrence) => (
                    <Card key={occurrence.id} title={occurrence.title} description={occurrence.description} />
                ))}
            </div>


        </div>
        {console.log("getLocation before map is rendered on page.jsx: " + getLocation)}
        <Map refresh={refresh} onClick={openModal} getLocation={getLocation} setGetLocation={setGetLocation} setMapClick={setMapClick} />

        <NewForm isOpen={isModalOpen} onClose={closeModal} getLocation={getLocation} setGetLocation={setGetLocation} mapClick={mapClick} />
        <CreateButton onClick={openModal} setMapClick={setMapClick} />
    </div>

}