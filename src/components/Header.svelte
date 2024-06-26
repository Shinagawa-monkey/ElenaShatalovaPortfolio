<script>
  import { theme, toggleTheme } from '$lib/theme';
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { isMenuOpen } from '$lib/menuStore';
  import { page } from '$app/stores';

  export let y;

  let tabs = [
    { name: "Projects ", link: "#projects" },
    { name: "About me", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  let error = $page.error;

  let currentTheme = null;
  const unsubscribe = theme.subscribe(value => {
    if (typeof window !== 'undefined') {
      document.documentElement.dataset.theme = value;
      document.cookie = `appTheme=${value};max-age=31536000;path=/`;
    }
    currentTheme = value;
  });

  // Cleanup the subscription when the component is destroyed
  onDestroy(() => {
    unsubscribe();
  });
  
  let windowWidth = writable(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Set initial values based on window width
  let isFlex = false;
  let isOpen = false;
  let isHidden = false;

  const handleResize = () => {
    windowWidth.set(window.innerWidth);
  };

  let btn, menu, logo;
  
  onMount(() => {
    window.addEventListener('resize', handleResize);
    btn = document.getElementById('btn');
    menu = document.getElementById('menu');
    logo = document.getElementById('logo');

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  $: {
    const width = $windowWidth;
    isFlex = width <= 768;
    isOpen = false;
    isFlex = false;
    isHidden = false;
  }

  function navToggle() {
    isOpen = !isOpen;
    isFlex = !isFlex;
    isHidden = !isHidden;
    isMenuOpen.update(value => !value);
  };
</script>

<header class={"sticky z-[2] top-0 duration-200 px-4 flex items-center justify-between border-b border-solid " + (y > 0 && !isOpen ? " py-4 bg-blue-300 dark:bg-slate-950 border-gray-800 dark:border-violet-950" : " py-6 bg-transparent border-transparent")}>

  <div class="flex items-center justify-between w-full">
    <h1 bind:this={logo} class="font-medium z-[3] select-none" id="logo" aria-label="Logo: Elena Shatalova">
      <b class="font-bold poppins">Elena</b> Shatalova
    </h1>
    <!-- Menu Items -->
    <div class="hidden ml-auto md:flex">
      <ul class="flex items-center gap-4 uppercase">
        {#if !$page.error && $page.url.pathname === '/'}
          {#each tabs as tab, index}
            <li>
              <a href={tab.link} class="tracking-widest duration-200 hover:text-violet-700 dark:hover:text-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 whitespace-nowrap" target={index === 3 ? "_blank" : ""} >
                <span>{tab.name}</span>
              </a>
            </li>
          {/each}
        {/if}
        <li class="flex items-center justify-center">
          <a href="https://www.linkedin.com/in/elena-shatalova/" target="_blank" class="font-medium blueShadowLight dark:blueShadowDark relative overflow-hidden px-5 py-2 group rounded-full bg-white dark:bg-gray-100 text-violet-700 dark:text-slate-900 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-200 duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 whitespace-nowrap select-none" aria-label="LinkedIn Profile">
            <div class="absolute top-0 right-full w-full h-full bg-violet-400 dark:bg-violet-800 opacity-20 group-hover:translate-x-full z-[0] duration-200"></div>
            <span class="relative z-[1]">Get in touch</span>
          </a>
        </li>
        <li>
          <button on:click={toggleTheme} class="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-300 transition duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50" aria-label={$theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}>
            {#if $theme === 'light'}
              <img class="w-5 h-5 transition duration-300 ease-in-out" src="/images/moon-to-sun.svg" alt="Light Theme">
            {:else}
              <img class="w-5 h-5 transition duration-300 ease-in-out" src="/images/sun-to-moon.svg" alt="Dark Theme">
            {/if}
          </button>
        </li>
      </ul>
    </div>
    <!-- Hamburger Button -->
    <button 
      bind:this={btn}
      on:click={navToggle} 
      class:open={isOpen}
      id="btn"
      class={`z-[3] block md:hidden hamburger focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 ${isOpen && y > 0 ? 'top-6' : ''}`}
      aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
      aria-expanded={isOpen ? 'true' : 'false'}
      aria-controls="menu"      
      >
      <span class="hamburger-top bg-gray-900 dark:bg-white"></span>
      <span class="hamburger-middle bg-gray-900 dark:bg-white"></span>
      <span class="hamburger-bottom bg-gray-900 dark:bg-white"></span>
    </button>
  </div>
  <!-- Mobile Menu -->
  <div bind:this={menu} class:flex={!isHidden} class:hidden={!isFlex} id="menu" class="fixed inset-0 z-[2] hidden self-end w-svh h-full m-h-screen opacity-[.92] dark:opacity-90 bg-blue-300 dark:bg-slate-950 md:hidden before:opacity-100 before:absolute before:h-10 before:w-screen before:inset-x-0 top-0 before:bg-blue-300  dark:before:bg-slate-950 after:opacity-100 after:absolute after:h-screen after:w-screen afetr:inset-x-0 bottom-0 after:bg-blue-300 dark:after:bg-slate-950">
    <ul class="flex-col items-center px-4 py-1 pt-24 pb-4 tracking-widest text-gray-900 dark:text-white uppercase divide-y divide-gray-800 dark:divide-gray-300">
      {#if !$page.error && $page.url.pathname === '/'}
        {#each tabs as tab, index}
          <li>
            <div class="w-full py-3 text-center">
              <a href={tab.link} class="block duration-200 hover:text-violet-600 dark:hover:text-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 whitespace-nowrap text-gray-950 dark:text-white" target={index === 3 ? "_blank" : ""}>
                <span>{tab.name}</span>
              </a>
            </div>
          </li>
        {/each}
      {/if}
      <div class="flex items-center justify-center w-full px-5 pt-3 pb-14 gap-4">
        <li>
          <a href="https://www.linkedin.com/in/elena-shatalova/" target="_blank" class="font-medium block blueShadowLight dark:blueShadowDark relative overflow-hidden px-5 py-2 group rounded-full bg-white dark:bg-gray-100 text-violet-700 dark:text-slate-900 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-200 duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 whitespace-nowrap select-none" aria-label="LinkedIn Profile">
            <div class="absolute top-0 right-full w-full h-full bg-violet-400 dark:bg-violet-800 opacity-20 group-hover:translate-x-full z-[0] duration-200"></div>
            <h4 class="relative z-[1]">Get in touch</h4>
          </a>
        </li>
        <li>
          <button on:click={toggleTheme} class="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-300 transition duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50" aria-label={$theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}>
            {#if $theme === 'light'}
              <img class="w-5 h-5 transition duration-300 ease-in-out" src="/images/moon-to-sun.svg" alt="Light Theme">
            {:else}
              <img class="w-5 h-5 transition duration-300 ease-in-out" src="/images/sun-to-moon.svg" alt="Dark Theme">
            {/if}
          </button>
        </li>
      </div>
    </ul>
  </div>
</header>


<style>
  .hamburger {
    width: 24px;
    cursor: pointer;
    height: 24px;
    transition: all 0.25s;
    position: relative;
  }

  .hamburger-middle,
  .hamburger-top,
  .hamburger-bottom {
    content: '';
    position: absolute;
    width: 24px;
    height: 3px;
    top: 3px;
    left: 0;
    transform: rotate(0);
    transition: all 0.5s;
  }
      
  .hamburger-middle {
    transform: translateY(7px);
  }

  .hamburger-bottom {
    transform: translateY(14px);
  }

  .open {
    transform: rotate(90deg);
    transform: translateY(0px);
    position: fixed;
    top: 24px;
    right: 16px;
  }

  .open .hamburger-top {
    transform: rotate(45deg) translateY(6px) translateX(6px);
  }

  .open .hamburger-middle {
    display: none;
  }
      
  .open .hamburger-bottom {
    transform: rotate(-45deg) translateY(6px) translateX(-6px);
    /* background-color: #fff; */
  }

  /* Media query for screens of 640 pixels and smaller */
  @media (max-width: 640px) {
    .hamburger {
      width: 20px;
      height: 20px;
    }
    .hamburger-top,
    .hamburger-middle,
    .hamburger-bottom {
      width: 20px;
      top: 0;
    }
  }
</style>
