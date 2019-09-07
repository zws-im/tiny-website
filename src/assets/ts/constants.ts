/**
 * Base API URL to use for requests.
 */
export const apiURL = "https://us-central1-zero-width-shortener.cloudfunctions.net";
/**
 * Hostnames of ZWS instances.
 * Used in addition to server-side validation to prevent shortening an already short URL.
 */
export const hostnames = ["zws.im", "zws.jonahsnider.ninja", "zerowidthshortener.netlify.com"];
/**
 * HTML elements used across the project.
 */
export const elements = {
  submitButtons: {
    shorten: document.getElementById("shorten-submit") as HTMLButtonElement,
    stats: document.getElementById("stats-submit") as HTMLButtonElement
  },
  inputs: {
    shorten: document.getElementById("shorten-url") as HTMLInputElement,
    stats: document.getElementById("stats-url") as HTMLInputElement
  },
  outputs: {
    shorten: document.getElementById("shorten-result") as HTMLInputElement,
    stats: document.getElementById("stats-result") as HTMLParagraphElement
  },
  forms: {
    shorten: document.getElementById("shorten") as HTMLFormElement,
    stats: document.getElementById("stats") as HTMLFormElement
  },
  copyButton: document.getElementById("copy") as HTMLButtonElement
};
