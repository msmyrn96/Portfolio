import { Map, GoogleApiWrapper,Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
  borderRadius:"10px",
};

const MapContainer = (props) =>{
    return (
      <Map
        className='map-container'
        center={"center"}
        google={props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat:35.5075621, lng:23.9897205}}
      >
        <Marker position={{ lat:35.5075621, lng:23.9897205 }} />
      </Map>
    );
}
export default GoogleApiWrapper({
    apiKey:'AIzaSyBK3yiML_inwvn5ivXB9wolNPrUsawNwWM'
  })(MapContainer);