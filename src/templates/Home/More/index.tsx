import React from 'react'
import { Card } from './Card'

export const More = () => {
	return (
		<section className='p-block-16 bg-light-secondary'>
			<div className='container-lg'>
				<div className='row align-stretch'>
					<div className='col is-3 ds-flex flow-col-nw gap-xs'>
						<h2 className='color-light-primary'>
							Lorem ipsum
						</h2>
						<p className='color-light-tertiary'>
							Lorem ipsum dolor sit amet
						</p>
					</div>
					<div className='col ds-flex flow-row-nw justify-start align-stretch gap-sm'>
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		</section>
	)
}
