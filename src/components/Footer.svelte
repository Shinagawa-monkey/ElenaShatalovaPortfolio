<script>
  import { isMenuOpen } from '$lib/menuStore';
  import { theme } from '$lib/theme';
</script>

<footer class="py-5 sm:py-10 bg-blue-700 dark:bg-black border-t border-solid border-gray-800 dark:border-violet-950 flex flex-col gap-2 sm:gap-4 justify-center items-center">
  <div class="container max-w-screen-lg mx-auto flex flex-wrap justify-center">
    <nav>
      <ul class="flex gap-2 md:gap-4">
        <li>
          <a href="https://github.com/Shinagawa-monkey" target="_blank" rel="noopener noreferrer" class="flex rounded-full overflow-hidden bg-white dark:bg-gray-100 hover:bg-violet-400 dark:hover:bg-violet-500  p-2 transition-transform duration-300 ease-in-out transform hover:translate-y-[-2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 select-none" aria-label="GitHub" tabindex={$isMenuOpen ? -1 : 0}>
            <!-- Add accessible name for GitHub -->
            <span class="sr-only">GitHub</span>
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"  alt="GitHub Icon">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/elena-shatalova/" target="_blank" rel="noopener noreferrer" class="flex rounded-full overflow-hidden bg-white hover:bg-violet-400 dark:hover:bg-violet-500 p-2 transition-transform duration-300 ease-in-out transform hover:translate-y-[-2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 select-none" aria-label="LinkedIn" tabindex={$isMenuOpen ? -1 : 0}>
            <!-- Add accessible name for LinkedIn -->
            <span class="sr-only">LinkedIn</span>
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"  alt="LinkedIn Icon">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://discord.com/users/shinagawaMonkey#9910" target="_blank" rel="noopener noreferrer" class="flex rounded-full overflow-hidden bg-white hover:bg-violet-400 dark:hover:bg-violet-500 p-2 transition-transform duration-300 ease-in-out transform hover:translate-y-[-2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 select-none" aria-label="Discord" tabindex={$isMenuOpen ? -1 : 0}>
            <!-- Add accessible name for Discord -->
            <span class="sr-only">Discord</span>
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" alt="Discord Icon">
              <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sudoCyberMonkey" target="_blank" rel="noopener noreferrer" class="flex rounded-full overflow-hidden bg-white hover:bg-violet-400 dark:hover:bg-violet-500 p-2 transition-transform duration-300 ease-in-out transform hover:translate-y-[-2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 select-none" aria-label="Twitter" tabindex={$isMenuOpen ? -1 : 0}>
            <!-- Add accessible name for Twitter -->
            <span class="sr-only">Twitter</span>
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" alt="Twitter Icon">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <p class="text-sm md:text-base mt-2 opacity-50 flex items-center poppins whitespace-nowrap flex-wrap justify-center text-white">
   Crafted with 
   {#if $theme === 'light'}
      <img class="ml-1 mr-1 w-6 h-6" src="/images/heartLight.svg" alt="Heart Icon">
    {:else}
      <img class="ml-1 mr-1 w-6 h-6" src="/images/heartDark.svg" alt="Heart Icon">
    {/if}
    <span class="flex items-center">by Elena Shatalova &copy; {new Date().getFullYear()}</span>.
  </p>
</footer>