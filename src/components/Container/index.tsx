import React, { FC, HTMLAttributes, ReactNode } from 'react'
import './styles.scss'

interface ContainerProps
	extends HTMLAttributes<HTMLDivElement> {
	size?: 'sm' | 'md' | 'lg' | 'full'
	scrolled?: 'lg' | 'md' | 'sm'
	children: ReactNode
	className?: string
}

const Container: FC<ContainerProps> = ({
	size = 'md',
	scrolled,
	children,
	className,
	...props
}) => {
	return (
		<div
			className={`container container-${size} ${
				scrolled ? `${scrolled} p-block-10` : null
			} ${className}`}
			{...props}>
			{scrolled ? (
				<div className={`content`}>{children}</div>
			) : (
				children
			)}
		</div>
	)
}

export default Container
