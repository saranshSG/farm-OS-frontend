import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const RegisterFarm = async (values) => {
  try {
    console.log(values);
    const registerFarmInfo = await axios.post("/api/auth/registerFarm", {
      coordinates: values.coordinates,
      farmName: values.farmName,
      userId: values.userId,
      soilHealth: values.soilHealth,
      cropYield: values.cropYield,
      serviceTier: values.serviceTier,
    });

    return registerFarmInfo;
  } catch (error) {
    return error;
  }
};
