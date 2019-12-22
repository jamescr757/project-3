import axios from "axios";
import moment from "moment";

export default {
  // Gets all books
  getYesterdayScores: function() {

    const yesterday = moment().subtract(1, 'days').format("YYYYMMDD");
    return axios.get(`/api/completed/date/${yesterday}`);
  },

  getHighlightYesterday: function(teams) {
    const yesterday = moment().subtract(1, 'days').format("YYYYMMDD");
    return axios.get(`/api/highlight/${teams}/date/${yesterday}`);
  }
};