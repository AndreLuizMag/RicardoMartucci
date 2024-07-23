import React from 'react'
import { Card } from './Card'
import Container from '@/components/Container'

export const More = () => {
	return (
		<section className='p-block-16 lg:pb-6 bg-light-secondary'>
			<div className='container-lg lg:p-0'>
				<div className='row align-stretch lg:gapless'>
					<div className='col lg:p-inline-7 is-3 ds-flex flow-col-nw gap-xs'>
						<h2 className='color-light-primary'>
							Lorem ipsum
						</h2>
						<p className='color-light-tertiary'>
							Lorem ipsum dolor sit amet
						</p>
					</div>
					<div className='col'>
						<Container size='lg' scrolled='md'>
							<div className='ds-flex gap-md'>
								<Card />
								<Card />
								<Card />
							</div>
						</Container>
					</div>
				</div>
			</div>
		</section>
	)
}
