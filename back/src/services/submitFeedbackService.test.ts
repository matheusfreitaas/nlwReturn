import { SubmitFeedbackService } from './submitFeedbackService'

const createFeedbackSpy = jest.fn()
const sendEmailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackService(
	{ create: createFeedbackSpy },
	{ sendMail: sendEmailSpy }
)

describe('SubmitFeedback', () => {
	it('should be able to submit a feedback', async () => {
		await expect(
			submitFeedback.handle({
				type: 'BUG',
				comment: 'example comment',
				screenshot: 'data:image/png;base64/asdad'
			})
		).resolves.not.toThrow()

		expect(createFeedbackSpy).toHaveBeenCalled()
		expect(sendEmailSpy).toHaveBeenCalled()
	})

	it('should not be able to submit a feedback whithout type', async () => {
		await expect(
			submitFeedback.handle({
				type: '',
				comment: 'example comment',
				screenshot: 'data:image/png;base64/asdad'
			})
		).rejects.toThrow()
	})

	it('should not be able to submit a feedback whithout comment', async () => {
		await expect(
			submitFeedback.handle({
				type: 'BUG',
				comment: '',
				screenshot: 'data:image/png;base64/asdad'
			})
		).rejects.toThrow()
	})

	it('should not be able to submit a feedback with an invalid screenshot', async () => {
		await expect(
			submitFeedback.handle({
				type: 'BUG',
				comment: 'bugadao',
				screenshot: 'data:image/png;base65'
			})
		).rejects.toThrow()
	})
})
