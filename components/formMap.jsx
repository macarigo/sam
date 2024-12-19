'use client'

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for marker icon issues
import L, { map, marker } from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const customIcon = L.icon({
    iconUrl: '/sam_logo.png', // Replace with the path to your custom icon image
    iconSize: [30, 40], // Size of the icon [width, height]
    iconAnchor: [15, 40], // Anchor point of the icon (coordinates relative to iconSize)
    popupAnchor: [0, -40], // Point from which the popup opens (relative to the icon anchor)
});

export default function Map ({setGetLocation, getLocation, mapClick}){

    const CenterMapOnUserLocation = ({ location }) => {
        const map = useMap();
    
        useEffect(() => {
            if (location) {
                map.setView(location, 15); // Center map on user's location with a zoom level of 15
                setGetLocation(location);
            }
        }, [location, map]);
    
        return null;
    };
    
    
    
        
    let [defaultPosition, setDefaultPosition] = useState([41.15, -8.61024]); // Default location: Puortoo
    const [markerPosition, setMarkerPosition] = useState(null);

    useEffect(() => {

        if(mapClick) {
            console.log("map click if, get location: " + getLocation);
            setDefaultPosition(getLocation);
            setMarkerPosition(getLocation);
            return;
        }
        // Request user's location using Geolocation API
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                setDefaultPosition([latitude, longitude]);
                setMarkerPosition([latitude, longitude]); // Update position with user's location
            },
            (err) => {
                console.error('Error getting location:', err);
                alert('Could not fetch location. Please allow location access.');
                setDefaultPosition([51.505, -0.09]); // Default position (London) if user denies or fails
            }
        );
    }, []);

    function MapEventHandler() {
        useMapEvent('click', (event) => {
            console.log("Map clicked at:", event.latlng); // Log the clicked coordinates
            const { lat, lng } = event.latlng; // Extract lat/lng from the event
            setMarkerPosition([lat, lng]); // Set the new marker position
            setGetLocation([lat, lng]); 
            setDefaultPosition([lat, lng]);
        });
    }



    return (
            <MapContainer className='w-full h-full rounded-md shadow-md'
                center={defaultPosition}
                zoom={20}
            >
                <CenterMapOnUserLocation location={defaultPosition} />
                <MapEventHandler />
                <TileLayer
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom="20"
                    minZoom="10"
                />
                
                {markerPosition && (
                    <Marker 
                        position={markerPosition}
                        icon={customIcon}>
                        <Popup>
                            Your selected coordinates: <br />
                            Lat: {markerPosition[0]}, Lng: {markerPosition[1]}
                        </Popup>
                    </Marker>
                )}
                
            </MapContainer>

    );
};


