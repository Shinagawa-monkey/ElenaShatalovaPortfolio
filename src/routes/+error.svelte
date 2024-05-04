<script>
  import { theme } from '$lib/theme';
  import { goto } from '$app/navigation';
  import { isMenuOpen } from '$lib/menuStore';

  // Handle redirection to home page
  function redirectToHome() {
    goto('/');
  }
</script>

<main class="flex flex-1 flex-col items-center justify-center min-h-screen px-4 pb-8">

  <!-- Error Image -->
  {#if $theme === 'light'}
    <img src={"/images/notFoundLight.png"} alt="Page Not Found" class="max-w-md w-full mb-4" loading="lazy" />
  {:else}
    <img src={"/images/notFoundDark.png"} alt="Page Not Found" class="max-w-md w-full mb-4" loading="lazy" />
  {/if}
  
  <!-- Error Message -->
  <h1 class="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-balance poppins text-violet-700 dark:text-violet-400 my-4">Oops! Page not found.</h1>
  <p class="text-base sm:text-lg md:text-xl text-center text-pretty poppins text-gray-700 dark:text-slate-300 mb-6">
      We're sorry, but the page you are looking for does not exist.
  </p>

  <!-- Return Home Button -->
  <button on:click={redirectToHome} class="relative text-base sm:text-lg md:text-xl font-medium poppins overflow-hidden px-6 py-3 rounded-full bg-white dark:bg-gray-100 text-violet-700 dark:text-slate-900 cursor-pointer z-[1] hover:bg-gray-50 dark:hover:bg-gray-200 duration-200 group/GoHomeBtn whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50 border border-violet-400 dark:border-violet-700" tabindex={$isMenuOpen ? -1 : 0} aria-label="Return to Homepage">
    <div class="absolute top-0 right-full w-full h-full bg-violet-400 dark:bg-violet-800 opacity-20 group-hover/GoHomeBtn:translate-x-full z-[0] duration-200"></div>
      Return to Homepage
  </button>
</main>

<style>
  /* Set minimum height for main content */
  main {
    min-height: calc(100vh - (var(--header-height) + var(--footer-height)));
    min-height: calc(100svh - (var(--header-height) + var(--footer-height)));
  }
</style>