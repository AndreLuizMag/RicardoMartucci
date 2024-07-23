import React, { FC, HTMLAttributes, ReactNode } from 'react'
import { Quotes } from '@phosphor-icons/react'
import './styles.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

export const Card: FC<CardProps> = ({ children }) => {
	return (
		<div className='card-comment flex-bgs ps-relative radius-3xl overflow-hidden'>
			{/* <svg
				width='128'
				height='128'
				viewBox='0 0 128 128'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='background ps-absolute'>
				<path
					d='M0 34L50 0L43 63L91 91L64 128L12 105L0 34Z'
					fill='#00528E'
				/>
				<path
					d='M50 0L84 40L128 36L121 111L64 128L91 91L43 63L50 0Z'
					fill='#002345'
				/>
			</svg> */}

			<div className='content p-block-10 p-inline-6 ds-flex flow-col-nw gap-sm'>
				<p className='color-light-tertiary'>{children}</p>
				<div className='width-100 ds-flex-end'>
					<Quotes
						size={32}
						className='color-light-tertiary'
					/>
				</div>
			</div>
		</div>
	)
}
