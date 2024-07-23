import React, { FC, TextareaHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string
}

export const Textarea: FC<TextareaProps> = (props) => {
	const { register } = useFormContext()

	return (
		<textarea
			rows={4}
			id={props.name}
			{...register(props.name)}
			{...props}
		/>
	)
}
