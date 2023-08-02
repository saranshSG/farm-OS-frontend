import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const RegisterUser = async (values) => {
  console.log(values);
  const registerInfo = await axios.post("api/auth/register", {
    email: values.email,
    password: values.password,
    firstname: values.firstname,
    lastname: values.lastname,
    phone: values.phone,
  });

  return registerInfo.data;
};
