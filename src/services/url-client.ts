import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "8a275dde2a4f416e8931d049b981d6c4",
  },
});

export default instance;
