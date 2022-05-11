import express from 'express'
import { SubmitFeedbackService } from './services/submitFeedbackService'
import { PrismaFeedbackRepository } from './repositories/prisma/prismaFeedbacksRepository'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailerMailAdapter'

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
	const { type, comment, screenshot } = req.body
	const nodemailerMailAdapter = new NodemailerMailAdapter()
	const prismaFeedbackRepository = new PrismaFeedbackRepository()

	const submitFeedbackService = new SubmitFeedbackService(
		prismaFeedbackRepository,
		nodemailerMailAdapter
	)
	await submitFeedbackService.handle({
		type,
		comment,
		screenshot
	})

	return res.status(201).send()
})
