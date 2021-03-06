import React from 'react';
import { GoogleMap, LoadScript, TrafficLayer } from '@react-google-maps/api';

const MapContainer = (props) => {

    console.log(props)
    const GoogleAPI = process.env.REACT_APP_MY_ENV

    const mapStyles = {        
    height: "35vh",
    width: "95%"};
  const defaultCenter = {
    lat: props.loadLat, 
    lng: props.loadLong
  }
  console.log(defaultCenter)
  const onLoad = trafficLayer => {
console.log('trafficLayer: ', trafficLayer)
  }
  return (
     <LoadScript
       googleMapsApiKey={GoogleAPI} >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
        <TrafficLayer
        onLoad={onLoad}
        />
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;