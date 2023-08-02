import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterFarm } from "../registerFarmAction";
import logo from "../../images/logo.png";
import spinner from "../../assests/spinner.gif";
import SoilHealthForm from "./soilHealthForm";
import CropYeildForm from "./cropYieldForm";
import ContainerDimensions from "react-container-dimensions";
import MapForm from "./mapForm";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./farmForm.css";

const FarmForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = useSelector((state) =>
    state.User.user_verification.user
      ? state.User.user_verification.user._id
      : null
  );
  const [registerError, setRegisterError] = useState();
  const [loader, setLoader] = useState(false);

  const [soilHealth1, setSoilHealth1] = useState({
    date: new Date(),
    soil_moisture: "",
    organic_carbon: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
  });
  const [soilHealth2, setSoilHealth2] = useState({
    date: new Date(),
    soil_moisture: "",
    organic_carbon: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
  });
  const [soilHealth3, setSoilHealth3] = useState({
    date: new Date(),
    soil_moisture: "",
    organic_carbon: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
  });
  const [soilHealthCount, setSoilHealthCount] = useState(1);

  const [cropYield1, setCropYield1] = useState({
    crop_type: "",
    crop_cycle_start: new Date(),
    crop_cycle_end: new Date(),
    yield: "",
  });

  const [cropYield2, setCropYield2] = useState({
    crop_type: "",
    crop_cycle_start: new Date(),
    crop_cycle_end: new Date(),
    yield: "",
  });
  const [cropYield3, setCropYield3] = useState({
    crop_type: "",
    crop_cycle_start: new Date(),
    crop_cycle_end: new Date(),
    yield: "",
  });

  const [cropYieldCount, setCropYieldCount] = useState(1);

  const [geoArea, setGeoArea] = useState(null);
  const [mapLayer, setMapLayer] = useState([]);

  const [coords, setCoords] = useState({
    lat: 41.565321,
    lng: -89.033712,
  });

  const [address, setAddress] = useState("");
  const [farmName, setFarmName] = useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latlong = await getLatLng(results[0]);
    console.log("latlong");
    console.log(latlong);
    setAddress(value);

    var coordinates = {
      lat: latlong.lat,
      lng: latlong.lng,
    };
    setCoords(coordinates);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let soilH = [];
      let cropY = [];

      if (soilHealth1.nitrogen) {
        soilH.push(soilHealth1);
      }

      if (soilHealth2.nitrogen) {
        soilH.push(soilHealth2);
      }

      if (soilHealth3.nitrogen) {
        soilH.push(soilHealth3);
      }

      if (cropYield1.crop_type) {
        cropY.push(cropYield1);
      }
      if (cropYield2.crop_type) {
        cropY.push(cropYield2);
      }
      if (cropYield3.crop_type) {
        cropY.push(cropYield3);
      }

      let data = {
        coordinates: mapLayer[0].latlngs,
        farmName: farmName,
        userId: id,
        soilHealth: soilH,
        cropYield: cropY,
        serviceTier: "standard",
      };

      console.log(data);

      if (data) {
        console.log("data" + data);
        setLoader(true);
        let response = await RegisterFarm(data);
        if (response) {
          console.log(response);
          //dispatch(register_user(response));
          setLoader(false);
          navigate("/");
        }
      }
    } catch (err) {
      setLoader(false);
      if (err.response) {
        setRegisterError(err.response.data.message);
      } else {
        setRegisterError(err.message);
      }
    }
  };

  const show = () => {
    let soilH = [];
    let cropY = [];

    if (soilHealth1.nitrogen) {
      soilH.push(soilHealth1);
    }

    if (soilHealth2.nitrogen) {
      soilH.push(soilHealth2);
    }

    if (soilHealth3.nitrogen) {
      soilH.push(soilHealth3);
    }

    if (cropYield1.crop_type) {
      cropY.push(cropYield1);
    }
    if (cropYield2.crop_type) {
      cropY.push(cropYield2);
    }
    if (cropYield3.crop_type) {
      cropY.push(cropYield3);
    }

    let data = {
      coordinates: coords,
      farmName: farmName,
      userId: "624c2e3516adfb2f8cff08d9",
      soilHealth: soilH,
      cropYield: cropY,
      serviceTier: "standard",
    };

    console.log(data);
  };

  return (
    <div className="registerFarmFormWrapper  py-2">
      <div className="registerFarmFormBlock  lg:max-w-full max-w-sm">
        <form
          className="registerFarmForm px-8 lg:px-14 pt-5 pb-6 "
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="loginFromLogoBlock flex flex-col items-center ">
            <img className="loginFormLogoImg" src={logo} alt="logo" />
            <div className="loginFormIntroTag">
              <b>FARM </b>Registration
            </div>
          </div>
          <div className="mapFormContainer mb-18">
            <div className="searchAndLabelContainer  lg:flex  lg:justify-between py-2">
              <div>
                <label
                  className="block text-lg font-bold mb-2"
                  for="farmCoordinates"
                >
                  Farm Coordinates
                </label>
              </div>
              <div className="w-full lg:w-80">
                <div className="registerFarmSearchlocationBlock w-full">
                  <div className="registerFarmInputLocationBlock ">
                    <PlacesAutocomplete
                      value={address}
                      onChange={setAddress}
                      onSelect={handleSelect}
                    >
                      {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading,
                      }) => (
                        <div>
                          <input
                            {...getInputProps({
                              placeholder: "Search Field Location...",
                              className: "inputLocationInputField",
                            })}
                          />
                          <div className="autocomplete_dropdown_container lg:max-w-48 max-w-full">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion, index) => {
                              const className = suggestion.active
                                ? "suggestion-item--active"
                                : "suggestion-item";
                              // inline style for demonstration purpose
                              const style = suggestion.active
                                ? {
                                    backgroundColor: "#2d3436",
                                    cursor: "pointer",
                                  }
                                : {
                                    backgroundColor: "white",
                                    cursor: "pointer",
                                  };
                              return (
                                <div
                                  key={index}
                                  {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                  })}
                                >
                                  <span>{suggestion.description}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                  </div>
                </div>
              </div>
            </div>

            <ContainerDimensions>
              {({ width, height }) => (
                <MapForm
                  height={height}
                  width={width}
                  zoom={5}
                  mapControls={true}
                  heatMapControls={true}
                  heatMap={true}
                  geoJsonControls={true}
                  setArea={(val) => {
                    setGeoArea(val);
                  }}
                  setMapLayer={(val) => {
                    setMapLayer(val);
                  }}
                  mapLayer={mapLayer}
                  coords={coords}
                />
              )}
            </ContainerDimensions>

            <div className="areaNameContainer lg:flex lg:justify-between my-2 px-2 font-bold">
              <div>{geoArea ? "Total Area : " + geoArea + " Acers" : null}</div>
              <div>
                {geoArea ? (
                  <div className="flex justify-between ">
                    <label>Farm Name :</label>
                    <input
                      className="farmNameInputField"
                      id="yield"
                      type="text"
                      placeholder="Name"
                      onChange={(e) => {
                        setFarmName(e.target.value);
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="soilcropContainer lg:flex lg:justify-between ">
            <div className="lg:py-4 lg:px-4 mt-40 mb-4  lg:mb-1 lg:my-24">
              <div className="  flex justify-between ">
                <label
                  className="block text-lg font-bold mb-2"
                  for="soilHealth"
                >
                  Soil Health Information
                </label>
                <div
                  onClick={() => {
                    if (soilHealthCount < 3) {
                      setSoilHealthCount(soilHealthCount + 1);
                    }
                  }}
                >
                  {soilHealthCount < 3 ? (
                    <i className="fa-solid fa-plus cursor-pointer"></i>
                  ) : null}
                </div>
              </div>
              {soilHealthCount > 0 && soilHealthCount < 4 ? (
                <div className="reusableContainer h-56">
                  <SoilHealthForm
                    setSoilHealth={(val) => {
                      setSoilHealth1(val);
                    }}
                    soilHealth={soilHealth1}
                  />
                </div>
              ) : null}
              {soilHealthCount > 1 && soilHealthCount < 4 ? (
                <div className="reusableContainer h-56">
                  <SoilHealthForm
                    setSoilHealth={(val) => {
                      setSoilHealth2(val);
                    }}
                    soilHealth={soilHealth2}
                  />
                </div>
              ) : null}
              {soilHealthCount > 2 && soilHealthCount < 4 ? (
                <div className="reusableContainer h-56">
                  <SoilHealthForm
                    setSoilHealth={(val) => {
                      setSoilHealth3(val);
                    }}
                    soilHealth={soilHealth3}
                  />
                </div>
              ) : null}
            </div>

            <div className="lg:py-4 lg:px-4 lg:mt-24">
              <div className="flex justify-between">
                <label
                  className="block text-lg font-bold mb-2"
                  for="soilHealth"
                >
                  Crop Yield Information
                </label>
                <div
                  onClick={() => {
                    if (cropYieldCount < 3) {
                      setCropYieldCount(cropYieldCount + 1);
                    }
                  }}
                >
                  {cropYieldCount < 3 ? (
                    <i className="fa-solid fa-plus cursor-pointer"></i>
                  ) : null}
                </div>
              </div>
              {cropYieldCount > 0 && cropYieldCount < 4 ? (
                <div className="reusableContainer h-56">
                  <CropYeildForm
                    setCropYield={(val) => {
                      setCropYield1(val);
                    }}
                    cropYield={cropYield1}
                  />
                </div>
              ) : null}
              {cropYieldCount > 1 && cropYieldCount < 4 ? (
                <div className="reusableContainer h-56">
                  <CropYeildForm
                    setCropYield={(val) => {
                      setCropYield2(val);
                    }}
                    cropYield={cropYield2}
                  />
                </div>
              ) : null}
              {cropYieldCount > 2 && cropYieldCount < 4 ? (
                <div className="reusableContainer h-56">
                  <CropYeildForm
                    setCropYield={(val) => {
                      setCropYield3(val);
                    }}
                    cropYield={cropYield3}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div
            className="invalid-feedback text-center text-red-500 text-xs px-2 py-2  pt-1 "
            style={registerError ? { display: "block" } : {}}
          >
            {registerError ? registerError : null}
          </div>

          {loader ? (
            <div className="flex justify-center">
              <img className="w-16" src={spinner} alt="spinner" />
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                className="os_button py-1 w-full  text-lg font-bold lg:h-3/4  mx-2 rounded"
                type="submit"
                onClick={() => {
                  show();
                }}
              >
                Register Farm
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FarmForm;
