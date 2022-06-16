import axios from "axios";

// TODO: Store this in a scret manager...
const ACCESS_TOKEN =
  "sl.BJrEMyxm23i-5bWqsNK5FTsbc5IcRincJULZajXVUCvrg4_7P-B2Djkf_zF_yddPQzwaUeG9pxAjnfmvnv27NBsKeXNEtlhh7E6gr9vijrkChsuQWwutVPjOk35PPGXOyvhcSYK3";

const Client = axios.create({
  baseURL: "https://api.dropboxapi.com/2",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-type": "application/json",
  },
  transformResponse: [
    function (data) {
      return JSON.parse(data);
    },
  ],
});

export default Client;
