'use client'
import React, { useState } from 'react'
import { Logo } from '../Logo'
import './styles.scss'
import Link from 'next/link'
import { Content } from './Content'

export const Header = () => {
	const [menuState, setMenuState] = useState(false)

	const handleClick = () => {
		setMenuState(menuState ? false : true)
		console.log(menuState)
	}

	return (
		<header className='header width-100 p-block-6 ps-relative'>
			<nav>
				<div className='container-lg'>
					<div className='row flow-row-nw'>
						<div className='col ds-flex-start'>
							<Link href='/'>
								<Logo className='logo' />
							</Link>
						</div>
						<div className='col sm:ds-none'>
							<Content />
						</div>
						<div className='col'>
							<button
								type='button'
								onClick={handleClick}
								className='ds-none sm:ds-block'>
								Menu
							</button>
						</div>
					</div>
				</div>
				<div className='content-mobile width-100 ps-absolute ds-none sm:ds-block bg-light-secondary'>
					<Content />
				</div>
			</nav>
		</header>
	)
}
