'use server'

import { sendEmail } from "@/lib/brevo"

type FormData = {
    name: string,
    email: string,
    message: string
}

export async function handleForm(formData: FormData) {
    const { name, email, message } = formData

    if (!name.trim() || !email.trim() || !message.trim()) {
        return {
            ok: false,
            message: 'Please fill all the fields'
        }
    }

    const res = await sendEmail(formData)

    if (!res) {
        return {
            ok: false,
            message: 'Error sending email'
        }
    }

    return {ok: true}
}