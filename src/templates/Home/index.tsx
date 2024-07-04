'use client'
import { LayoutGroup } from 'framer-motion'
import { Wrapper } from '@/components/Wrapper'

import { Intro } from './Intro'

export const HomeWrapped = () => {
	const contentList = [<Intro key='intro' />]

	return (
		<LayoutGroup>
			{contentList.map((content, index) => (
				<Wrapper key={index} content={content} />
			))}
		</LayoutGroup>
	)
}
