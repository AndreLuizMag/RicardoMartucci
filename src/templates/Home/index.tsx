'use client'
import { LayoutGroup } from 'framer-motion'
import { Wrapper } from '@/components/Wrapper'

import { Intro } from './Intro'
import { More } from './More'
import { Info } from './Info'
import { Comments } from './Comments'
import { Contact } from './Contact'

export const HomeWrapped = () => {
	const contentList = [
		<Intro key='intro' />,
		<More key='more' />,
		<Info key='info' />,
		<Comments key='comments' />,
		<Contact key='contact' />,
	]

	return (
		<LayoutGroup>
			{contentList.map((content, index) => (
				<Wrapper key={index} content={content} />
			))}
		</LayoutGroup>
	)
}
