const core = require('@actions/core');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${core.getInput('email')}`,
        pass: `${core.getInput('password')}`
    }
});

var mailOptions = {
    from: `${core.getInput('email')}`, 
    to: `${core.getInput('email')}`,
    subject: 'Resultado del workdflow ejecutado',
    html: `
    <div>   
        <p>Todo funciona correctamente resultados: </p>
        <ul>
            <li>deploy: ${core.getInput('deploy')} </li>
            <li>linter: ${core.getInput('linter')} </li>
            <li>badge: ${core.getInput('badge')} </li>
            <li>cypress: ${core.getInput('cypress')} </li>
        </ul>
    </div>
    ` 
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email enivado: ' + info.response);
    }
});