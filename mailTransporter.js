const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// const accountSid = 'AC1640adec4c0f4ec19c65419a5f4d11c0';
// const authToken = '1b934e9cf39a7db6b0a1a57f07f84621';
// const client = require('twilio')(accountSid, authToken);

// const sendSMS = async (messageBody) => {
//     const msgOptions = {
//         from:'+16466792759',
//         to: '+919639723436',
//         body: messageBody,
//     };

//     try {
//         const message = await client.messages.create(msgOptions);
//         console.log(`Message sent: ${message.sid}`);
//     } catch (error) {
//         console.error(`Error sending message: ${error.message}`);
//     }
// };

module.exports = {
    transporter:transporter,
    // sendSMS:sendSMS
}