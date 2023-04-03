import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import styled from 'styled-components';
import { All } from '../Style/Constant/User-Style';

export default function MapsPage() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })

    console.log("isLoaded", isLoaded);


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
                        <Marker
                            position={position}
                            label="Testando"
                            options={{
                                label: {
                                    text: "Posição Testee"
                                },
                            }}
                        />
                    </GoogleMap>
                ) : (
                    <>Erro</>
                )}
            </Google>
        </All>
    )
}

const Google = styled.div`
    display: flex;
    align-items: center;
    background-color: red;
    width: 90%;
    height: 90%;
`
