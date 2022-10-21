const nodemailer = require('nodemailer')
app.get('/newpass', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);

    let mailTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
            user: 'sendernodejs@gmail.com',
            pass: 'iwovimbhzkficdaq'
        }
    });

    let mailDetails = {
        from: 'sendernodejs@gmail.com',
        to: mail,
        subject: 'Password replace',
        text: 'Ваш новый пароль-57493984'
    };

    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error');
        } else {
            console.log('Email sent successfully');
        }
    });
});