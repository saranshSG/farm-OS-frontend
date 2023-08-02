import {
  SET_LATLONG,
  SET_MAP_LAYERS,
  SET_FIELD_AREA,
  SET_SOURCE,
  SET_INDICES,
  SET_DATE_RANGE,
  SET_MAP_ERROR,
  SET_HEATMAP_URL,
  SET_HEATMAP_CHOICE
} from "./types";

export const setLatLong = (latLong) => {
  return {
    type: SET_LATLONG,
    payload: latLong,
  };
};

export const setMapLayers = (layers) => {
  return {
    type: SET_MAP_LAYERS,
    payload: layers,
  };
};

export const setFieldArea = (area) => {
  return {
    type: SET_FIELD_AREA,
    payload: area,
  };
};

export const setSource = (source) => {
  return {
    type: SET_SOURCE,
    payload: source,
  };
};

export const setIndices = (indice) => {
  return {
    type: SET_INDICES,
    payload: indice,
  };
};
export const setDateRange = (range) => {
  return {
    type: SET_DATE_RANGE,
    payload: range,
  };
};
export const setMapError = (error) => {
  return {
    type: SET_MAP_ERROR,
    payload: error,
  };
};

export const setHeatMapURL = (url) => {
  return {
    type: SET_HEATMAP_URL,
    payload: url,
  };
};

export const setHeatMapChoice = (choice) => {
  return {
    type: SET_HEATMAP_CHOICE,
    payload: choice,
  };
};
