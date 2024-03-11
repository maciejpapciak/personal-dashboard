import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import React from 'react';

export default function ForecastMap({lat, lon}: {lat:number, lon:number}){


    React.useEffect(() => {
        
    }, [lat, lon])

    return(
        <div className='w-full col-span-4 m-2 p-4'>
            
            <MapContainer center={[lat, lon]} zoom={11} scrollWheelZoom={true} className='w-full h-[calc(100vh-150px)]'>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lon]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}