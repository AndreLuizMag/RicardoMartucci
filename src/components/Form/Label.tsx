import { FC, LabelHTMLAttributes, ReactNode } from 'react'

interface LabelProps
	extends LabelHTMLAttributes<HTMLLabelElement> {
		htmlFor: string
	children: ReactNode
	required?: boolean
}

export const Label: FC<LabelProps> = (
	{ htmlFor, children, required },
	props
) => {
	return (
		<label htmlFor={htmlFor} {...props}>
			{children}
			{required ? '*' : null}
		</label>
	)
}
