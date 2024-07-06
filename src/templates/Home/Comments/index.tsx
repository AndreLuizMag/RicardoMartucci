import React from 'react'
import { Card } from './Card'
import Container from '@/components/Container'

export const Comments = () => {
	return (
		<section className=''>
			<Container size='lg' scrolled='md'>
				<div className='ds-flex gap-md'>
					<Card>
						Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua
					</Card>
					<Card>
						Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua
					</Card>
					<Card>
						Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua
					</Card>
					<Card>
						Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua
					</Card>
				</div>
			</Container>
		</section>
	)
}
