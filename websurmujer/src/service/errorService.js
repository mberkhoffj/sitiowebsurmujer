import Vue from "vue";

export default {
  onError(data) {
    var obj = {};
    if (data.status_code >= 400 && data.status_code < 500) {
      if (data.type === 1) {
        if (typeof data.detail === "object") {
          if (data.detail["message"]) {
            if (Object.keys(data.detail).length === 1) {
              // Vue.toasted.error(data.detail.message);
              Vue.toasted.error(data.description);
            } else {
              obj["message"] = data.detail.message;
              obj["fields"] = data.detail;
            }
          } else {
            obj["message"] =
              "Los siguientes campos se encuentran incompletos o con algún error:";
            obj["fields"] = data.detail;
          }
        }
        if (typeof data.detail === "string") {
          // Vue.toasted.error(data.detail);
          Vue.toasted.error(data.description);
        }
      }
      if (data.type === 0) {
        // Vue.toasted.error(data.detail);
        Vue.toasted.error(data.description);
      }
    }
    if (data.status_code >= 500) {
      if (data.type === 1) {
        if (typeof data.detail === "object") {
          obj["message"] =
            "Los siguientes campos se encuentran incompletos o con algún error:";
          obj["fields"] = data.detail;
        }
        if (typeof data.detail === "string") {
          obj["redirect"] = true;
          // Vue.toasted.error(data.detail);
          Vue.toasted.error(data.description);
        }
      }
      if (data.type === 0) {
        obj["redirect"] = true;
        // Vue.toasted.error(data.detail);
        Vue.toasted.error(data.description);
      }
    }
    return obj;
  },
};
