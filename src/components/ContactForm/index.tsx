'use client'
import React, { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '../Form'
import { addUser } from '@/lib/firebase/firestore'

type CreateFormData = z.infer<typeof schema>

const selctionOptions = [
	{ value: '1', label: 'Option 1' },
	{ value: '2', label: 'Option 2' },
	{ value: '3', label: 'Option 3' },
]

const radioOptions = [
	{ value: '1', label: 'Option 1' },
	{ value: '2', label: 'Option 2' },
	{ value: '3', label: 'Option 3' },
]

const schema = z.object({
	name: z
		.string()
		.min(3, 'Nome é obrigatório')
		.transform((name) => {
			return name
				.trim()
				.split(' ')
				.map((word) => {
					return word[0]
						.toLocaleUpperCase()
						.concat(word.substring(1))
				})
				.join(' ')
		}),
	email: z
		.string()
		.min(5, 'E-mail é obrigatório')
		.email('Formato de e-mail inválido')
		.toLowerCase(),
	subject: z.string().optional(),
	checkbox: z.boolean().refine((value) => value != false, {
		message: 'Checkbox é obrigatório',
	}),
})

const defaultValuesForm: CreateFormData = {
	name: '',
	email: '',
	subject: '',
	checkbox: false,
}

export const ContactForm = () => {
	const [isSaving, setIsSaving] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const createForm = useForm<CreateFormData>({
		resolver: zodResolver(schema),
		mode: 'all',
		criteriaMode: 'all',
		defaultValues: defaultValuesForm,
		shouldUnregister: false,
	})

	const { handleSubmit, setValue, register, reset } =
		createForm

	const onInvalid = (errors: any) => {
		console.log('Function onInvalid')
		console.log(errors)
	}

	// useEffect(() => {
	// 	if (createForm.watch('cpf')) {
	// 		const unmaskedCpf = createForm
	// 			.watch('cpf')
	// 			.replace(/\D/g, '')
	// 		createForm.setValue('cpf', cpfMask(unmaskedCpf))
	// 	}
	// }, [createForm.watch('cpf')])

	const onSubmit = async (data: any) => {
		// event.preventDefault();
		setLoading(true)
		setError(null)

		try {
			await addUser({
				name: data.name,
				email: data.email,
				subject: data.subject,
			})
			clearForm()
		} catch (error) {
			setError('Failed to add user')
		} finally {
			setLoading(false)
		}

		console.log('---- Submit ----')
		console.log('Name - ', data.name)
		console.log('E-mail - ', data.email)
		console.log('Assunto - ', data.subject)
		console.log(
			'---- Delay - Simulate server response ----'
		)
		setIsLoading(true)
		setTimeout(() => {
			console.log('---- Server response ----')
			setIsLoading(false)
			setIsSaving(true)
			clearForm()
			console.log('---- End form ----')
		}, 2000)
	}

	const clearForm = () => {
		reset(defaultValuesForm)
	}

	const resetForm = () => {
		reset(defaultValuesForm)
		setIsLoading(false)
		setIsSaving(false)
	}

	return (
		<form
			id='default-form'
			className='ds-flex flow-col-nw gap-3xs'
			onSubmit={handleSubmit(onSubmit, onInvalid)}>
			<FormProvider {...createForm}>
				<div className='row'>
					<div className='col'>
						<Form.Field>
							<Form.Label htmlFor='name' required>
								Nome
							</Form.Label>
							<Form.Input
								type='text'
								name='name'
								placeholder='Nome Completo'
							/>
							<Form.ErrorMessage field='name' />
						</Form.Field>
					</div>
					<div className='col'>
						<Form.Field>
							<Form.Label htmlFor='email' required>
								E-mail
							</Form.Label>
							<Form.Input
								type='text'
								name='email'
								placeholder='E-mail para contato'
							/>
							<Form.ErrorMessage field='email' />
						</Form.Field>
					</div>
					{/* <Form.Field>
						<Form.Label htmlFor='select'>Select</Form.Label>
						<Form.Select
							name='select'
							options={selctionOptions}
						/>
						<Form.ErrorMessage field='select' />
					</Form.Field>
					<Form.Field>
						<Form.Label htmlFor='checkbox' required>
							Checkox
						</Form.Label>
						<Form.Input type='checkbox' name='checkbox' />
						<Form.ErrorMessage field='checkbox' />
					</Form.Field>
					<Form.Field>
						<Form.Label htmlFor='radio' required>
							Radio
						</Form.Label>
						{radioOptions.map((item, index) => (
							<div
								key={index}
								className='ds-flex flow-row-nw justify-start align-center gap-xs'>
								<Form.Radio
									name='radio'
									id={`radio-${item.value}`}
									value={item.value}
									title=''
								/>
								<label htmlFor={`radio-${item.value}`}>
									{item.label}
								</label>
							</div>
						))}
						<Form.ErrorMessage field='radio' />
					</Form.Field> */}
				</div>
				<div className='row'>
					<div className='col'>
						<Form.Field>
							<Form.Label htmlFor='subject'>
								Assunto
							</Form.Label>
							<Form.Textarea
								name='subject'
								placeholder='Assunto que deseja entrar em contato'
							/>
							<Form.ErrorMessage field='subject' />
						</Form.Field>
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<Form.Field>
							<div className='ds-inline-flex flow-row-nw gap-3xs'>
								<Form.Input
									type='checkbox'
									name='checkbox'
								/>
								<Form.Label htmlFor='checkbox' required>
									Eu autorizo o uso dos meus dados
								</Form.Label>
							</div>
							<Form.ErrorMessage field='checkbox' />
						</Form.Field>
					</div>
				</div>

				<div className='ds-flex flow-row-nw gap-sm'>
					<button
						type='submit'
						disabled={isLoading || isSaving}>
						{!isLoading && !isSaving
							? 'Entrar em contato'
							: isLoading && !isSaving
							? 'Carregando...'
							: isSaving
							? 'Enviado'
							: 'Submit'}
					</button>
					{/* <button
						type='button'
						onClick={resetForm}
						className='bgc-transparent'>
						Reset
					</button> */}
				</div>
			</FormProvider>
		</form>
	)
}
