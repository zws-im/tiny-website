/**
 * Register the service worker if it's supported.
 */
export default () => {
  // Check that service workers are supported
  if ("serviceWorker" in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener("load", () => {
      return navigator.serviceWorker.register("/sw.ts");
    });
  }
};
