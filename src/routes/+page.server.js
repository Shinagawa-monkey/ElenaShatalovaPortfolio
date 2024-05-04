export const config = {
    isr: {
      expiration: 60,
    },
};

import { fail } from '@sveltejs/kit';
import { transporter } from '$lib/emailSetup.server.js';
import { GOOGLE_EMAIL,GOOGLE_EMAIL_BCC } from '$env/static/private';

function validateContact(contactData) {
    if (!contactData.name && !contactData.email) {
        return { 
            success: false, 
            nameAndEmailError: "Name and email are required." 
        };
    }
    
    if (!contactData.name) {
        return { 
            success: false, 
            nameError: 'The name field is required' 
        };
    }

    if (!contactData.email) {
        return { 
            success: false,
            emailError: 'The email field is required'
        }
    }

    return {
        success: true,
        contact: {
            name: contactData.name,
            email: contactData.email,
            message: contactData.message || ''
        }
    };
}

async function sendEmail(messageToSend) {
    return new Promise((resolve, reject) => {
        transporter.sendMail(messageToSend, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(info);
            }
        });
    });
}

export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const contactData = {
                name: formData.get('name') ?? '',
                email: formData.get('email') ?? '',
                message: formData.get('message') ?? ''
            }
        
            const validation = validateContact(contactData);

            if (!validation.success) {
                return fail(400, { error: validation.nameAndEmailError, nameError: validation.nameError, emailError: validation.emailError, ...contactData });
            }

            let html = `
                <h2>Hello there!</h2>
                <p>You've received a message from ${contactData.name} (${contactData.email}):</p>
                <pre>${contactData.message || 'Message field is empty'}</pre>
            `;
    
            const messageToSend = {
                from: GOOGLE_EMAIL,
                to: GOOGLE_EMAIL,
                bcc: GOOGLE_EMAIL_BCC,
                subject: 'Portfolio client inquiry',
                text: contactData.message,
                html: html,
            };

            await sendEmail(messageToSend);

            return { success: true, status: 200, body: { message: 'Form submitted successfully' }, contact: validation.contact };

        } catch (error) {
            return { success: false, status: 500, body: { message: 'Internal server error' } };
        }
    }
}