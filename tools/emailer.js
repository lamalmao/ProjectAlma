const nodemailer = require('nodemailer');
const crypto = require('crypto');

module.exports = async function(target, reason='new') {
    let token = crypto.randomBytes(3).toString('hex');

    let mailTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
            user: 'sendernodejs@gmail.com',
            pass: 'iwovimbhzkficdaq'
        }
    });

    let mailDetails = {
        from: 'sendernodejs@gmail.com',
        to: target,
        subject: 'Password replace',
        text: `https://laesia.site/check?q=${token}&r=${reason}`,
    };

    let result = await mailTransporter.sendMail(mailDetails);
    console.log(result);
    return token;
};