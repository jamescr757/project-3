const nodemailer = require("nodemailer");
require("dotenv").config();


module.exports = {

    forgotPassword: function(req, res) { 

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL,
              pass: process.env.EMAIL_PASS
            }
        });
          
        const mailOptions = {
            from: process.env.EMAIL,
            to: req.params.email,
            subject: 'Forgot Password Link',
            text: `Click this link to update your password https://nhl-scores-757.herokuapp.com/member/forgot-password/${req.params.email}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                res.send("error")
            } else {
                console.log('Email sent: ' + info.response);
                res.send("success")
            }
        });
    }

}