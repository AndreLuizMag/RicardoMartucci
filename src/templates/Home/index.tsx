'use client'
import { LayoutGroup } from 'framer-motion'
import { Wrapper } from '@/components/Wrapper'

import { Intro } from './Intro'
import { More } from './More'
import { Info } from './Info'
import { Comments } from './Comments'
import { Contact } from './Contact'

import {headerItems} from '@/utils/content'

export const HomeWrapped = () => {
	const contentList = [
		<Intro key='intro' />,
		<More key='more' id={headerItems[0].href} />,
		<Info key='info' id={headerItems[1].href} />,
		// <Comments key='comments' />,
		<Contact key='contact' id={headerItems[2].href} />,
	]

	return (
		<LayoutGroup>
			{contentList.map((content, index) => (
				<Wrapper key={index} content={content} />
			))}
		</LayoutGroup>
	)
}
