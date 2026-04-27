import simpleRequest from './simpleRequestMindicador';

export default {
    eco_indicators() {
        return simpleRequest.get(`/api/`).then(response => response.data);
    },
};