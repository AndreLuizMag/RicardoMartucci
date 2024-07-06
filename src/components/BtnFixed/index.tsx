'use client'
import Link from 'next/link'
import React from 'react'
import { WhatsappLogo } from '@phosphor-icons/react'
import './styles.scss'

export const BtnFixed = () => {
	return (
		<aside className='btn-fixed ps-fixed z-index-08 ds-flex-center radius-xl overflow-hidden'>
			<Link
				href='#'
				className='p-3 bg-light-secondary color-rm-tertiary hover:color-dark-tertiary duration-normal property-color ease-in-out'>
				<WhatsappLogo size={32} />
			</Link>
		</aside>
	)
}
