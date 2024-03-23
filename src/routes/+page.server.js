// import { error } from '@sveltejs/kit';
// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {	
//     const post = await getPostFromDatabase(params.slug);
// 	if (post) {		
//         return post;	
//     }
// 	error(404, 'Not found');
// }


// import { fail } from '@sveltejs/kit';

// export const actions = {
// 	default: async ({request}) => {
//         const data = await request.formData();

//         const contactData = Object.fromEntries(data.entries());
//         const name = data.get('name');
//         const email = data.get('email');
//         const message = data.get('message');

//         const contactData = {
//             name: (data.get('name') ?? '').toString(),
//             email: (data.get('email')?? '').toString(),
//             message: data.get('message') ? data.get('message').toString() : undefined
//         }

//         if (!contactData.name.trim()) {
// 			return fail(400, { name: contactData.name, missing: true });
// 		}

//         if (!contactData.email.trim()) {
// 			return fail(400, { email: contactData.email, missing: true });
// 		}

//         console.log(contactData);
//         return { success: true };
// 	}
// };

import { kv } from "@vercel/kv";
import { fail, redirect  } from '@sveltejs/kit';

export const actions = {
	default: async ({request}) => {
        const formData = await request.formData();

        // const name = formData.get('name');
        const email = formData.get('email');
        // const message = formData.get('message');

        const contactData = { 
            name: formData.get('name'), 
            email: email, 
            message: formData.get('message') 
        };

        console.log(contactData);

        // if (!name.trim() || !name || typeof username !=='string') {
		// 	return fail(400, { name, missingName: true });
		// }
        if (!name.trim() || !name || typeof name !=='string') {
			return fail(400, { 
                name: {
                    value: name,
                    error: 'The name field is required'
            } 
         });
		};

        // if (!email.trim()) {
		// 	return fail(400, { email, missingEmail: true });
		// }
        if (!email.trim() || !email || typeof email !=='string') {
			return fail(400, { 
                name: {value: name, error: null }, 
                email: {
                    value: email,
                    error: 'The email field is required'
            } 
         });
		};

        // const contactData = { name, email, message };

        // console.log(contactData);
        await kv.set(email, contactData);
        return { success: true};
        //redirect(303, '/');
	}
};