'use client'
import React, { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '../Form'
import './styles.scss';
import { addContact } from '@/lib/supabase/actions'
import toast, { Toaster } from 'react-hot-toast';

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

	const onSubmit = async (data: any) => {
		setLoading(true)
		setError(null)

		try {
			const submit = await addContact({
				name: data.name,
				email: data.email,
				subject: data.subject,
			})
			toast.success('E-mail enviado com sucesso!', {
				duration: 8000,
			}) 
			console.error(submit);
			clearForm()
			
		} catch (error) {
			setError('Failed to add user')
			console.error('Error - ', error)
			toast.error('Erro ao realizar o cadastro', {
				duration: 8000,
			})
		} finally {
			setLoading(false)
		}
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

				<div className='ds-flex flow-row-nw gap-sm pt-4'>
					<button
						type='submit'
						disabled={isLoading || isSaving}
						className='width-100 p-block-6 p-inline-6 font-size-md radius-xs border-style-none color-dark-primary bg-rm-primary hover:bg-rm-secondary duration-normal property-all ease-in-out'>
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

			<Toaster
  position="bottom-center"
  reverseOrder={false}
/>
		</form>
	)
}
