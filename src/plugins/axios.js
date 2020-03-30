import * as axios from "axios";
import MockAdapter from "axios-mock-adapter";

const MockableAxios = {};

// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://themui-backend.herokuapp.com";

MockableAxios.install = function(Vue) {
  axios.defaults.baseURL = BASE_URL;

  let mock = new MockAdapter(axios);

  mock.onPost("/upload").reply(function() {
    console.log("Mocked upload");
    return [
      200,
      {
        filename: "a filename"
      }
    ];
  });

  mock.onPost(/\/upload\/\.+/).reply(function(config) {
    console.log("Mocked upload with filename", config);
    return [200, {}];
  });

  Vue.prototype.$axios = axios;
};

export default MockableAxios;
