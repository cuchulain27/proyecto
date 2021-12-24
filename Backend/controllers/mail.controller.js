const nodemailer = require("nodemailer");
require('dotenv').config();

exports.sendMail = async (req, res) => {
    let form = req.body.form ?? undefined;

    console.log(form)

    if (!form) {
        return res.status(403).send({ message: "No se han recibido todos los parámetros", success: false })
    }
    let name = form.user.name ?? undefined;
    let mail = form.user.mail ?? undefined;
    let phone = form.user.phone ?? undefined;
    let charge = form.user.charge ?? undefined;
    let interests = form.interest ?? [];
    let message = form.message ?? undefined;

    if (!name || !mail || !phone || !charge || interests.length == 0 || !message) {
        return res.status(403).send({ message: "No se han recibido todos los parámetros", success: false })
    }

    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        requireTLS: true, // true for 465, false for other ports
        tls:{
            ciphers:"SSLv3",
            
        },
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
        
    });


    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"MG Certifica " <${mail}>`, // sender address
        to: "informatica@mgcertifica.cl", // list of receivers
        subject: "Contacto", // Subject line

        html: `
        <tbody>
    <tr>
        <td>
            <img data-imagetype="External" src="https://portal.mgcertifica.cl/NoBorrar/header.png" alt="Logo MG"> 
        </td>
    </tr>
    <tr>
        <td style="padding-bottom:50px; margin-left:10px">
            <h1 style="margin-left:10px" >formulario de contacto</h1>
            <ul>
                <li>nombre: ${name}</li>
                <li>email: ${mail}</li>
                <li>fono: ${phone}</li>
                <li>cargo: ${charge}</li>
                <li>servicios: ${interests}</li>
    
            </ul>
            <p  style="margin-top:0; margin-left:10px">mensaje: ${message}</p>
        </td>
    </tr>
    <tr style="margin-top:50px; padding-bottom:50px">
        <td style="border:1px; width:220px; height:50px; background-color:#d9232f; color:white; text-align:center; margin-left:190px; margin-top:80px">
        </td>
    </tr>
   
</tbody>
        `, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


    return res.status(200).send({ message: "¡Gracias por llenar el formulario! Un ejecutivo de nuestro equipo te contactará muy pronto.", success:true })




}