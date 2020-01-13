# NHL Scores 

### Overview 

Full-stack MERN application that allows users to check scores, watch highlights, and view upcoming games for any NHL game this season. A SQL database holds all the game information, and is updated daily with scores from the previous day. 

A user can look at scores by date or whichever category they want. The default home view is to show the scores from yesterday. From there, the user can change the date to view scores/highlights from another day. 

If the user wants to look at a certain team/division/conference games, they can do that as well. These games are spread out over multiple dates, so the user can filter the results by home/away, win/loss, rival, or OT.   

The highlights are from the official NHL and TSN channels, so they are the extended ~9 minute or ~5 minute highlights, respectively. These videos are delivered from a YouTube API. 

Games that haven't been played yet have a link to look at tickets for that specific game. The external link leads to the major ticket broker Seat Geek. 

If a user wants to, they can sign up for an email newsletter. The newsletter contains scores and/or future games from a user-specified team(s)/division/conference. The newsletter is sent out based on a frequency set by the user. The games in the newsletter have a link to view the highlights or tickets. A member can follow several teams and will at most receive one email per day. The program also removes duplicate games before sending the email. The server processes user's settings and sends out emails between 2-4 am CST. 

### Deployed Link

https://nhl-scores-757.herokuapp.com/

### External Libraries 

Material-UI, reactstrap, sequelize, moment, classnames, react-datepicker, nodemailer, and mjml