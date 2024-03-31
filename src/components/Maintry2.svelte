<!-- Option 1 80/48
  
  <script>
  import { isMenuOpen } from '$lib/menuStore';
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";

  export let form;
  let submitted = false;
  $: loading = submitted && !$page.form?.success;

//  const handleSubmit = async () => {
//     // Check if both name and email fields are filled
//     if (form?.contact?.name?.value && form?.contact?.email?.value) {
//         submitted = true;
//     } else {
//       submitted = false; // Reset submitted if name or email is empty
//     }
//   };

  $: {
    if ($page.form?.success) {
      setTimeout(() => {
        // Revert the button text to "Work With Me"
        submitted = false;
        // allows subsequent form submissions to trigger the display of the "Sending message" text agaim
        // $page.form.success = false;
        form.success = false;
      }, 2000);
    }
  }

  // $: contactData = form?.contactData;
  $: {
    // Check if form submission is successful and contactData is available
    if ($page.form?.success && $page.form?.contactData) {
      console.log($page.form.contactData); // Log the contactData object
    }
  }
</script>

<main class="flex flex-col flex-1 p-4">
  <section id="contact" class="py-20 lg:py-24 flex flex-col gap-10 sm:gap-12 md:gap-14">
  <div class="flex flex-col gap-2 items-center justify-center text-center">
    <h2 class="text-large sm:text-xl md:text-2xl text-balance">Get in Touch</h2>
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-balance">Let's <span class="poppins text-violet-400">Connect</span></h3>
  </div>

  <div class="flex justify-center">
    <form method="POST" class="flex flex-col w-full md:w-[800px] z-10" use:enhance on:submit={() => submitted = true}>
      <p class="text-sm poppins font-normal leading-none text-slate-400 mb-2">* indicates required field</p>
  
      <label for="name" class="sr-only">Name *</label>
      <input type="text" id="name" name="name" value={form?.contact?.name?.value ?? ''} placeholder="Name *" aria-label="Name" class="poppins p-2 bg-transparent border border-solid border-violet-700 rounded-lg group hover:border-violet-400 duration-200 transition-height focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0} required />
      <p class="error text-xs mt-1 min-h-5 text-red-400">{form?.nameError ?? ''}</p>
  
      <label for="email" class="sr-only">Email *</label>
      <input type="email" id="email" name="email" value={form?.contact?.email?.value ?? ''} placeholder="Email *" aria-label="Email" class="poppins p-2 bg-transparent border border-solid border-violet-700 rounded-lg group hover:border-violet-400 duration-200 transition-height focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0} required />
      <p class="error text-xs mt-1 min-h-5 text-red-400">{form?.emailError ?? ''}</p>
  
      <label for="message" class="sr-only">Message</label>
      <textarea id="message" name="message" value={form?.contact?.message?.value ?? ''} placeholder="Message" aria-label="Message" rows="6" class="poppins mb-5 p-2 bg-transparent border border-solid border-violet-700 rounded-lg group hover:border-violet-400 duration-200 transition-height focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0}></textarea>
  
      <div class="flex justify-start">
        <button type="submit" aria-label="Work With Me" class:submitted class:loading class="font-medium text-base md:text-lg poppins relative overflow-hidden px-3 py-1.5 rounded-full bg-gray-100 text-slate-950 cursor-pointer z-10 hover:bg-gray-200 duration-200 group/ContactBtn whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0} disabled={submitted}>
            <div class="absolute top-0 right-full w-full h-full bg-violet-800 opacity-20 group-hover/ContactBtn:translate-x-full z-0 duration-200"></div>
              <h4>{form?.success && submitted ? 'Thank you ✨' : loading ? 'Sending message' : 'Work With Me'}</h4>
        </button>
      </div>
    </form>
  </div>
  
</section>
</main> -->

<!-- <script>
  import { isMenuOpen } from '$lib/menuStore';
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";

  export let form;
  let submitted = false;
  let loading = false;
  let successMessage = "";
  // Function to handle form submission
  async function handleSubmit(event) {
    // event.preventDefault();

    // Set loading to true to display "Sending message..." text
    loading = true;

    // Simulate form submission delay (you should replace this with your actual form submission logic)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Set loading back to false after delay
    loading = false;

    // Set submitted to true to display success message
    submitted = true;
    
    // Set success message immediately
    successMessage = "Thank you ✨";

    // Reset form after submission
    event.target.reset();

    // Clear success message after some time
    setTimeout(() => {
      // Revert the button text to "Work With Me"
      submitted = false;
    }, 5000);
}
</script>

