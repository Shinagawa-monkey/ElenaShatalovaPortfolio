// import { writable } from "svelte/store";
// import { browser } from "$app/environment";

// const isBrowser = browser;

// // Function to get the user's preferred theme from localStorage or the system settings
// function getUserPreferredTheme() {
//   // Check if running in the browser environment
//   if (isBrowser) {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme) {
//       return storedTheme;
//     }
//     const prefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     return prefersDark ? "dark" : "light";
//   }
//   // Default to light theme if not in the browser environment
//   return "light";
// }

// // Initialize the theme with the user's preferred theme
// export const theme = writable(getUserPreferredTheme());

// export const toggleTheme = () => {
//   theme.update((currentTheme) => {
//     const newTheme = currentTheme === "light" ? "dark" : "light";
//     // Update localStorage if available
//     if (isBrowser) {
//       localStorage.setItem("theme", newTheme);
//     }
//     return newTheme;
//   });
// };

import { writable } from "svelte/store";
import { browser } from "$app/environment";

// Check if running in the browser environment
const isBrowser = browser;

// Function to get the user's preferred theme from localStorage or the system settings
function getUserPreferredTheme() {
  if (isBrowser) {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
}

// Initialize the theme with the user's preferred theme
export const theme = writable(getUserPreferredTheme());

export const toggleTheme = () => {
  theme.update((currentTheme) => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    // Update localStorage if available
    if (isBrowser) {
      localStorage.setItem("theme", newTheme);
    }
    return newTheme;
  });
};

// import { writable } from "svelte/store";
// import { browser } from "$app/environment";

// const isBrowser = browser;

// // Check localStorage for theme preference on initialization
// const storedTheme = isBrowser ? localStorage.getItem("theme") : null;
// export const theme = writable(storedTheme || getSystemTheme());

// export const toggleTheme = () => {
//   theme.update((currentTheme) => {
//     const newTheme = currentTheme === "light" ? "dark" : "light";
//     // Update localStorage if available
//     if (isBrowser) {
//       localStorage.setItem("theme", newTheme);
//     }
//     return newTheme;
//   });
// };

// // Get the system theme preference
// function getSystemTheme() {
//   // Check if running in the browser environment
//   if (isBrowser) {
//     const prefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     return prefersDark ? "dark" : "light";
//   }
//   // Default to light theme if not in the browser environment
//   return "light";
// }



// import { writable } from "svelte/store";
// import { browser } from "$app/environment";

// const isBrowser = browser;

// // Function to get the user's preferred theme from localStorage or the system settings
// function getUserPreferredTheme() {
//   if (isBrowser) {
//     try {
//       const storedTheme = localStorage.getItem("theme");
//       if (storedTheme) {
//         return storedTheme;
//       }
//     } catch (error) {
//       console.error("Error reading theme from localStorage:", error);
//     }
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     return prefersDark ? "dark" : "light";
//   }
//   return "light"; // Default to light theme if not in the browser environment
// }

// // Initialize the theme with the user's preferred theme
// export const theme = writable(getUserPreferredTheme());

// // Function to toggle between light and dark themes
// export const toggleTheme = () => {
//   theme.update((currentTheme) => {
//     const newTheme = currentTheme === "light" ? "dark" : "light";
//     // Update localStorage with a debounce
//     if (isBrowser) {
//       debounce(() => {
//         try {
//           localStorage.setItem("theme", newTheme);
//         } catch (error) {
//           console.error("Error saving theme to localStorage:", error);
//         }
//       }, 200)();
//     }
//     return newTheme;
//   });
// };

// // Lazy initialization of prefersDarkMode listener
// let prefersDarkMode = null;
// function initializePrefersDarkMode() {
//   if (isBrowser && !prefersDarkMode) {
//     prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
//     const updateThemeOnChange = (e) => {
//       theme.set(e.matches ? "dark" : "light");
//     };
//     updateThemeOnChange(prefersDarkMode); // Initial call to handle the current preference
//     if ("addEventListener" in prefersDarkMode) {
//       prefersDarkMode.addEventListener("change", throttle(updateThemeOnChange, 200));
//     }
//   }
// }

// // Throttle function to limit the frequency of function calls
// function throttle(func, limit) {
//   let inThrottle;
//   return function () {
//     if (!inThrottle) {
//       func.apply(this, arguments);
//       inThrottle = true;
//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// }

// // Debounce function to limit the frequency of function calls
// function debounce(func, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// // Lazy initialize the prefersDarkMode listener
// initializePrefersDarkMode();