import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import Control from "react-leaflet-custom-control";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet";

import domtoimage from "dom-to-image";

import "./mapForm.css";

const MapForm = ({
  height,
  width,
  zoom,
  mapControls,
  heatMapControls,
  geoJsonControls,
  setArea,
  setMapLayer,
  mapLayer,
  coords,
}) => {
  const varLatLong = useSelector((state) => state.Map.LatLong);
  const position = [37.0902, 95.7129];
  const [map, setMap] = useState(null);
  const [geoJsonData, setGeoJsonData] = useState(null);
  let layer_canvas = mapLayer;
  const fileRef = useRef(null);
  const mapStyles = {
    height: height,
    width: width,
  };

  useEffect(() => {
    var coordinates = [coords.lat, coords.lng];
    if (map && coords) map.setView(coordinates, 15);
    console.log(coords);
  }, [map, coords]);

  useEffect(() => {
    if (geoJsonData) {
      L.geoJSON(geoJsonData).addTo(map);
    }
  }, [geoJsonData, map]);

  function handleCreated(e) {
    const { layerType, layer } = e;

    if (layerType === "polygon") {
      const { _leaflet_id } = layer;
      setMapLayer((layers) => [
        ...layers,
        { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
      ]);

      var seeArea = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
      var temp = seeArea * 0.0002471054; //square meters to acers
      var area = temp.toFixed(2);
      setArea(area);
    }
  }

  const handleDeleted = (e) => {
    const {
      layers: { _layers },
    } = e;

    Object.values(_layers).map(({ _leaflet_id }) => {
      return setMapLayer((layers) =>
        layers.filter((l) => l.id !== _leaflet_id)
      );
    });
  };

  const loadGeoJson = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      let arr = JSON.parse(text);
      setGeoJsonData(arr);
    };
    reader.readAsText(e.target.files[0]);
  };

  function downloadGeoJson() {
    var filename = "Geo_Json" + new Date().toJSON().slice(0, 10) + ".json";
    let canvasContents = JSON.stringify(layer_canvas);
    // create a blob object representing the data as a JSON string
    let file = new Blob([canvasContents], {
      type: "application/json",
    });
    // trigger a click event on an <a> tag to open the file explorer
    let a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  const buttonClick = () => {
    fileRef.current.click();
  };

  return (
    <div className="mapsWrapper">
      <div className="mapsBlock" id={"mapsBlock"}>
        <MapContainer
          center={position}
          zoom={zoom}
          scrollWheelZoom={true}
          className="map"
          style={mapStyles}
          whenCreated={setMap}
          measureControl={true}
          downloadable={true}
        >
          <FeatureGroup className="editControlBlock">
            {mapControls ? (
              <EditControl
                position="topright"
                onCreated={(e) => {
                  handleCreated(e);
                }}
                edit={{
                  edit: false,
                }}
                onDeleted={(e) => {
                  handleDeleted(e);
                }}
                draw={{
                  polyline: false,
                  rectangle: false,
                  circle: false,
                  circlemarker: false,
                  marker: false,
                }}
              />
            ) : null}
            {geoJsonControls ? (
              <Control position="topright">
                <div
                  className="loadGeoJsonBlock"
                  onClick={(e) => {
                    buttonClick(e);
                  }}
                >
                  <i class="fas fa-file-upload"></i>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id="load"
                    onChange={(e) => {
                      loadGeoJson(e);
                    }}
                    ref={fileRef}
                  />
                </div>
                <div
                  className="downloadGeoJsonBlock"
                  onClick={() => {
                    downloadGeoJson();
                  }}
                >
                  <i class="fas fa-file-download"></i>
                </div>
              </Control>
            ) : null}
            {/* {heatMapControls ? (
              <Control position="bottomleft">
                <div
                  className="downloadGeoJsonBlock"
                  onClick={() => {
                    downloadMap();
                  }}
                >
                  <i class="fas fa-arrow-down"></i>
                </div>
              </Control>
            ) : null} */}
          </FeatureGroup>

          <TileLayer
            attribution="SenseGrass Inc "
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapForm;
