import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./assets/mapStyles.js";
import "./Map.css";
import { connect } from "react-redux";
import { panToTrigger } from "../actions/gpsActions";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import { panToTrigger1 } from "../actions/locationAction";
import { backupDomain } from "../backup/backupDomain";

const libraries = ["places"];
const locationMarker = `${backupDomain}/api/media/location.png`;

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 28.6304,
  lng: 77.2177,
};

function GMap(props) {
  const [stores, setStores] = useState([]);
  const [selected, setSelected] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBz82qkO3WWUUiG8SR9cz6IqQKsOMcwwpM",
    libraries,
  });

  const onMapClick = useCallback((event) => {
    setSelected(null);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // Geolocation Start
  const panTo = useCallback(({ lat, lng }) => {
    try {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(13);
    } catch (e) {
      console.log(e);
    }
  }, []);

  function Locate({ panTo }) {
    try {
      if (props.pan) {
        props.panToTrigger();
        if (props.gps.status) {
          panTo({
            lat: props.gps.coords.lat,
            lng: props.gps.coords.lng,
          });
        }
      } else if (props.pan1) {
        props.panToTrigger1();
        panTo({
          lat: props.location.lat,
          lng: props.location.lng,
        });
      }
    } catch (e) {
      console.log(e);
    }

    return <div></div>;
  }
  // Geolocation Stop
  useEffect(() => {
    setStores(props.stores);
  }, [props.stores]);

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className="map-container">
      <Locate panTo={panTo} />

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {stores
          ? Array.isArray(stores)
            ? stores.map((store) => (
                <Marker
                  key={store.storeid}
                  position={{ lat: store.Latitude, lng: store.Longitude }}
                  icon={{
                    url: locationMarker,
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(11.72, 15),
                  }}
                  onClick={() => {
                    if (props.pan) {
                      props.panToTrigger();
                    }
                    setSelected(store);
                  }}
                />
              ))
            : null
          : null}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.Latitude, lng: selected.Longitude }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div className="popup-window">
              <p className="popup-store-name">{selected.StoreName}</p>
              <p className="popup-store-type">{selected.Store_Type}</p>
              <div className="popup-stars-container">
                <Stars rating={selected.OverallRating} />
              </div>
              <Link to={`/book_now/storeid=${selected.storeid}`}>
                <div className="popup-button">Book Now</div>
              </Link>
            </div>
          </InfoWindow>
        ) : null}
        {/* gps marker */}
        {props.gps.status ? (
          <Marker
            position={{ lat: props.gps.coords.lat, lng: props.gps.coords.lng }}
            icon={{
              url: `${backupDomain}/api/media/user_location.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(10, 20),
            }}
          />
      ) : null}
        {/* gps marker */}
      </GoogleMap>
    </div>
  );
}

const mapStateToProps = (state) => ({
  location: state.searchLocation.coords,
  gps: state.gps,
  pan: state.panTrigger,
  stores: state.stores.details,
  pan1: state.panTrigger1,
});

export default connect(mapStateToProps, { panToTrigger, panToTrigger1 })(GMap);
