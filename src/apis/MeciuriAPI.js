// import { api } from "./configs/axiosConfigs";
// import { defineCancelApiObject } from "./configs/axiosUtils";

// export const MeciuriAPI = {
//   getAll: async function (cancel = false) {
//     const response = await api.request({
//       url: "/meciuri/",
//       method: "GET",
//     });

//     return response.data;
//   },
// };

// const cancelApiObject = defineCancelApiObject(MeciuriAPI);

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3002/api/v1/",
});
