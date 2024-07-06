'use client'
import React, { useState } from 'react'
import { Plus, Minus } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import './styles.scss'

export const Card = () => {
	const [showMoreInfo, setShowMoreInfo] = useState(false)

	const toggleMoreInfo = () => {
		setShowMoreInfo((prev) => !prev)
	}

	return (
		<div className='card-more ps-relative p-6 overflow-hidden flex-bgs radius-xl bg-rm-tertiary'>
			<h3 className='color-dark-secondary'>Lorem ipsum</h3>
			<p className='color-dark-tertiary'>
				Lorem ipsum dolor sit amet
			</p>
			<button
				type='button'
				title='Mais informações'
				className='btn-more ps-absolute p-2 radius-xl z-index-02 bg-light-tertiary'
				onClick={toggleMoreInfo}>
				<motion.div
					animate={{ rotate: showMoreInfo ? 45 : 0 }}
					transition={{ duration: 0.3 }}>
					<Plus
						size={32}
						weight='bold'
						className='color-rm-tertiary'
					/>
				</motion.div>
			</button>

			<AnimatePresence>
				{showMoreInfo && (
					<motion.div
						className='ps-absolute inset-0 p-6 bg-rm-primary'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.32 }}>
						<MoreInfo />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

const MoreInfo = () => {
	return (
		<motion.p
			initial={{ y: 16, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: 16, opacity: 0 }}
			transition={{ duration: 0.32, delay: 0.28 }}
			className='color-dark-tertiary'>
			Lorem ipsum dolor sit amet, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua
		</motion.p>
	)
}
