import { writable } from "svelte/store";

// Create a writable store to track the state of the mobile menu
export const isMenuOpen = writable(false);
