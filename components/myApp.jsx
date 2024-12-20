"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from 'react';
import Card from "../components/card";


const Map = dynamic(() => import("../components/homeMap"), { ssr: false });
const NewForm = dynamic(() => import("../components/modalNewForm"), { ssr: false });

export default function myApp() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const [getLocation, setGetLocation] = useState([]);
    const [mapClick, setMapClick] = useState(false);
    const [closestOccurrences, setClosestOccurrences] = useState([]);
    const [sidePanelActive, setSidePanelActive] = useState(false);

    const fetchClosestOccurrences = async () => {

        const payload = {
            locationLat: getLocation[0],
            locationLng: getLocation[1],
        }

        console.log("FETCHING");

        try {
            const response = await fetch('https://18ae-13-60-190-47.ngrok-free.app/api/closestOccurrences', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "ngrok-skip-browser-warning": "69420"
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

    const toggleSidePanel = () => {
        setSidePanelActive(!sidePanelActive);
    }

    useEffect(() => {
        fetchClosestOccurrences();
    }, [getLocation])

    const SidePanelButton = ({ sidePanelActive, togg }) => {

        if (!sidePanelActive) {
            return (

                <div onClick={toggleSidePanel} className="flex justify-center align-center items-center ml-3 px-2 py-3 rounded-md opacity-80 fixed w-12 h-12 md:w-20 md:h-20 z-[1000] bg-brand text-neutral-100 hover:bg-neutral-100 hover:text-brand">
                    &gt;
                </div>)

        }

        return null;

    }

    const SidePanel = ({ sidePanelActive, toggleSidePanel }) => {

        if (sidePanelActive) {
            return (

                <div id="parentTransparent" className="fixed px-3 pt-3 pb-3 ml-3 mr-3 h-3/6 rounded-md z-[1000] flex flex-col items-center">
                    <div className='container mx-auto px-4 py-4 flex justify-between items-center align-center'>
                        <p className="text-white text-2xl mb-4">Closest unsolved occurrences</p>
                        <p className='text-xl text-neutral-100 mb-4'>
                            <button onClick={toggleSidePanel}>X</button>
                        </p>
                    </div>

                    <div className="gap-12 flex flex-col rounded-md items-center overflow-scroll">
                        {closestOccurrences.map((occurrence) => (
                            <Card key={occurrence.id} title={occurrence.title} description={occurrence.description} />
                        ))}
                    </div>
                </div>)
        }

        return null;



    }

    return <div className="w-full h-full flex justify-start items-center">



        <SidePanelButton sidePanelActive={sidePanelActive} setSidePanelActive={setSidePanelActive} />
        <SidePanel sidePanelActive={sidePanelActive} toggleSidePanel={toggleSidePanel} />

        {console.log("getLocation before map is rendered on page.jsx: " + getLocation)}
        <Map refresh={refresh} onClick={openModal} getLocation={getLocation} setGetLocation={setGetLocation} setMapClick={setMapClick} />

        <NewForm isOpen={isModalOpen} onClose={closeModal} getLocation={getLocation} setGetLocation={setGetLocation} mapClick={mapClick} />
    </div>

}