import { db } from './config'
import { collection, addDoc } from 'firebase/firestore'
import { Contact } from '@/utils/contact'

const contactCollection = collection(db, 'users')

export const addUser = async (
	user: Omit<Contact, 'id'>
): Promise<void> => {
	await addDoc(contactCollection, user)
}
