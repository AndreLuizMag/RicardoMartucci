'use client'
import React, { ReactNode, useState } from 'react'
import { Plus, Minus } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import './styles.scss'

type CardProps = {
	title: string
	subtitle: string
	children: ReactNode
}

export const Card = ({title, subtitle, children}:CardProps) => {
	const [showMoreInfo, setShowMoreInfo] = useState(false)

	const toggleMoreInfo = () => {
		setShowMoreInfo((prev) => !prev)
	}

	return (
		<div className='card-more ps-relative p-6 overflow-hidden flex-bgs radius-xl bg-rm-tertiary'>
			<div className="ds-flex flow-col-nw gap-xs">
			<h3 className='color-dark-secondary'>{title}</h3>
			<p className='color-dark-tertiary'>
				{subtitle}
			</p>
			</div>
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
						<MoreInfo>
							{children}
							</MoreInfo>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

type MoreInfoProps = {
	children: ReactNode
}

const MoreInfo = ({children}: MoreInfoProps) => {
	return (
		<motion.p
			initial={{ y: 16, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: 16, opacity: 0 }}
			transition={{ duration: 0.32, delay: 0.28 }}
			className='color-dark-tertiary'>
			{children}
		</motion.p>
	)
}
