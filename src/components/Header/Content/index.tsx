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
					className='item color-light-primary font-weight-semi-bold text-decoration-none line-height-none p-inline-6 p-block-4 radius-2xs duration-normal property-color ease-in-out hover:bg-blue-lighten hover:color-blue-dark'>
					{item.name}
				</Link>
			))}
		</div>
	)
}
