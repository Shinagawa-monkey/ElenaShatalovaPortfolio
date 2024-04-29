<script>
  // https://scottspence.com/posts/contact-form-send-email-from-site
  // https://www.loganwilliams.tech/posts/first-post

  // https://svelte.dev/examples/svg-transitions
  // https://learn.svelte.dev/tutorial/dimensions

  //Vershion short code: 78.5 desktop 45.7 mobile

  import Step from "../components/Step.svelte"
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import { isMenuOpen } from '$lib/menuStore';
  // import { theme } from '$lib/theme';
  //import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'

  export let form;
  let submitted = false;
  let loading = false;
  let successMessage = "";

  const handleSubmit = async (event) => {
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
    // event.target.reset();

    // Clear success message after some time
    setTimeout(() => {
      // Revert the button text to "Work With Me"
      submitted = false;
    }, 3000);
  }

  let projectImagesDark = [
    ["/images/projectImages/tastyTreatsDark1.jpg", "/images/projectImages/tastyTreatsDark2.jpg", "/images/projectImages/tastyTreatsDark3.jpg", "/images/projectImages/tastyTreatsDark4.jpg"],
    ["/images/projectImages/projectHubDark1.jpg", "/images/projectImages/projectHubDark2.jpg", "/images/projectImages/projectHubDark3.jpg"],
    ["/images/projectImages/myWalletDark1.jpg", "/images/projectImages/myWalletDark2.jpg"]
  ];

  let projectImagesLight = [
    ["/images/projectImages/tastyTreatsLight1.jpg", "/images/projectImages/tastyTreatsLight2.jpg", "/images/projectImages/tastyTreatsLight3.jpg", "/images/projectImages/tastyTreatsLight4.jpg"],
    ["/images/projectImages/projectHubLight1.jpg", "/images/projectImages/projectHubLight2.jpg", "/images/projectImages/projectHubLight3.jpg"],
    ["/images/projectImages/myWalletLight1.jpg", "/images/projectImages/myWalletLight2.jpg"]
  ];

  let steps = [
    {name: 'Tasty Treats', icon: 'fa-solid fa-bowl-food', href: 'https://tasty-treats-site.web.app/', technologies: 'React, Firebase, Cloud Firestore, Bootstrap, Axios,  TheMealDB API'},
    {name: 'ProjectHub', icon: 'fa-solid fa-circle-check', href: 'https://project-hub-site.web.app/', technologies: 'React, Firebase, Cloud Firestore, Bootstrap, React Router, date-fns'},
    {name: 'My Wallet', icon: 'fa-solid fa-wallet', href: 'https://my-wallet-site.web.app/', technologies: 'React, Firebase, Cloud Firestore, Bootstrap, React Router'},
  ];

  let benefits = [
    { 
      year: "Today", 
      title: "Solo Developer", 
      duration: "1 year", 
      details: "As a solo developer, I specialize in crafting software solutions tailored for both personal and client projects. Each project involves a comprehensive approach, starting from strategic planning and design, and concluding with the practical implementation of solutions to real-world challenges using code." 
    },
    { 
      year: "Today", 
      title: "Full Stack Developer", 
      duration: "4 years", 
      details: "Over the past three years, I've thrived as a Full Stack Developer, actively contributing to digital marketing projects. My responsibilities include integrating apps using REST and various APIs, reviewing and debugging code on both the front-end and back-end, and effectively managing SQL and NoSQL databases. Proficient in a diverse tech stack, including JavaScript, TypeScript, MongoDB, Express.js, React, SvelteKit, and other complementary languages and tools." 
    },
    { 
      year: "2020", 
      title: "Tech Education", 
      duration: "4 years", 
      details: "Starting in 2020, I embarked on an intensive learning path covering data structures, algorithms, and full-stack web development. I completed courses such as BitDegree's Web Developer learning path, Sololearn's Full Stack Web Developer learning path, and Codecademy's Web Development Career Path. Further expanding my skills, I pursued additional courses on Udemy, including \"The Complete 2022 Web Development Bootcamp,\" \"Master the Coding Interview: Data Structures + Algorithms\", and \"Build Web Apps with React & Firebase\"." 
    },
    { 
      year: "2019", 
      title: "First Line of Code", 
      duration: "the beginning", 
      details: "I wrote my first line of code, marking the beginning of my journey into digital craftsmanship. This pivotal moment, especially surprising for someone who had previously identified in a non-technical realm, laid the foundation for my substantial professional growth." 
    },
  ];

  // let currentTheme;
  // theme.subscribe(value => currentTheme = value);

  // const handleSubmit = () => {

  // }

  // Define a variable to hold the Swiper instance
  let swiperInstance;

  // Function to initialize Swiper
  function initSwiper() {
    swiperInstance = new Swiper('.swiper', {
      grabCursor: true,
      effect: 'creative',
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      },
      loop: true,
      autoHeight: true
    });
  }

  // Function to destroy Swiper instance
  function destroySwiper() {
    if (swiperInstance && swiperInstance.destroy) {
      swiperInstance.destroy();
    }
  }

  // Call initSwiper when the component is mounted
  onMount(initSwiper);

  // Reinitialize Swiper after each update
  afterUpdate(initSwiper);

  // Destroy Swiper when the component is destroyed
  onDestroy(destroySwiper);
