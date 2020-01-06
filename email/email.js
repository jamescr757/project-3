const nodemailer = require("nodemailer");
const axios = require("axios");
const teamInfo = require("../scrape/teamInfo");
require("dotenv").config();
const mjml2html = require('mjml');
const moment = require("moment");


module.exports = function deleteFuture(gameInfo, userEmail = "jamesriddle@utexas.edu") { 

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS
        }
      });

    
    const emailHTML = (gameInfo) => {
        const messageHTML = [];
        const idHash = [];

        gameInfo.forEach((game, index) => {
            const { id, awayTeam, homeTeam, awayTeamRecord, homeTeamRecord, awayTeamScore, homeTeamScore, date, loser } = game;

            const homeColor = homeTeam === loser ? "gray" : "black";
            const awayColor = awayTeam === loser ? "gray" : "black";

            if (!idHash.includes(id)) {
                idHash.push(id);

                messageHTML.push(`
                    <mj-wrapper padding="30px 0 2px 0">
                        <mj-section padding="0">
                            <mj-column>
                                <mj-text align="center" padding="5px 0" font-size="18px">${moment(date).format("dddd M/D")}</mj-text>
                            </mj-column>
                        </mj-section>
                        <mj-section padding="10px 0">
                            <mj-group width="350px">
                                <mj-column width="11%">
                                    <mj-image align="left" padding="0" src="https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/${teamInfo.teamNameInitials(awayTeam)}.png" width="30px" />
                                </mj-column>
                                <mj-column width="60%">
                                    <mj-text padding="0 5px" font-size="24px" text-transform="capitalize" color=${awayColor}>${awayTeam}</mj-text>
                                    <mj-text padding="4px 5px" font-size="12px" color="gray">(${awayTeamRecord})</mj-text>
                                </mj-column>
                                <mj-column width="27%">
                                    <mj-text align="right" padding="0 10px" font-size="24px" color=${awayColor}>${awayTeamScore || ""}</mj-text>
                                </mj-column>
                            </mj-group>
                        </mj-section>
                        <mj-section padding="10px 0">
                            <mj-group width="350px">
                                <mj-column width="11%">
                                    <mj-image align="left" padding="0" src="https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/${teamInfo.teamNameInitials(homeTeam)}.png" width="30px" />
                                </mj-column>
                                <mj-column width="60%">
                                    <mj-text padding="0 5px" font-size="24px" text-transform="capitalize" color=${homeColor}>${homeTeam}</mj-text>
                                    <mj-text padding="4px 5px" font-size="12px" color="gray">(${homeTeamRecord})</mj-text>
                                </mj-column>
                                <mj-column width="27%">
                                    <mj-text align="right" padding="0 10px" font-size="24px" color=${homeColor}>${homeTeamScore || ""}</mj-text>
                                </mj-column>
                            </mj-group>
                        </mj-section>
                `)
                
                if (loser) {
                    messageHTML.push(`
                            <mj-section padding="0">
                                <mj-column>
                                    <mj-button background-color="#4aad54" padding="0 0 5px 0" inner-padding="10px 10px" border-radius="8px" href="http://nhl-scores-757.herokuapp.com/highlight/${teamInfo.teamNameJoiner(homeTeam, awayTeam)}/date/${date}">View extended highlights</mj-button>
                                </mj-column>
                            </mj-section>
                        </mj-wrapper>
                    `);
                } else {
                    messageHTML.push(`
                            <mj-section padding="0">
                                <mj-column>
                                    <mj-button background-color="#4aad54" padding="0 0 5px 0" inner-padding="10px 10px" border-radius="8px" href="https://seatgeek.com/${teamInfo.teamFullName(homeTeam)}-tickets}">View tickets</mj-button>
                                </mj-column>
                            </mj-section>
                        </mj-wrapper>
                    `);
                }

                messageHTML.push(`<mj-divider width="350px"></mj-divider>`);
            }
        })

        return messageHTML.join('');
    }

    const htmlOutput = mjml2html(`
            <mjml>
                <mj-body>
                    ${emailHTML(gameInfo)}
                </mj-body>
            </mjml>
    `)
      
    const mailOptions = {
        from: process.env.EMAIL,
        to: userEmail,
        subject: 'Your custom scores and highlights',
        html: `${htmlOutput.html}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}