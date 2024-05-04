import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Check if running in the browser environment
const isBrowser = browser;

// Function to get the user's preferred theme from localStorage or the system settings
function getStoredTheme() {
  if (isBrowser) {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme !== null ? storedTheme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  // Default to light theme if not in browser
  return 'light';
}

// Initialize the theme with the user's preferred theme
export const theme = writable(getStoredTheme());

export const toggleTheme = () => {
  theme.update(currentTheme => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    // Update localStorage if available
    if (isBrowser) {
      localStorage.setItem('theme', newTheme);
    }
    return newTheme;
  });
};