</script>

<main class="flex flex-col flex-1 p-4">
  <section id="intro" class="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-8 sm:pt-14">
  <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
    <h1 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-balance select-none">
      <span class="text-4xl sm:text-5xl md:text-6xl">Hi! I'm </span>
      <span class="poppins text-violet-700 dark:text-violet-400 text-4xl sm:text-5xl md:text-6xl">Elena</span> <span class="text-4xl sm:text-5xl md:text-6xl">Shatalova</span><br />
      Software <span class="poppins text-violet-700 dark:text-violet-400">Engineer</span> &amp; <br />
      Full Stack <span class="poppins text-violet-700 dark:text-violet-400">Developer</span>
    </h1>
  
    <p class="text-base sm:text-lg md:text-xl text-pretty">I specialize in 
      <span class="text-violet-700 dark:text-violet-400">JavaScript</span> 
      (<span class="text-violet-700 dark:text-violet-400">React</span>, <span class="text-violet-700 dark:text-violet-400">Next.js</span>, or <span class="text-violet-700 dark:text-violet-400">SvelteKit</span>), 
      <span class="text-violet-700 dark:text-violet-400">Tailwind CSS</span>,  
      <span class="text-violet-700 dark:text-violet-400">Bootstrap</span>, and the powerful combo of 
      <span class="text-violet-700 dark:text-violet-400">Node.js + Express.js</span>.<br />
      Database challenges? Consider them solved—be it <span class="text-violet-700 dark:text-violet-400">MongoDB</span>, 
      <span class="text-violet-700 dark:text-violet-400">PostgreSQL</span>, 
      <span class="text-violet-700 dark:text-violet-400">Firebase</span>, or 
      <span class="text-violet-700 dark:text-violet-400">Firestore</span>. Let's turn ideas into innovation!
    </p>
    <!-- <a href="https://www.linkedin.com/in/elena-shatalova/" target="_blank" class="font-medium blueShadowLight dark:blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-violet-700 dark:text-slate-950 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 whitespace-nowrap select-none" tabindex={$isMenuOpen ? -1 : 0} aria-label="LinkedIn Profile">
      <div class="absolute top-0 right-full w-full h-full bg-violet-600 dark:bg-violet-400 opacity-20 group-hover:translate-x-full z-[0] duration-200"></div>
        <span class="relative z-[1]">Get in touch &rarr;</span>
    </a> -->
    <a href="https://www.linkedin.com/in/elena-shatalova/" target="_blank" class="font-medium blueShadowLight dark:blueShadowDark mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white dark:bg-gray-100 text-violet-700 dark:text-slate-900 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-200 duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 whitespace-nowrap select-none" tabindex={$isMenuOpen ? -1 : 0} aria-label="LinkedIn Profile">
      <div class="absolute top-0 right-full w-full h-full bg-violet-400 dark:bg-violet-800 opacity-20 group-hover:translate-x-full z-[0] duration-200"></div>
        <span class="relative z-[1]">Get in touch &rarr;</span>
    </a>
  </div>

  <!-- <div class="relative shadow-2xl grid place-items-center"> -->
  <div class="flex flex-col f-full h-full">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <!-- <img src={"/images/profile.png"} alt="Profile Image" class="object-cover z-[1] max-h-[70vh]" loading="lazy" /> -->
    <!-- <Canvas class="w-full max-w-full h-auto"> -->
    <Canvas>
      <Scene class="h-full flex-grow" /> 
    </Canvas>
  </div>
  </section>
  
  <section id="projects" class="pt-20 lg:pt-24 flex flex-col gap-10 sm:gap-12 md:gap-14">
    <div class="flex flex-col gap-2 items-center justify-center text-center">
      <h2 class="text-large sm:text-xl md:text-2xl text-balance select-none">A few of my creative endeavors.</h2>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-balance select-none">Curious to <span class="poppins text-violet-700 dark:text-violet-400">see</span> my work?</h3>
     </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]} images={{dark: projectImagesDark[0], light: projectImagesLight[0]}}>
        <p class="text-sm sm:text-base md:text-lg text-pretty">Tasty Treats is a refined <strong class="text-violet-700 dark:text-violet-400">content management system app</strong> designed for easy recipe exploration. Easily discover, favorite, search, and comment on recipes with this user-friendly app. 
        </p>
      </Step>
      <Step step={steps[1]} images={{dark: projectImagesDark[1], light: projectImagesLight[1]}}>
        <p class="text-sm sm:text-base md:text-lg text-pretty">ProjectHub is a robust <strong class="text-violet-700 dark:text-violet-400">project management app</strong>. Seamlessly add, assign, track, and comment on projects with precision. Effortlessly explore projects by category and owner.
        </p>
      </Step>
      <Step step={steps[2]} images={{dark: projectImagesDark[2], light: projectImagesLight[2]}}>
        <p class="text-sm sm:text-base md:text-lg text-pretty">My Wallet is an elegant <strong class="text-violet-700 dark:text-violet-400">financial transaction management app</strong> that helps you manage your financial transactions in a simple and efficient way. Track, edit, and delete entries with ease.
        </p>
      </Step>
    </div>
  </section>

