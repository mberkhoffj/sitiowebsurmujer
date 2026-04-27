import api from "./api";

export default {
  verify_token(payload) {
    return api
      .post("/verify_token/", payload)
      .then((response) => response.data);
  },
  refresh_token(payload) {
    return api
      .post("/refresh_token/", payload)
      .then((response) => response.data);
  },
};
