import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4f0bab27ee87dc",
      pass: "efb9a601a1a6de"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {        
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Guilherme Simoes <guilhermejunios@gmail.com>',
            subject,
            html: body

        })
    }
}