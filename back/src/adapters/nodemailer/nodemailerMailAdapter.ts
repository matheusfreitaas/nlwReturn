import { MailAdapter, SendMailData } from '../mainAdapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
	host: 'smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: '7ea2bd42c1b184',
		pass: '5ca158d485afaf'
	}
})

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			from: 'Equipe Feedget <oi@feedget.com>',
			to: 'Matheus <matheusbfreitas@gmail.com>',
			subject,
			html: body
		})
	}
}
