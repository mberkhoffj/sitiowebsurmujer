import api from "./api";

export default {
  list_country(params = "") {
    return api
      .get(`/api/v1/country/`, {
        params: {
          fields: params,
        },
      })
      .then((response) => response.data);
  },
  list_state(countryID) {
    return api
      .get(`/api/v1/state/`, {
        params: {
          country: countryID,
        },
      })
      .then((response) => response.data);
  },
  list_city(countryID, stateID) {
    return api
      .get(`/api/v1/city/`, {
        params: {
          country: countryID,
          state: stateID,
        },
      })
      .then((response) => response.data);
  },
};