<main class="flex flex-col flex-1 p-4">
  <section id="contact" class="py-20 lg:py-24 flex flex-col gap-10 sm:gap-12 md:gap-14">
    <div class="flex flex-col gap-2 items-center justify-center text-center">
      <h2 class="text-large sm:text-xl md:text-2xl text-balance">Get in Touch</h2>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-balance">Let's <span class="poppins text-violet-400">Connect</span></h3>
    </div>
    <div class="flex justify-center">

    //<div class="flex flex-col mb-10 mx-auto">
    <div class="flex justify-center items-center">
      <form action="https://getform.io/f/qalppdga" method="POST" class="flex flex-col w-full md:w-[800px] z-10">
        <input type="text" name="name" placeholder="Name" class="p-2 bg-transparent border-2 rounded-md focus:outline-none">
        <input type="email" name="email" placeholder="Email" class="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none">
        <textarea name="message" placeholder="Message" rows="10" class="mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"></textarea>
        // add hidden Honeypot input to prevent spams
        <input type="hidden" name="_gotcha" style="display:none !important">
        <button aria-label="Work With Me" class="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white">
          Work With Me
        </button>
      </form>
    </div>
  </div>

  // pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$" title="must be a valid email address" OR pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}" title="must be a valid email address"

    // <form method="POST" on:submit|preventDefault={handleSubmit} class="flex flex-col w-full max-w-sm md:max-w-md lg:max-w-lg z-10">
    // <form method="POST" class="flex flex-col w-full md:w-[800px] z-10" use:enhance on:submit={() => submitted = true}>

    <form method="POST" class="flex flex-col w-full md:w-[800px] z-10" use:enhance on:submit|preventDefault={handleSubmit}>
    
    <p class="text-sm poppins font-normal leading-none text-slate-400 mb-2">* indicates required field</p>
    
    <label for="name" class="sr-only">Name *</label>
    <input type="text" id="name" name="name" value={form?.name?.value ?? ''} placeholder="Name *" aria-label="Name" class="poppins p-2 bg-transparent border border-solid border-violet-700 rounded-lg group hover:border-violet-400 duration-200 transition-height focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0} required />
    
    <p class="error text-xs mt-1 min-h-5 text-red-400">{form?.name?.error ?? ''}</p>
  
    <label for="email" class="sr-only">Email *</label>
    <input type="email" id="email" name="email" value={form?.email?.value ?? ''} placeholder="Email *" aria-label="Email" class="poppins p-2 bg-transparent border border-solid border-violet-700 rounded-lg group hover:border-violet-400 duration-200 transition-height focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0} required />
     
    <p class="error text-xs mt-1 min-h-5 text-red-400">{form?.email?.error ?? ''}</p>
    
    <label for="message" class="sr-only">Message</label>
    <textarea id="message" name="message" value={form?.message?.value ?? ''} placeholder="Message" aria-label="Message" rows="6" class="poppins mb-5 p-2 bg-transparent border border-solid border-violet-700 rounded-lg group hover:border-violet-400 duration-200 transition-height focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0}></textarea>

    <div class="flex justify-start">
      <button type="submit" aria-label="Work With Me" class:loading class="font-medium text-base md:text-lg poppins relative overflow-hidden px-3 py-1.5 rounded-full bg-gray-100 text-slate-950 cursor-pointer z-10 hover:bg-gray-200 duration-200 group/ContactBtn whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0} disabled={loading}>
        <div class="absolute top-0 right-full w-full h-full bg-violet-800 opacity-20 group-hover/ContactBtn:translate-x-full z-0 duration-200"></div>
        <h4>{submitted ? successMessage : loading ? 'Sending message' : 'Work With Me'}</h4>
      </button>
    </div>
  </form>

      //{#if form?.success}
	    // this message is ephemeral; it exists because the page was rendered in response to a form submission. it will vanish if the user reloads
	    <p>Successfully send a message {data.message}</p>
      {/if}

</div>
</section>
</main> -->

