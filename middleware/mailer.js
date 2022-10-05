// Nodemailer
const nodemailer = require("nodemailer")

module.exports = {
    mainMail: async function(name, email, message) {
        let transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
            }
        });

        let mailOption = {
            from: process.env.MAIL_USERNAME,
            to: process.env.MAIL_USERNAME,
            subject: "Homeschool Dash Contact Form Request",
            html: `You've got a message from: 
            Name: ${name}
            Email : ${email}
            Message: ${message}`,
        };

        transporter.sendMail(mailOption, function(err, data) {
            if (err) {
              console.log("Error " + err);
            } else {
              console.log("Email sent successfully");
            }
          });
    }
}