<!-- MY MAIN VERSION HERE ============>    <section id="about" class="py-20 lg:py-24 flex flex-col gap-10 sm:gap-12 md:gap-14 relative">
  <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
    <h2 class="text-large sm:text-xl md:text-2xl text-balance">Want to know more?</h2>
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-balance">A bit <span class="poppins text-violet-400">about</span> me.</h3>
  </div>
  <div class="flex flex-col md:flex-row justify-center">
    <div class="w-full md:w-[800px]">
      <ol class="relative border-l border-slate-700">
        {#each benefits as benefit}
        //<li class="mb-10 ml-4 last:mb-0 scroll-reveal">
        <li class="mb-10 ml-4 last:mb-0">
          <div class="absolute w-3 h-3 bg-slate-700 rounded-full mt-2.5 sm:mt-3 md:mt-5 lg:mt-4.5 -left-1.5 border border border-slate-900 exclude-from-styling"></div>
          <div class="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm section-title">
            <span class="inline-block px-3 py-1 font-semibold poppins text-white bg-violet-700 rounded-full shadow-md text-sm sm:text-base">
             {benefit.year}
            </span>
            <h4 class="text-2xl sm:text-3xl md:text-5xl font-semibold poppins text-white">
             {benefit.title}
            </h4>
            <div class="my-1 text-sm poppins font-normal leading-none text-slate-400">
             {benefit.duration}
            </div>
          </div>
          <p class="mt-2 text-base sm:text-lg md:text-xl text-slate-300 text-pretty">
            {benefit.details}
          </p>
        </li>
        {/each}
      </ol>
    </div>
  </div>
</section> -->

<section id="about" class="pt-20 lg:pt-24 flex flex-col gap-10 sm:gap-12 md:gap-14 relative">
  <div class="flex flex-col gap-2 items-center justify-center text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-500 dark:before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-500 dark:after:bg-violet-700 py-4">
    <h2 class="text-large sm:text-xl md:text-2xl text-balance select-none">Want to know more?</h2>
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-balance select-none">A bit <span class="poppins text-violet-700 dark:text-violet-400">about</span> me.</h3>
  </div>
  <div class="flex flex-col md:flex-row justify-center px-4 sm:px-6 md:px-8">
    <div class="w-full md:w-[800px] relative">
      <!-- Line on the left side of the ul -->
      <div class="absolute h-full left-0 top-0 w-[4px] bg-gray-800 dark:bg-slate-700"></div>
      <ul class="relative pl-8 md:pl-10">
        {#each benefits as benefit}
        <li class="mb-10 ml-4 last:mb-0">
          <figure class="absolute -left-9 stroke-gray-800 dark:stroke-slate-700 -mt-1 sm:mt-0 md:mt-1">
            <svg class="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
              <circle cx="75" cy="50" r="20" class="stroke-violet-500 dark:stroke-violet-700 stroke-1 fill-none" />
              <circle cx="75" cy="50" r="20" class="stroke-[5px] fill-gray-50 dark:fill-slate-50" />
              <circle cx="75" cy="50" r="10" class="stroke-1 fill-violet-500 dark:fill-violet-700" />
            </svg>
          </figure>
          <div class="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm section-title">
            <span class="inline-block px-3 py-1 font-semibold poppins text-gray-950 dark:text-white bg-violet-500 dark:bg-violet-700 rounded-full shadow-md text-sm sm:text-base select-none">
             {benefit.year}
            </span>
            <h4 class="text-2xl sm:text-3xl md:text-5xl font-semibold poppins text-gray-900 dark:text-white select-none">
             {benefit.title}
            </h4>
            <div class="my-1 text-sm poppins font-normal leading-none text-gray-700 dark:text-slate-400 select-none">
             {benefit.duration}
            </div>
          </div>
          <p class="mt-2 text-base sm:text-lg md:text-xl text-gray-800 dark:text-slate-300 text-pretty">
            {benefit.details}
          </p>
        </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<section id="contact" class="py-20 lg:py-24 flex flex-col gap-10 sm:gap-12 md:gap-14">
  <div class="flex flex-col gap-2 items-center justify-center text-center">
    <h2 class="text-large sm:text-xl md:text-2xl text-balance select-none">Get in Touch</h2>
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-balance select-none">Let's <span class="poppins text-violet-700 dark:text-violet-400">Connect</span></h3>
  </div>

  <div class="flex justify-center">
    <form method="POST" class="flex flex-col w-full md:w-[800px]" use:enhance on:submit={handleSubmit}>
      <p class="text-sm poppins font-normal leading-none text-gray-700 dark:text-slate-400 mb-3">* indicates required field</p>
  
      <label for="name" class="sr-only">Name *</label>
      <input type="text" id="name" name="name" value={form?.contact?.name?.value ?? ''} placeholder="Name *" aria-label="Name" class="placeholder-gray-700 dark:placeholder-slate-400 poppins p-2 bg-transparent border border-solid border-violet-600 dark:border-violet-700 rounded-lg group hover:border-violet-800 dark:hover:border-violet-400 duration-200 transition-height focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0} required />
      <p class="error text-xs mt-1 min-h-5 text-red-500 dark:text-red-400">{form?.nameError ?? ''}</p>
  
      <label for="email" class="sr-only">Email *</label>
      <input type="email" id="email" name="email" value={form?.contact?.email?.value ?? ''} placeholder="Email *" aria-label="Email" class="placeholder-gray-700 dark:placeholder-slate-400 poppins p-2 bg-transparent border border-solid border-violet-600 dark:border-violet-700 rounded-lg group hover:border-violet-800 dark:hover:border-violet-400 duration-200 transition-height focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0} required />
      <p class="error text-xs mt-1 min-h-5 text-red-500 dark:text-red-400">{form?.emailError ?? ''}</p>
  
      <label for="message" class="sr-only">Message</label>
      <textarea id="message" name="message" value={form?.contact?.message?.value ?? ''} placeholder="Message" aria-label="Message" rows="6" class="placeholder-gray-700 dark:placeholder-slate-400 poppins mb-5 p-2 bg-transparent border border-solid border-violet-600 dark:border-violet-700 rounded-lg group hover:border-violet-800 dark:hover:border-violet-400 duration-200 transition-height focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0}></textarea>
  
      <div class="flex justify-start">
        <!-- <button type="submit" aria-label="Work With Me" class:submitted class:loading class="font-medium text-base md:text-lg poppins relative overflow-hidden px-3 py-1.5 rounded-full bg-violet-600 dark:bg-gray-100 text-white  dark:text-slate-950 cursor-pointer hover:bg-violet-700 dark:hover:bg-gray-200 duration-200 group/ContactBtn whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0} disabled={loading}>
            <div class="absolute top-0 right-full w-full h-full bg-violet-500 dark:bg-violet-800 opacity-10  dark:opacity-20 group-hover/ContactBtn:translate-x-full z-[0] duration-200"></div>
            <h4 class="relative z-[1]">{submitted ? successMessage : loading ? 'Sending message' : 'Work With Me'}</h4>
        </button> -->
        <button type="submit" aria-label="Work With Me" class:submitted class:loading class="font-medium text-base md:text-lg poppins relative overflow-hidden px-6 py-2 rounded-full bg-white dark:bg-gray-100 text-violet-700 dark:text-slate-900 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-200 duration-200 group/ContactBtn whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 border border-violet-400 dark:border-violet-700 select-none" tabindex={$isMenuOpen ? -1 : 0} disabled={loading}>
          <div class="absolute top-0 right-full w-full h-full bg-violet-400 dark:bg-violet-800 opacity-20 group-hover/ContactBtn:translate-x-full z-[0] duration-200"></div>
          <h4 class="relative z-[1]">{submitted ? successMessage : loading ? 'Sending message' : 'Work With Me'}</h4>
        </button>
        
      </div>  
    </form>
  </div>
  
</section>

</main>

<!-- <style>
  Mars: #D45500, #B87333

  light theme:
  bg-sky-200 - #B0E2FF;

  Text Contrast Color:
  text-navy-900 - dark blue (#002366) / text-navy-800 - navy blue (#001F4D)
  Design Element Contrast Color:
  text-royal-blue-500 - royal blue (#4169E1) / text-midnight-blue-800 - midnight blue (#191970)


  .scroll-reveal > :not(.exclude-from-styling),
  .scroll-reveal > .section-title > :not(.exclude-from-styling) {
    color: hsl(0 0% 100% / 0.2);
    background-clip: text;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-image: linear-gradient(90deg, white, white);
    animation: scroll-reveal linear forwards;
    animation-timeline: view(y);
    animation-range-start: cover 20vh;
    animation-range-end: cover 30vh;
  }

  .scroll-reveal > p {
    animation-range-start: cover 22.5vh;
    animation-range-end: cover 50vh;
  }

  @keyframes scroll-reveal {
    to {
      background-size: 100% 100%;
    }
  }

  /* Custom CSS to change placeholder opacity on focus */
  input:focus::placeholder,
  textarea:focus::placeholder {
    opacity: 0.75; /* Adjust opacity as needed */
    transition: opacity 0.3s ease-in-out; /* Smooth transition */
  }
</style> -->