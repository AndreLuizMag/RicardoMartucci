import Image from 'next/image'
import React, { FC, HTMLAttributes } from 'react'

interface LogoProps
	extends HTMLAttributes<HTMLImageElement> {
	type?: 'icon' | 'text'
}

export const Logo: FC<LogoProps> = ({ type }) => {
	return (
		<Image
			src={`logo/logo${type ? '-' + type : ''}.png`}
			width={471}
			height={128}
			alt='Logo Dr. Ricardo Martucci'
		/>
	)
}
