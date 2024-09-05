'use server';

import { createClient } from './server';
import { revalidatePath } from 'next/cache';

type cont = {
	name: string;
	email: string;
	subject: string;
};

export const addContact = async ({ name, email, subject }: cont) => {
	const supabase = createClient();

	if (!name && !email && !subject) {
		throw new Error('All text is required');
	}

	const { error } = await supabase.from('contact').insert({
		name: name,
		email: email,
		subject: subject,
	});

	if (error) {
		console.error(error);
		throw new Error('Error add contact');
	}

	revalidatePath('/contact');
};
