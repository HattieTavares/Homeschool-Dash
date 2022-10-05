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
            from: email,
            to: process.env.MAIL_USERNAME,
            subject: "Homeschool Dash Contact Form Request",
            name: name,
            email: email,
            text: message,
        };
        
        try {
            await transporter.sendMail(mailOption);
            return Promise.resolve("Message Sent Successfully!");
        } catch (error) {
            return Promise.reject(error);
        }
    }
}