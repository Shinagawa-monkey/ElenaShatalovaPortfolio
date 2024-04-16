<script>
  import { onMount, onDestroy  } from 'svelte';
  import { isMenuOpen } from '$lib/menuStore';
  import { theme } from '$lib/theme';

  export let step;
  export let images;
  
  let currentTheme = theme;

  // Subscribe to changes in the theme store
  const unsubscribe = currentTheme.subscribe(value => {
    currentTheme = value;
  });

  let height;
  let showMore = false;

  function toggleShowMore() {
    showMore = !showMore;
  }

  onMount(() => {
    updateHeight();
  });

  $: {
    updateHeight();
  }

  function updateHeight() {
    height = showMore ? "auto" : "fit-content";
  }

  onDestroy(() => {
    unsubscribe(); // Unsubscribe from the theme store
  });
</script>

  <div style="height: {height}" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-600 dark:border-violet-700 text-center cursor-default group hover:border-violet-800 dark:hover:border-violet-400 duration-200 transition-height">
  <div class="bg-blue-300 dark:bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200">
    <i class={step.icon} />
  </div>
  <h4 class="font-medium text-xl sm:text-2xl md:text-3xl text-balance">{step.name}</h4>
  
  <div class="swiper w-full">
    <div class="swiper-wrapper">
      {#each images[currentTheme] as image, index}
      <div class="swiper-slide">
        <img src={image} alt={`Project Image ${index + 1}`} class="object-cover w-full h-full" loading="lazy" />
      </div>
      {/each}
    </div>
  </div>

  <div class="text-left mt-4">
    {#if showMore}
    <slot />
    
    {:else}
    <div class="flex flex-col gap-2">
      <ul class="flex flex-wrap gap-2">
        {#each step.technologies.split(', ') as tag}
          <!-- <li class="bg-violet-600 dark:bg-violet-700 text-white px-3 py-1 rounded-full shadow-sm text-sm sm:text-base whitespace-nowrap">{tag}</li> -->
          <!-- <li class="bg-violet-600 dark:bg-violet-700 text-white px-3 py-1 rounded-full shadow-sm text-sm sm:text-base whitespace-nowrap inline-block mr-2 mb-2">{tag}</li> -->
          <li class="bg-violet-600 dark:bg-violet-700 text-white px-3 py-1 rounded-full shadow-sm text-sm sm:text-base whitespace-nowrap opacity-80 hover:opacity-100 transition duration-200 ease-in-out select-none">{tag}</li>
        {/each}
      </ul>
    </div>
    {/if}
  </div>

    <div class="flex justify-center items-center mt-4 space-x-4">
    <!-- <button on:click={toggleShowMore} aria-label={showMore ? "Show Less" : "Read More"} class="text-base md:text-lg poppins relative overflow-hidden px-3 py-1.5 rounded-full bg-violet-500 text-white cursor-pointer z-10 hover:bg-violet-600 duration-200 group/expandBtn whitespace-nowrap" tabindex={$isMenuOpen ? -1 : 0}>
      <div class="absolute top-0 right-full w-full h-full bg-gray-200 opacity-20 group-hover/expandBtn:translate-x-full z-0 duration-200"></div>
      {#if showMore}
        <span>Show Less</span>
        <span class="ml-1">&#8593;</span>
      {:else}
        <span>Read More</span>
        <span class="ml-1">&#8595;</span>
      {/if}
    </button> -->

    <!-- <button on:click={toggleShowMore} aria-label={showMore ? "Show Less" : "Read More"} class="font-medium text-base md:text-lg poppins relative overflow-hidden px-3 py-1.5 rounded-full bg-violet-500 text-slate-900 cursor-pointer hover:bg-violet-600 duration-200 group/expandBtn focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 whitespace-nowrap" tabindex={$isMenuOpen ? -1 : 0}>
      <div class="absolute top-0 right-full w-full h-full bg-violet-200 dark:bg-gray-200 opacity-30 dark:opacity-20 group-hover/expandBtn:translate-x-full z-[0] duration-200"></div>
      {#if showMore}
        <span class="relative z-[1]">Show Less</span>
        <span class="ml-1 relative z-[1]">&#8593;</span>
      {:else}
        <span class="relative z-[1]">Read More</span>
        <span class="ml-1 relative z-[1]">&#8595;</span>
      {/if}
    </button> -->
    <button on:click={toggleShowMore} aria-label={showMore ? "Show Less" : "Read More"} class="font-medium text-base md:text-lg poppins relative overflow-hidden px-3 py-1.5 rounded-full bg-violet-500 text-slate-950 cursor-pointer hover:bg-violet-600 duration-200 group/expandBtn focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 whitespace-nowrap border border-violet-400 dark:border-violet-700 select-none" tabindex={$isMenuOpen ? -1 : 0}>
      <div class="absolute top-0 right-full w-full h-full bg-violet-200 dark:bg-gray-200 opacity-30 dark:opacity-20 group-hover/expandBtn:translate-x-full z-[0] duration-200"></div>
      {#if showMore}
        <span class="relative z-[1]">Show Less</span>
        <span class="ml-1 relative z-[1]">&#8593;</span>
      {:else}
        <span class="relative z-[1]">Read More</span>
        <span class="ml-1 relative z-[1]">&#8595;</span>
      {/if}
    </button>
    
    

    
    <!-- <a href={step.href} target="_blank" aria-label={"Go to " + step.name} class="font-medium text-base md:text-lg poppins relative overflow-hidden px-3 py-1.5 rounded-full bg-white dark:bg-gray-100 text-slate-950 cursor-pointer hover:bg-gray-100 duration-200 group/GoToBtn focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 whitespace-nowrap" tabindex={$isMenuOpen ? -1 : 0}>
      <div class="absolute top-0 right-full w-full h-full bg-violet-400 dark:bg-violet-800 opacity-30 dark:opacity-20 group-hover/GoToBtn:translate-x-full z-[0] duration-200"></div>
      <h4 class="relative z-[1]">Go to &rarr;</h4>
    </a> -->
    <a href={step.href} target="_blank" aria-label={"Go to " + step.name} class="font-medium text-base md:text-lg poppins relative overflow-hidden px-3 py-1.5 rounded-full bg-white dark:bg-gray-100 text-violet-700 dark:text-slate-900 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-200 duration-200 group/GoToBtn whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 dark:focus-visible:ring-violet-400 focus-visible:ring-opacity-50 border border-violet-400 dark:border-violet-700 select-none" tabindex={$isMenuOpen ? -1 : 0}>
      <div class="absolute top-0 right-full w-full h-full bg-violet-400 dark:bg-violet-800 opacity-20 group-hover/GoToBtn:translate-x-full z-[0] duration-200"></div>
      <h4 class="relative z-[1]">Go to &rarr;</h4>
    </a>
    
  </div>
</div>