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

  getScoresByCategory: function({ category, days, identifier, location, outcome, rival, ot, sort }) {

    return axios.get(`/api/completed/${category}/${identifier}/${days}/${location}/${outcome}/${rival}/${ot}/${sort}`);
  },

  getFutureGamesByCategory: function({ category, days, identifier, location, rival, sort }) {

    return axios.get(`/api/future/${category}/${identifier}/${days}/${location}/${rival}/${sort}`);
  },

  getScoresByTeam: function(team, days, location, outcome, rival, ot) {

    return axios.get(`/api/completed/team/${team}/${days}/${location}/${outcome}/${rival}/${ot}`);
  },

  getFutureGamesByTeam: function(team, days, location, rival) {

    return axios.get(`/api/future/team/${team}/${days}/${location}/${rival}`);
  },

  getHighlight: function(teams, date, type) {
    
    return axios.get(`/api/highlight/${teams}/date/${date}/${type}`);
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

  updateUserEmail: function(email, newEmail) {

    return axios.post(`/api/user-info/update-email/${email}`, { newEmail });
  },

  updateUserPassword: function(email, newPassword) {

    return axios.post(`/api/user-info/update-password/${email}`, { newPassword });
  },

  addEmail: function(data, email) {

    return axios.post(`/api/email-data/${email}`, data);
  },

  sendEmailNow: function(email) {

    return axios.get(`/api/email/${email}`);
  },

  deleteAccount: function(email) {

    return axios.delete(`/api/user-info/delete-account/${email}`);
  },
  
  deleteEmailData: function(email) {
    
    return axios.delete(`/api/email-data/${email}`);
  }
};