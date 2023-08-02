import {
  SET_LATLONG,
  SET_MAP_LAYERS,
  SET_FIELD_AREA,
  SET_SOURCE,
  SET_INDICES,
  SET_DATE_RANGE,
  SET_MAP_ERROR,
  SET_HEATMAP_URL,
  SET_HEATMAP_CHOICE,
} from "../actions/types";

const initialLatLong = {
  lat: 39.8097343,
  lng: -98.5556199,
};

const initialLayers = [""];
var defaultError = "Select Area ,Indice/s and Date Range";
function MapReducer(
  state = {
    LatLong: initialLatLong,
    Map_Error: defaultError,
    Map_Download: false,
    Layers: initialLayers,
  },
  action
) {
  switch (action.type) {
    case SET_LATLONG:
      return { ...state, LatLong: action.payload };
    case SET_MAP_LAYERS:
      return { ...state, Layers: action.payload };
    case SET_FIELD_AREA:
      return { ...state, Area: action.payload };
    case SET_SOURCE:
      return { ...state, Source: action.payload };
    case SET_INDICES:
      return { ...state, Indice: action.payload };
    case SET_DATE_RANGE:
      return { ...state, Date_Range: action.payload };
    case SET_MAP_ERROR:
      return { ...state, Map_Error: action.payload };
    case SET_HEATMAP_URL:
      return { ...state, Heatmap_Url: action.payload };
    case SET_HEATMAP_CHOICE:
      return { ...state, choice: action.payload };

    default:
      return state;
  }
}

export default MapReducer;
