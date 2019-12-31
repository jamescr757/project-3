# NHL Scores and Highlights

### Overview 

Full-stack MERN application that allows users to check scores, watch highlights, and view upcoming games for any NHL game this season. A SQL database holds all the game information, and is updated daily with scores from the previous day. 

A user can look at scores by date or whichever category they want. The default home view is to show the scores from yesterday. From there, the user can change the date to view scores/highlights from another day. 

If the user wants to look at a certain team/division/conference games, they can do that as well. These games are spread out over multiple dates, so the user can filter the results by home/away, win/loss, rival, or OT.   

The highlights are from the official NHL channel, so they are the extended ~9 minute highlights. These videos are delivered from a YouTube API. 

Games that haven't been played yet have a link to look at tickets for that game. The external link leads to the major ticket broker Seat Geek. 