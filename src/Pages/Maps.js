import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import styled from 'styled-components';
import { All } from '../Style/Constant/User-Style';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MapsPage() {

    const [markers, setMarkers] = useState([]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })

    /*  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
 
     ceps.map(async cep => {
         Geocode.fromAddress(cep).then(
             (response) => {
                 const { lat, lng } = response.results[0].geometry.location;
                 setMarkers([...markers, { lat, lng }]);
             },
             (error) => {
                 console.error(error);
             }
         );
     })
     */

     const ceps = ["88111350", "41620840"];

  /*   useEffect(() => {

        ceps.map((c) => {
            console.log("C", c)
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${c}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`

            const promise = axios.get(url);

            promise.then((res) => {
                console.log("Deu certo", res.data.results[0].geometry.location);
                const teste = res.data.results[0].geometry.location;
                setMarkers([...markers, teste]);
            })

            promise.catch((err) => {
                console.log("Deu errado", err)
            })
        })
    }, []);
 */
    console.log("markers", markers);

    const containerStyle = {
        width: "100vw",
        height: "50vh"
    };

    const position = {
        lat: -27.564684935820964,
        lng: -48.622699337379494
    };

    return (
        <All>
            <Google>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={position}
                        zoom={19}
                    >
                      {/*  {markers.map((m, i) => (
                            <MarkerF
                                key={i}
                                position={m}
                                label="Testando"
                                options={{
                                    label: {
                                        text: "Posição teste"
                                    },
                                }}
                            />
                        ))} */}
                    </GoogleMap>
                ) : (
                    <>Erro</>
                )}
            </Google>
        </All>
    )
}

const Google = styled.div`
    /* display: flex;
    align-items: center;
    background-color: red;
    width: 90%;
    height: 90%; */
`
