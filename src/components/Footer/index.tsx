'use client'
import React from 'react'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { SocialIcons } from '@/components/SocialIcons'
import './styles.scss'

export const Footer = () => {
	return (
		<footer className='footer width-100 p-block-10'>
			<div className='container-lg'>
				<div className='ds-flex flow-row-nw justify-between align-start'>
					<div className='ds-flex flow-col-nw gap-xs'>
						<Logo className='logo' />
						<Link
							href='https://github.com/Helixify'
							target='_blank'
							rel='noopener noreferrer'
							className='font-size-xs line-height-none text-decoration-none color-light-tertiary'>
							Powered by Helixify
						</Link>
					</div>
					<SocialIcons />
				</div>
			</div>
		</footer>
	)
}
