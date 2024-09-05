import React from 'react'
import './styles.scss'
import Link from 'next/link'
import { pageProps } from '@/types/pageProps'

export const Info = ({id}:pageProps) => {
	return (
		<section className='sec-info p-block-16' id={id}>
			<div className='container-lg'>
				<div className='card bg-rm-primary radius-3xl overflow-hidden'>
					<div className='row align-stretch'>
						<div className='col p-16 sm:p-10 ds-flex-start flow-col-nw gap-3xl'>
							<div className='ds-flex flow-col-nw gap-sm'>
								<h2 className='color-dark-primary'>
									Lorem ipsum
								</h2>
								<div className='color-dark-tertiary'>
									<p>
									Dr. Ricardo Martucci, especialista em Cirurgia Vascular pela SBACV e sócio efetivo da SBLMC, traz mais de 40 anos de experiência no atendimento de pacientes com técnicas de ponta. Comprometido com procedimentos menos invasivos e altamente eficazes, ele se dedica ao tratamento de doenças arteriais, venosas e linfáticas, sempre focado no bem-estar e na rápida recuperação de seus pacientes.
									</p>
								</div>
							</div>
							<Link
								href='#'
								className='p-block-6 p-inline-10 line-height-none text-decoration-none radius-xs bg-rm-secondary color-dark-primary hover:bg-rm-tertiary duration-normal property-color ease-in-out'>
								Entrar em contato
							</Link>
						</div>
						<div className='col image radius-3xl lg:ds-none'></div>
					</div>
				</div>
			</div>
		</section>
	)
}
