import React, { FC, HTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import {
	FacebookLogo,
	InstagramLogo,
} from '@phosphor-icons/react'

export const SocialIcons = () => {
	return (
		<div className='ds-flex flow-row-nw gap-2xs'>
			<Icon href='#'>
				<FacebookLogo size={24} />
			</Icon>
			<Icon href='#'>
				<InstagramLogo size={24} />
			</Icon>
		</div>
	)
}

interface Icon extends HTMLAttributes<HTMLLinkElement> {
	href: string
	children: ReactNode
}

const Icon: FC<Icon> = ({ href, children }) => {
	return (
		<Link
			href={href}
			className='text-decoration-none line-height-none p-2 radius-2xs color-light-secondary duration-normal property-color ease-in-out hover:bg-blue-lighten hover:color-blue-dark'>
			{children}
		</Link>
	)
}
