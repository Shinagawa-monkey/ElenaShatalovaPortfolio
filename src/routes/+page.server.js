// // import { error } from '@sveltejs/kit';
// // /** @type {import('./$types').PageServerLoad} */
// // export async function load({ params }) {	
// //     const post = await getPostFromDatabase(params.slug);
// // 	if (post) {		
// //         return post;	
// //     }
// // 	error(404, 'Not found');
// // }


// // import { fail } from '@sveltejs/kit';

// // export const actions = {
// // 	default: async ({request}) => {
// //         const data = await request.formData();

// //         const contactData = Object.fromEntries(data.entries());
// //         const name = data.get('name');
// //         const email = data.get('email');
// //         const message = data.get('message');

// //         const contactData = {
// //             name: (data.get('name') ?? '').toString(),
// //             email: (data.get('email')?? '').toString(),
// //             message: data.get('message') ? data.get('message').toString() : undefined
// //         }

// //         if (!contactData.name.trim()) {
// // 			return fail(400, { name: contactData.name, missing: true });
// // 		}

// //         if (!contactData.email.trim()) {
// // 			return fail(400, { email: contactData.email, missing: true });
// // 		}

// //         console.log(contactData);
// //         return { success: true };
// // 	}
// // };

// //import { kv } from "@vercel/kv";
// import { contacts } from '$db/contacts';
// import { fail, redirect  } from '@sveltejs/kit';

// /** @type {import('./$types').PageServerLoad} */
// // export async function load({ params }) {
// // 	return {
// // 		post: await db.getPost(params.slug)
// // 	};
// // }
// export async function load() {
//     const data = await contacts.find({}, {limit: 50, projection: {
//         email: 1
//     }}).toArray();
//     console.log('data', data);
//     return {
//         contacts: data
//     }
// }

// export const actions = {
// 	default: async ({request}) => {
//         const formData = await request.formData();

//         const name = formData.get('name');
//         const email = formData.get('email');
//         const message = formData.get('message');

//         // const contactData = { 
//         //     name: name, 
//         //     email: email, 
//         //     message: message 
//         // };

//         //console.log(contactData);

//         // if (!name.trim() || !name || typeof username !=='string') {
// 		// 	return fail(400, { name, missingName: true });
// 		// }
//         if (!name.trim() || !name || typeof name !=='string') {
// 			return fail(400, { 
//                 name: {
//                     value: name,
//                     error: 'The name field is required'
//             } 
//          });
// 		};

//         // if (!email.trim()) {
// 		// 	return fail(400, { email, missingEmail: true });
// 		// }
//         if (!email.trim() || !email || typeof email !=='string') {
// 			return fail(400, { 
//                 name: {value: name, error: null }, 
//                 email: {
//                     value: email,
//                     error: 'The email field is required'
//             } 
//          });
// 		};

//         //const contactData = { name, email, message };

//         //console.log(contactData);
//         //await kv.set(email, contactData);
//         return { success: true};
//         //redirect(303, '/');
// 	}
// };

// src/routes/page.server.js
// import nodemailer from 'nodemailer';
// import { MONGODB_URL, GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD } from '$env/static/private';

// // MongoDB connection URI
// const uri = MONGODB_URL;

// // MongoDB database and collection names
// const dbName = 'contacts';
// const collectionName = 'contacts';

// async function sendEmail(formData) {
//     try {
//         // Create a transporter using Gmail SMTP
//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: GOOGLE_EMAIL,
//                 pass: GOOGLE_EMAIL_PASSWORD
//             }
//         });

//         // Construct email message
//         let mailOptions = {
//             from: GOOGLE_EMAIL,
//             to: GOOGLE_EMAIL, // Your Gmail email or any other recipient
//             subject: 'New form submission',
//             text: `
//                 Name: ${formData.name}
//                 Email: ${formData.email}
//                 Message: ${formData.message}
//             `
//         };

//         // Send email
//         let info = await transporter.sendMail(mailOptions);
//         console.log('Email sent: %s', info.messageId);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// }

// export const actions = {
//     default: async ({ request }) => {
//         try {
//             const formData = await request.json();

//             // Process form data (store in database, etc.)

//             // Send email with the form data
//             await sendEmail(formData);

