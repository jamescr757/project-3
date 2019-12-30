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

  getScoresByConference: function(conference, days, ot) {

    return axios.get(`/api/completed/conference/${conference}/${days}/${ot}`);
  },

  getFutureGamesByConference: function(conference, days) {

    return axios.get(`/api/future/conference/${conference}/${days}`);
  },
  
  getScoresByDivision: function(division, days, rival, ot) {
    
    return axios.get(`/api/completed/division/${division}/${days}/${rival}/${ot}`);
  },
  
  getFutureGamesByDivision: function(division, days, rival) {

    return axios.get(`/api/future/division/${division}/${days}/${rival}`);
  },

  getScoresByTeam: function(team, days, location, outcome, rival, ot) {

    return axios.get(`/api/completed/team/${team}/${days}/${location}/${outcome}/${rival}/${ot}`);
  },

  getFutureGamesByTeam: function(team, days, location, rival) {

    return axios.get(`/api/future/team/${team}/${days}/${location}/${rival}`);
  },

  getHighlight: function(teams, date) {
    
    return axios.get(`/api/highlight/${teams}/date/${date}`);
  }
};