<!-- <script>
  import { isMenuOpen } from '$lib/menuStore';
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";

  export let form;

  let submitted = false;
  $: loading = submitted && !$page.form?.success;

  function handleSubmit(event) {
    const name = event.target.elements.name.value.trim();
    const email = event.target.elements.email.value.trim();

    // Check if either name or email is empty
    if (!name || !email) {
      return;
    }
    submitted = true;
  }


  $: {
    if ($page.form?.success) {
      setTimeout(() => {
        // Revert the button text to "Work With Me"
        submitted = false;
        // allows subsequent form submissions to trigger the display of the "Sending message" text agaim
        form.success = false;
      }, 2000);
    }
  }

  // $: contactData = form?.contactData;
  $: {
    // Check if form submission is successful and contactData is available
    if ($page.form?.success && $page.form?.contactData) {
      console.log($page.form.contactData); // Log the contactData object
    }
  }
</script>

<main class="flex flex-col flex-1 p-4">
  <section id="contact" class="py-20 lg:py-24 flex flex-col gap-10 sm:gap-12 md:gap-14">
    <div class="flex flex-col gap-2 items-center justify-center text-center">
      <h2 class="text-large sm:text-xl md:text-2xl text-balance">Get in Touch</h2>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-balance">Let's <span class="poppins text-violet-400">Connect</span></h3>
    </div>

    <div class="flex justify-center">

        //<form method="POST" class="flex flex-col w-full md:w-[800px] z-10" use:enhance={async ({ result }) => await applyAction(result)}>

        <form method="POST" class="flex flex-col w-full md:w-[800px] z-10" use:enhance on:submit={handleSubmit}>
        <p class="text-sm poppins font-normal leading-none text-slate-400 mb-2">* indicates required field</p>

        <label for="name" class="sr-only">Name *</label>
        <input type="text" id="name" name="name" value={form?.contactData?.user?.value ?? ''} placeholder="Name *" aria-label="Name" class="poppins p-2 bg-transparent border border-solid border-violet-700 rounded-lg group hover:border-violet-400 duration-200 transition-height focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0}  />
        <p class="error text-xs mt-1 min-h-5 text-red-400">{form?.contactData?.nameError ?? ''}</p>

        <label for="email" class="sr-only">Email *</label>
        <input type="email" id="email" name="email" value={form?.contactData?.email.value ?? ''} placeholder="Email *" aria-label="Email" class="poppins p-2 bg-transparent border border-solid border-violet-700 rounded-lg group hover:border-violet-400 duration-200 transition-height focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0}  />
        <p class="error text-xs mt-1 min-h-5 text-red-400">{form?.contactData?.emailError ?? ''}</p>

        <label for="message" class="sr-only">Message</label>
        <textarea id="message" name="message" value={form?.contactData?.message.value ?? ''} placeholder="Message" aria-label="Message" rows="6" class="poppins mb-5 p-2 bg-transparent border border-solid border-violet-700 rounded-lg group hover:border-violet-400 duration-200 transition-height focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0}></textarea>

        <div class="flex justify-start">
          
          //<button type="submit" aria-label="Work With Me" class:submitted class:loading class="font-medium text-base md:text-lg poppins relative overflow-hidden px-3 py-1.5 rounded-full bg-gray-100 text-slate-950 cursor-pointer z-10 hover:bg-gray-200 duration-200 group/ContactBtn whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0} disabled={submitted}>
            <div class="absolute top-0 right-full w-full h-full bg-violet-800 opacity-20 group-hover/ContactBtn:translate-x-full z-0 duration-200"></div>
            <h4>{form?.success ? 'Thank you ✨' : loading ? 'Sending message' : 'Work With Me'}</h4>
          </button>


          <button type="submit" aria-label="Work With Me" class:submitted class:loading class="font-medium text-base md:text-lg poppins relative overflow-hidden px-3 py-1.5 rounded-full bg-gray-100 text-slate-950 cursor-pointer z-10 hover:bg-gray-200 duration-200 group/ContactBtn whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0} disabled={submitted}>
            <div class="absolute top-0 right-full w-full h-full bg-violet-800 opacity-20 group-hover/ContactBtn:translate-x-full z-0 duration-200"></div>
            <h4>{form?.success && submitted ? 'Thank you ✨' : loading ? 'Sending message' : 'Work With Me'}</h4>               
        </button>
        
        
        </div>
      </form>
    </div>
  </section>
</main> -->