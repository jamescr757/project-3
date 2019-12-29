import axios from "axios";
import moment from "moment";

export default {

  yesterday: moment().subtract(1, 'days').format("YYYYMMDD"),

  getYesterdayScores: function() {

    return axios.get(`/api/completed/date/${this.yesterday}`);
  },

  getScoresByDate: function(date) {

    if (date <= this.yesterday) {
      return axios.get(`/api/completed/date/${date}`);
    } else {
      return axios.get(`/api/future/date/${date}`);
    }
  },

  getScoresByConference: function(conference) {

    return axios.get(`/api/completed/conference/${conference}`);
  },

  getFutureScoresByConference: function(conference) {

    return axios.get(`/api/future/conference/${conference}`);
  },
  
  getScoresByDivision: function(division) {
    
    return axios.get(`/api/completed/division/${division}`);
  },
  
  getFutureScoresByDivision: function(division) {

    return axios.get(`/api/future/division/${division}`);
  },

  getScoresByTeam: function(team) {

    return axios.get(`/api/completed/team/${team}`);
  },

  getFutureGamesByTeam: function(team) {

    return axios.get(`/api/future/team/${team}`);
  },

  getHighlight: function(teams, date) {
    
    return axios.get(`/api/highlight/${teams}/date/${date}`);
  }
};