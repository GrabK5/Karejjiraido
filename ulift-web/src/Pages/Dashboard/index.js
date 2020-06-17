import React, { useState } from "react";
import io from 'socket.io-client';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import "./styles.css";
import Header from "../../components/Header";
import Haversine from '../../util/Haversine';

const mapStyles = {
  width: '100%',
  height: '70%'
};

const Dashboard = props => {
  const host = `ws://${window.location.hostname}:4000`;
  const socket = useState(io(host, { transports: ['websocket'] }))[0];
  const [users, setUsers] = useState([]);
  const [position, setPosition] = useState(null);

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedUser, setSelectedUser] = useState({});

  const onMarkerClick = (prop, marker, e) => {
    setSelectedUser(prop);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  }

  const onClose = (prop) => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  }

  const updateLocation = (pos) => {
    const location = {
      lat: pos.coords.latitude,
      long: pos.coords.longitude,
    }

    setPosition(location);
    const id = localStorage.getItem("@ulift");
    const user = { id, location }
    socket.emit("send_location", user);
  }

  const calculateDistance = user => {
    const h = new Haversine(position, user.location);
    return h.distance;
  }

  const errorHandler = (e) => {
    if (e.code === 1) console.log("Acesso negado");
    else if (e.code === 2) console.log("Posição inválida");
  }

  navigator.geolocation.watchPosition(updateLocation, errorHandler, { timeout: 3000 });

  const displayUsersMarkers = () => {
    if (position) {
      return users.map((user) => {
        return (
          <Marker key={user.id} position={{
            lat: user.location.lat,
            lng: user.location.long,
          }}
            name={user.name}
            onClick={onMarkerClick}
          />
        );
      });
    }

    return null;
  };

  const displayMyMarker = () => {
    return (
      <Marker key={localStorage.getItem("@ulift")} position={{
        lat: position.lat,
        lng: position.long,
      }}
        name={"Você"}
        onClick={onMarkerClick}
      />
    );
  }

  socket.on("user_update", (data) => {
    setUsers(data);
  });

  const renderMap = () => {
    if (position !== null) {
      return (
        <Map
          google={props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{
            lat: position.lat,
            lng: position.long,
          }}
        >
          {displayMyMarker()}
          {displayUsersMarkers()}
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
            onClose={onClose}
          >
            {selectedUser.name}
          </InfoWindow>
        </Map>
      );
    }
    return null;
  }

  return (
    <>
      <Header />
      <div>
        <div id='lista'>
          {users.map(user => (
            <li key={user.id}>
              {`${user.name} - distance: ${calculateDistance(user) / 1000} km`}
            </li>
          ))}
        </div>
        {renderMap()}
      </div>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(Dashboard);