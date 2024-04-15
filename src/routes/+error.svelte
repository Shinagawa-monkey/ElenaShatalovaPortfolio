<script>
  import { theme } from '$lib/theme';
  // import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { isMenuOpen } from '$lib/menuStore';

  // Handle redirection to home page
  function redirectToHome() {
      goto('/');
  }
</script>

<!-- <h1>{$page.status}: {$page.error.message}</h1>
  <h1>An error occurred</h1>
  <p>Sorry, something went wrong.</p>
<button on:click={redirectToHome}>Go back to Home</button> -->

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
  <button on:click={redirectToHome} class="relative text-base sm:text-lg md:text-xl font-medium poppins overflow-hidden px-6 py-3 rounded-full bg-white dark:bg-gray-100 text-violet-700 dark:text-slate-900 cursor-pointer z-[1] hover:bg-gray-50 dark:hover:bg-gray-200 duration-200 group/GoHomeBtn whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50 border border-violet-400 dark:order-violet-700" tabindex={$isMenuOpen ? -1 : 0} aria-label="Return to Homepage">
    <div class="absolute top-0 right-full w-full h-full bg-violet-400 dark:bg-violet-800 opacity-20 group-hover/GoHomeBtn:translate-x-full z-0 duration-200"></div>
      Return to Homepage
  </button>

</main>


<!-- {#if $page.status === 404}
    <h1>You must be lost</h1>
    <a href="/">Go Home</a>
{:else if $page.status === 500} 
    <h1>Whoops. We weren't expecting that</h1>
    <p>We're investigating the issue</p>
{/if} -->
<style>
  /* Set minimum height for main content */
  main {
    /* flex: 1; */
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    min-height: calc(100vh - (var(--header-height) + var(--footer-height)));
    min-height: calc(100svh - (var(--header-height) + var(--footer-height)));
  }
</style>