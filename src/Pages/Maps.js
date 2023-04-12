import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { All } from '../Style/Constant/User-Style';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Context/Auth';
import Header from '../Components/Header';

export default function MapsPage() {
    const [markers, setMarkers] = useState([]);
    const [position, setPosition] = useState([]);
    const { points, point } = useContext(AuthContext);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })

    const containerStyle = {
        width: "100vw",
        height: "100vh"
    };

    useEffect(() => {
        const urlUser = `https://maps.googleapis.com/maps/api/geocode/json?address=${point.cep}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        const promise = axios.get(urlUser);
        promise.then((res) => {
            console.log("res", res.data.results[0].geometry.location);
            setPosition(res.data.results[0].geometry.location);
        })

        promise.catch((err) => {
            console.log("Deu errado no User");
        })

        points.map((c) => {
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${c.cep}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`

            const promise = axios.get(url);

            promise.then((res) => {
                const teste = { location: res.data.results[0].geometry.location, name: c.name };
                setMarkers((marker) => [...marker, teste]);
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
                    zoom={19}
                >
                    {markers.map((m, i) => (
                        <MarkerF
                            key={i}
                            position={m.location}
                            label="Testando"
                            options={{
                                label: {
                                    text: `${m.name}`
                                },
                            }}
                        />
                    ))}
                </GoogleMap>
            ) : (
                <></>
            )
            }
        </>
    )
}

