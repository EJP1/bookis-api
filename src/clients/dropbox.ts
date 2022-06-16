import axios from "axios";

// TODO: Store this in a scret manager...
const ACCESS_TOKEN =
  "sl.BJqsDGDqF8EY_LrrOMwNgcRcZh7i28IymWuqDk4GDYCvlzBXLnlPat8ppvi5HXHJ_Tj1gKcST8H-J-HGy0Km9bAV_QL_68A5KN7RbYRFozD5n1nl84c20v_6hP4Dqz7RZykJAS9l";

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
