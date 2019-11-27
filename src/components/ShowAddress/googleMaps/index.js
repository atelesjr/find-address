import React from 'react'

import GoogleMapReact from 'google-map-react'
import PinIcon from '../../../img/location.svg'

const APIKey = 'AIzaSyC4GatwY4tdnGNxGXREv2diHovCu-Doet8'

export default function GoogleMaps ({coordinates, apiKey}) {
    const { lat, lng } = coordinates;
    const center = { lat, lng };
   

    return (
        
        <div className="maps__gmaps" >
            <GoogleMapReact
                bootstrapURLKeys={{key: APIKey }}
                center={ center }
                defaultZoom={ 16 }
            >
                <AnyReactComponent
                    lat={lat}
                    lng={lng}
                /> 
                
            </GoogleMapReact> 
            <h2>GoogleMaps</h2>
            
        </div>
    );
};

const AnyReactComponent = () => (
    <img src={PinIcon} className="maps__gmaps-pin" alt="Location pin" />
 );

