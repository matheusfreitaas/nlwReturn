import { CloseButton } from '../../CloseButton'
import successImgUrl from '../../../assets/success.svg'

interface FeedbackSuccessStepProps {
	onFeedbackRestart: () => void
}

export function FeedbackSuccessStep({
	onFeedbackRestart
}: FeedbackSuccessStepProps) {
	return (
		<>
			<header>
				<CloseButton />
			</header>

			<div className='flex flex-col items-center py-10 w-[304px]'>
				<img src={successImgUrl} alt='Sinal de sucesso' />
				<span className='text-xl mt-2'>Agradecemos o feedback!</span>
				<button
					type='button'
					onClick={onFeedbackRestart}
					className='py-2 px-6  mt-6 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'
				>
					Quero enviar outro
				</button>
			</div>
		</>
	)
}
