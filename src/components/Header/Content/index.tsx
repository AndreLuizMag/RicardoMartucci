import { SocialIcons } from '@/components/SocialIcons'
import { headerItems } from '@/utils/content'
import Link from 'next/link'
import React, { HTMLAttributes } from 'react'

interface ContentProps
	extends HTMLAttributes<HTMLDivElement> {
	onClick?: () => void
}

export const Content = () => {
	return (
		<div className='content-items flex-bgs ds-flex-center lg:ds-flex-end flow-row-nw lg:flow-col-nw gap-sm lg:p-inline-8 lg:p-block-10'>
			{headerItems.map((item, index) => (
				<Link
					key={index}
					href={item.href}
					className='item lg:width-100 color-light-primary font-weight-semi-bold text-decoration-none text-align-right line-height-none p-inline-6 lg:p-inline-2 p-block-4 radius-2xs duration-normal property-color ease-in-out hover:bg-blue-lighten hover:color-blue-dark'>
					{item.name}
				</Link>
			))}
			<div className='ds-none lg:ds-block'>
				<SocialIcons />
			</div>
		</div>
	)
}
