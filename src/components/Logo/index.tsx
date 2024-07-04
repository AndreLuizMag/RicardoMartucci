import Image from 'next/image'
import React, { FC, HTMLAttributes } from 'react'

interface LogoProps
	extends HTMLAttributes<HTMLImageElement> {
	type?: 'icon' | 'text'
	className?: string
}

export const Logo: FC<LogoProps> = ({
	type,
	className,
}) => {
	return (
		<Image
			src={`logo/logo${type ? '-' + type : ''}.png`}
			width={
				type === 'icon' ? 193 : type === 'text' ? 238 : 471
			}
			height={128}
			alt='Logo Dr. Ricardo Martucci'
			className={className}
		/>
	)
}
