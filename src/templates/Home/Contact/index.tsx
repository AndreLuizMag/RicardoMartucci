import { ContactForm } from '@/components/ContactForm'
import { SocialIcons } from '@/components/SocialIcons'
import { pageProps } from '@/types/pageProps'
import React from 'react'

export const Contact = ({id}:pageProps) => {
	return (
		<section
			className='p-block-16 bg-rm-tertiary'
			id={id}>
			<div className='container-lg'>
				<div className='card width-100 bg-light-primary p-10 radius-xl'>
					<div className='row align-stretch'>
						<div className='col'>
							<h2 className='font-weight-700'>
								Entre em contato
							</h2>
							<p className='color-light-tertiary'>
								Preencha o formulário para mais informações!
							</p>
						</div>
						<div className='col'>
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
