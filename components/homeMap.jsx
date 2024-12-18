import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for marker icon issues
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

// Define your custom icon
const customIcon = L.icon({
    iconUrl: '/sam_logo.png', // Replace with the path to your custom icon image
    iconSize: [30, 40], // Size of the icon [width, height]
    iconAnchor: [15, 40], // Anchor point of the icon (coordinates relative to iconSize)
    popupAnchor: [0, -40], // Point from which the popup opens (relative to the icon anchor)
});

const CenterMapOnUserLocation = ({ location }) => {
    const map = useMap();

    useEffect(() => {
        if (location) {
            map.setView(location, 15); // Center map on user's location with a zoom level of 15
        }
    }, [location, map]);

    return null;
};

const Map = () => {
    const [markers, setMarkers] = useState([]);
    let [defaultPosition, setDefaultPosition] = useState([41.15, -8.61024]); // Default location: Puortoo

    console.log(navigator.geolocation);

    const fetchMarkers = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/locations'); // Replace with your API URL
            if (!response.ok) throw new Error('Failed to fetch locations');
            const data = await response.json();
            setMarkers(data); // Update state with fetched data
            console.log(data);
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    }

    useEffect(() => {
        // Request user's location using Geolocation API
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                setDefaultPosition([latitude, longitude]); // Update position with user's location
            },
            (err) => {
                console.error('Error getting location:', err);
                alert('Could not fetch location. Please allow location access.');
                setDefaultPosition([51.505, -0.09]); // Default position (London) if user denies or fails
            }
        );

        fetchMarkers();


    }, []);

    return (
        <MapContainer
            className='w-full h-full'
            center={defaultPosition}
            zoom={15}
        >

            <TileLayer
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxZoom="20"
                minZoom="10"
            />
            {markers.map((marker) => {

                if (!marker.location || !Array.isArray(marker.location) || marker.location.length !== 2) {
                    console.warn('Invalid marker location:', marker); // Debugging invalid data
                    return null; // Skip invalid markers
                }

                return (
                    <Marker 
                        key={marker.id} 
                        position={marker.location}
                        icon={customIcon}>
                        
                        <Popup>
                            {marker.title || "No title provided"}
                        </Popup>
                    </Marker>
                );

            })}
            <CenterMapOnUserLocation location={defaultPosition} />
        </MapContainer>
    );
};

export default Map;
