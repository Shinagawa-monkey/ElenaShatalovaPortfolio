<script>
  import "../app.css";
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
  import { isMenuOpen } from '$lib/menuStore';

  let y;
  let innerWidth = 0;
  let innerHeight = 0;

  function goTop() {
    document.body.scrollIntoView();
  };

  import { onMount } from 'svelte';
  import { theme } from '$lib/theme';

  let currentTheme;

  // Subscribe to theme changes
  theme.subscribe(($theme) => {
    currentTheme = $theme;
  });

  // Check localStorage for theme preference on mount
  onMount(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      theme.set(storedTheme);
    }
  });
</script>

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen" class:dark={$theme === 'dark'}>

  <div class={"fixed bottom-5 sm:bottom-10 right-4 duration-200 z-[2] " + (y > 0 ? ' opacity-full pointer-events-auto' : ' opacity-0 pointer-events-none')}>
    <button on:click={goTop} class="rounded-full aspect-square bg-violet-600 dark:bg-slate-900 text-white dark:text-violet-400 px-3 sm:px-4  hover:bg-violet-700 dark:hover:bg-slate-800 cursor-pointer grid place-items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50" tabindex={$isMenuOpen ? -1 : 0} aria-label="Scroll to top">
      <i class="fa-solid fa-arrow-up select-none" />
    </button>
  </div>

  <Header {y} {innerHeight} {theme}/>
  <slot />
  <Footer />
  
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
