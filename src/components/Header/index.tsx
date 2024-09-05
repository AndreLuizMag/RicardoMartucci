'use client'
import React, { useState } from 'react'
import { Logo } from '../Logo'
import './styles.scss'
import Link from 'next/link'
import { Content } from './Content'
import { SocialIcons } from '@/components/SocialIcons'
import { motion, AnimatePresence } from 'framer-motion'
import { X, List } from '@phosphor-icons/react'

export const Header = () => {
	const [menuState, setMenuState] = useState(false)

	const handleClick = () => {
		setMenuState(!menuState)
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
						<div className='lg:ds-none'>
							<Content />
						</div>
						<div className='col ds-flex-end flow-row-nw'>
							<button
								type='button'
								onClick={handleClick}
								className='menu-button ds-none lg:ds-block overflow-hidden'
								title='Menu'>
								<motion.div
									className='ds-flex flow-col-nw gap-xs'
									animate={menuState ? 'open' : 'closed'}
									variants={{
										open: { y: 0 },
										closed: { y: -32 },
									}}>
									<X size={24} />
									<List size={24} />
								</motion.div>
							</button>
							<div className='lg:ds-none'>
								<SocialIcons />
							</div>
						</div>
					</div>
				</div>
				<AnimatePresence>
					{menuState && (
						<motion.aside
							initial={{ opacity: 0, y: -16 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -16 }}
							transition={{ duration: 0.3 }}
							className='content-mobile width-100 ps-absolute ds-none lg:ds-block bg-light-secondary z-index-08'>
							<Content
								onClick={() => setMenuState(false)}
							/>
						</motion.aside>
					)}
				</AnimatePresence>
			</nav>
		</header>
	)
}
