import React, { useState } from 'react';
import Map from 'react-map-gl/mapbox'; // Sử dụng phiên bản mới
// import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const [viewport, setViewport] = useState({
    // width: '100vw',       // Sửa thành viewport responsive
    // height: '100vh',   
    width: '400',       // Sửa thành viewport responsive
    height: '400', 
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <div className="App">
      <Map
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onMove={evt => setViewport(evt.viewState)}
      >
        {/* Có thể thêm markers/controls ở đây */}
      </Map>
    </div>
  );
}

export default App;
