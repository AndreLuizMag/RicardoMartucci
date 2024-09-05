import React from 'react'
import { Card } from './Card'
import Container from '@/components/Container'
import { pageProps } from '@/types/pageProps'

const data = [
	{
		title: 'Quando devo fazer um',
		subtitle: 'Check Up vascular?',
		content: 'Se você tem mais de 40 anos, sofre de pressão alta, diabetes, colesterol alto, é fumante, ou sente dores nas pernas, inchaços, varizes, ou outros sinais de problemas vasculares, é fundamental realizar o Check Up Vascular regularmente.',
	},
	{
		title: 'Como é feito o',
		subtitle: 'Check Up Vascular?',
		content: 'O Check Up Vascular inclui uma consulta completa com histórico médico, exame físico detalhado, avaliação de pulsos, veias, pressão arterial e perfusão dos membros, além de Ultrassom Doppler Vascular e exames laboratoriais, quando necessário.',
	},
	{
		title: 'Quais os principais problemas',
		subtitle: 'de saúde tratados por um médico vascular?',
		content: 'Um dos principais problemas tratados pelo cirurgião vascular são as varizes e os vasinhos. Essas veias dilatadas e tortuosas não só impactam a aparência, mas também podem causar dor, inchaço e uma sensação constante de peso nas pernas.',
	},
]

export const More = ({id}:pageProps) => {
	return (
		<section
			className='p-block-16 lg:pb-6 bg-light-secondary'
			id={id}>
			<div className='container-lg lg:p-0'>
				<div className='row align-stretch lg:gapless'>
					<div className='col lg:p-inline-7 is-3 ds-flex flow-col-nw gap-xs p-block-10'>
						<h2 className='color-light-primary'>
						Lorem ipsum
						</h2>
						<p className='color-light-tertiary'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
						</p>
					</div>
					<div className='col'>
						<Container size='lg' scrolled='md'>
							<div className='ds-flex gap-md'>
								{data.map((item, index) => (
									<Card key={index} title={item.title} subtitle={item.subtitle}>
										{item.content}
									</Card>
								))}
							</div>
						</Container>
					</div>
				</div>
			</div>
		</section>
	)
}