//             return {
//                 status: 200,
//                 body: { message: 'Form submitted successfully' }
//             };
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             return {
//                 status: 500,
//                 body: { message: 'Internal server error' }
//             };
//         }
//     }
// };

// export const actions = {
//     default: async ({ request }) => {
//         try {
//             // Connect to MongoDB
//         await client.connect();

//             const formData = await request.formData();
//             const name = formData.get('name');
//             const email = formData.get('email');
//             const message = formData.get('message');

            
//             // Access MongoDB collection
//             const db = client.db('contacts');
//             const collection = db.collection('contacts');

//             // Insert form data into MongoDB
//             await collection.insertOne({ name, email, message });

//             // Disconnect from MongoDB
//             await disconnect();

//             // return { success: true };

//             return {
//                 status: 200,
//                 body: { success: true }
//             };
//         } catch (error) {
//             console.error('Error inserting document into MongoDB:', error);
//             // return { success: false, error: error.message };

//             return {
//                 status: 500,
//                 body: { error: 'Internal Server Error' }
//             };
//         }
//     }
// };
// Function to query database and send email notifications
// async function checkFormSubmissions() {
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
//     try {
//         // Connect to MongoDB
//         await client.connect();
        
//         // Access MongoDB collection
//         const db = client.db(dbName);
//         const collection = db.collection(collectionName);
        
//         // Query for new form submissions
//         const submissions = await collection.find({ status: 'new' }).toArray();
        
//         // Process each submission and send email notification
//         submissions.forEach(submission => {
//             const { name, email, message } = submission;
            
//             // Construct email message
//             const mailOptions = {
//                 from: GOOGLE_EMAIL,
//                 to: GOOGLE_EMAIL,
//                 subject: 'New Form Submission',
//                 text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//             };
            
//             // Send email
//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.error('Error sending email:', error);
//                 } else {
//                     console.log('Email sent:', info.response);
//                 }
//             });
            
//             // Update submission status to 'notified'
//             collection.updateOne({ _id: submission._id }, { $set: { status: 'notified' }});
//         });
//     } catch (error) {
//         console.error('Error checking form submissions:', error);
//     } finally {
//         // Close MongoDB connection
//         await client.close();
//     }
// }

// // Run the function periodically (e.g., every hour)
// setInterval(checkFormSubmissions, 3600000); // 1 hour

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
            // name: {value: contactData.name, error: null },
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
            // id: crypto.randomUUID(),
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

        // const sendEmail = async (messageToSend) => {
        //     await new Promise((resolve, reject) => {
        //         transporter.sendMail(messageToSend, (err, info) => {
        //             if (err) {
        //                 console.error(err);
        //                 reject(err);
        //             } else {
        //                 resolve(info);
        //             }
        //         });
        //     });
        // };

            await sendEmail(messageToSend);

            return { success: true, status: 200, body: { message: 'Form submitted successfully' }, contact: validation.contact };

        } catch (error) {
            return { success: false, status: 500, body: { message: 'Internal server error' } };
        }
    }
}

// import { fail } from '@sveltejs/kit';
// import { transporter } from '$lib/emailSetup.server.js';
// import { GOOGLE_EMAIL,GOOGLE_EMAIL_BCC } from '$env/static/private';

// async function sendEmail(messageToSend) {
//     return new Promise((resolve, reject) => {
//         transporter.sendMail(messageToSend, (err, info) => {
//             if (err) {
//                 console.error(err);
//                 reject(err);
//             } else {
//                 resolve(info);
//             }
//         });
//     });
// }

// export const actions = {
//     default: async ({ request }) => {
//         try {
//         const formData = await request.formData();
//             // id: crypto.randomUUID();
//             userName: formData.get('name') ?? '';
//             email: formData.get('email') ?? '';
//             message: formData.get('message') ?? '';

//             if (!userName || typeof userName !== 'string') {
//                 return fail(400, { 
//                     userName: {
//                         value: userName,
//                         error: 'The name field is required'
//                     } 
//                 });
//             }

//             if (!email || typeof email !== 'string') {
//                 return fail(400, {
//                     userNamename: {value: userName, error: null }, 
//                     email: {
//                     value: email,
//                     error: 'The email field is required'
//                     }  
//                 });
//             }
        

//         let html = `
//             <h2>Hello there!</h2>
//             <p>You've received a message from ${userNamename} (${email}):</p>
//             <pre>${message || 'Message field is empty'}</pre>
//         `;

//         const messageToSend = {
//             from: GOOGLE_EMAIL,
//             to: GOOGLE_EMAIL,
//             bcc: GOOGLE_EMAIL_BCC,
//             subject: 'Portfolio client inquiry',
//             text: message,
//             html: html,
//         };

//             await sendEmail(messageToSend);

//             return {
//                 success: true,
//                 status: 200,
//                 body: { message: 'Form submitted successfully' },
//                 contact: {
//                     name: userName,
//                     email: email,
//                     message: message || ''
//                 }
//             };

//         } catch (error) {
//             return {
//                 success: false,
//                 status: 500,
//                 body: { message: 'Internal server error' }
//             };
//         }
//     }
// };