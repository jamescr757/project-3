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

  getScoresByCategory: function({ category, days, identifier, location, outcome, rival, ot }) {

    return axios.get(`/api/completed/${category}/${identifier}/${days}/${location}/${outcome}/${rival}/${ot}`);
  },

  getFutureGamesByCategory: function({ category, days, identifier, location, rival }) {

    return axios.get(`/api/future/${category}/${identifier}/${days}/${location}/${rival}`);
  },

  getScoresByTeam: function(team, days, location, outcome, rival, ot) {

    return axios.get(`/api/completed/team/${team}/${days}/${location}/${outcome}/${rival}/${ot}`);
  },

  getFutureGamesByTeam: function(team, days, location, rival) {

    return axios.get(`/api/future/team/${team}/${days}/${location}/${rival}`);
  },

  getHighlight: function(teams, date) {
    
    return axios.get(`/api/highlight/${teams}/date/${date}`);
  },

  checkUserEmail: function(email, password) {

    return axios.post(`/api/user-info/check-email`, { email, password });
  },

  newUser: function(email, password) {

    return axios.put(`/api/user-info/add-user`, { email, password });
  },

  grabUserPassword: function(email) {

    return axios.get(`/api/user-info/grab-password/${email}`);
  },

  findUserData: function(email) {

    return axios.get(`/api/email-data/${email}`);
  },

  deleteUserData: function(id) {

    return axios.delete(`/api/email-data/id/${id}/any`);
  },

  updateUserData: function(id, colName, newValue) {

    return axios.put(`/api/email-data/id/${id}/${colName}`, { newValue });
  },

  addEmail: function(data, email) {

    return axios.post(`/api/email-data/${email}`, data);
  }
};