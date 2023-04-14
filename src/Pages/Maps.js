import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Context/Auth';
import Header from '../Components/Header';
import styled from 'styled-components';
import whatsimg from "../Images/whats.png"

//const google = window.google;

export default function MapsPage() {
    const [markers, setMarkers] = useState([]);
    const [position, setPosition] = useState([]);
    const [activeMarker, setActiveMarker] = useState(null);
    const { points, point } = useContext(AuthContext);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })

    const containerStyle = {
        width: "100vw",
        height: "100vh"
    };


    function whatsApp(data) {
        const number = parseInt(data);
        const msg = "Olá, vim através do EcoCycle";
        const url = `https://wa.me/${number}?text=${msg}`;
        window.open(url, '_blank').focus();
    };

    const svgMarker = {
        path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "purple",
        fillOpacity: 0.6,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        //labelOrigin: new google.maps.Point(0, 27)
    };

    /*  const svgMarker = {
         url: "https://cdn-icons-png.flaticon.com/512/37/37786.png",
         size: { width: 50, height: -30 },
         anchor: { x: 5, y: 0},
         scaledSize: { width: 50, height: 50}
     }; */

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    useEffect(() => {
        const urlUser = `https://maps.googleapis.com/maps/api/geocode/json?address=${point.cep}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        const promise = axios.get(urlUser);
        promise.then((res) => {
            setPosition({
                lat: parseFloat(res.data.results[0].geometry.location.lat),
                lng: parseFloat(res.data.results[0].geometry.location.lng)
            });
        })

        promise.catch((err) => {
            console.log("Deu errado no User");
        })

        points.map((c) => {
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${c.cep}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`

            const promise = axios.get(url);

            promise.then((res) => {
                const newMarker = {
                    location: {
                        lat: parseFloat(res.data.results[0].geometry.location.lat),
                        lng: parseFloat(res.data.results[0].geometry.location.lng)
                    },
                    name: c.name,
                    neighborhood: c.neighborhood,
                    phone: c.phone
                };
                setMarkers((marker) => [...marker, newMarker]);
            })

            promise.catch((err) => {
                console.log("Deu errado no Users");
            })
        })
    }, [points]);

    return (
        <>
            <Header />
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={position}
                    zoom={13}
                >
                    {markers.map((m, i) => (
                        <Marker
                            onClick={() => handleActiveMarker(i)}
                            key={i}
                            position={m.location}
                            icon={svgMarker}
                            options={{
                                label: {
                                    text: `${m.name}`,
                                    fontSize: "20px"
                                }
                            }}
                        >
                            {activeMarker === i ? (
                                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                    <MarkerStyled>
                                        <h1>Nome: {m.name}</h1>
                                        <h1>Ponto de coleta: {m.neighborhood}</h1>
                                        <h1>Entre em contato:</h1>
                                        <img onClick={() => whatsApp(m.phone)} src={whatsimg} alt='Icone whatsApp'/>
                                    </MarkerStyled>
                                </InfoWindow>
                            ) : null}
                        </Marker>
                    ))}


                </GoogleMap>
            ) : (
                <></>
            )
            }
        </>
    )
}

const MarkerStyled = styled.div`
    width: 200px;
    height: 100px;
    h1{
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 15px;
        margin-bottom: 3px;
    }
    img{
        width: 20%;
        height: 30%;
    }
`