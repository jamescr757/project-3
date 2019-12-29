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

  getScoresByConference: function(conference, days) {

    return axios.get(`/api/completed/conference/${conference}/${days}`);
  },

  getFutureGamesByConference: function(conference, days) {

    return axios.get(`/api/future/conference/${conference}/${days}`);
  },
  
  getScoresByDivision: function(division, days) {
    
    return axios.get(`/api/completed/division/${division}/${days}`);
  },
  
  getFutureGamesByDivision: function(division, days) {

    return axios.get(`/api/future/division/${division}/${days}`);
  },

  getScoresByTeam: function(team, days) {

    return axios.get(`/api/completed/team/${team}/${days}`);
  },

  getFutureGamesByTeam: function(team, days) {

    return axios.get(`/api/future/team/${team}/${days}`);
  },

  getHighlight: function(teams, date) {
    
    return axios.get(`/api/highlight/${teams}/date/${date}`);
  }
};