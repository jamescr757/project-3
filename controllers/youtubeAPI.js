const axios = require("axios");
require("dotenv").config();
const moment = require("moment");

const baseQuery = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.GOOGLE_API_KEY}&maxResults=1&q=NHL%20highlights%20`

module.exports = {
    findHighlight: function(req, res) {

        console.log(req.params.type);

        let query;
        if (req.params.type === "5") {

            const dateMonth = moment(req.params.date, "YYYYMMDD").format("MMM.");
            const dateDay = moment(req.params.date, "YYYYMMDD").format("D,");
            const dateYear = moment(req.params.date, "YYYYMMDD").format("YYYY");
    
            query = baseQuery + req.params.teams + "%20" + dateMonth + "%20" + dateDay + "%20" + dateYear;

        } else {
            const dateMonth = moment(req.params.date, "YYYYMMDD").format("M/");
            const dateDay = moment(req.params.date, "YYYYMMDD").format("D/");
            const dateYear = moment(req.params.date, "YYYYMMDD").format("YY");
    
            query = baseQuery + req.params.teams + "%20" + dateMonth + "%20" + dateDay + "%20" + dateYear;
        }

        console.log(query);

        axios.get(query)
            .then(response => {
                res.json(response.data.items)
            })
            .catch(err => {
                console.log(err);
                res.status(400)
            });
    }
};