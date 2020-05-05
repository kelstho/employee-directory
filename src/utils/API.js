import axios from "axios";

const BASEURL = "https://randomuser.me/api?nat=us&results=25";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};