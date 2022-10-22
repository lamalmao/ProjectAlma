const nodemailer = require('nodemailer');
const crypto = require('crypto');
module.exports = async function(target, fullname) {
    let token = crypto.randomBytes(8).toString('hex');

    let mailTransporter = nodemailer.createTransport({
        // host: 'smtp.gmail.com',
        service: 'yandex',
        auth: {
            // user: 'sendernodejs@gmail.com',
            // pass: 'iwovimbhzkficdaq'
            user: 'laayze@yandex.ru',
            pass: 'wtnjqxvrauamhgst'
        }
    });

    let mailDetails = {
        from: 'laayze@yandex.ru',
        to: target,
        subject: 'Проверочный код',
        text: `Здравствуйте, ${fullname}

Вы получили данное сообщение, так как адрес электронной почты ${target} был использован при регистрации в личном кабинете на сайте https://laesia.site
Для подтверждения адреса электронной почты перейдите по следующей ссылке https://laesia.site/check?q=${token}
Ссылка подтверждения будет действительна в течение 72 часов.
Если вы не регистрировались, проигнорируйте данное сообщение.

С уважением, https://laesia.site.

Сообщение сгенерировано автоматически, на него отвечать не надо.`,
    };

    let result = await mailTransporter.sendMail(mailDetails);
    console.log(result);
    return token;
};