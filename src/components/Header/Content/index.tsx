import { headerItems } from '@/utils/content'
import Link from 'next/link'
import React, { HTMLAttributes } from 'react'

interface ContentProps
	extends HTMLAttributes<HTMLDivElement> {
	onClick?: () => void
}

export const Content = () => {
	return (
		<div className='content-items flex-bgs ds-flex-center sm:ds-flex-end flow-row-nw sm:flow-col-nw gap-sm sm:p-inline-4 sm:p-block-10'>
			{headerItems.map((item, index) => (
				<Link
					key={index}
					href={item.href}
					className='item color-light-primary font-weight-semi-bold text-decoration-none p-inline-6 p-block-2'>
					{item.name}
				</Link>
			))}
		</div>
	)
}
