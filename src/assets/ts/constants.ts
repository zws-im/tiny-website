/**
 * Base API URL to use for requests.
 */
export const apiURL = "https://us-central1-zero-width-shortener.cloudfunctions.net";
/**
 * Hostnames of ZWS instances.
 * Used in addition to server-side validation to prevent shortening an already short URL.
 */
export const hostnames = ["zws.im", "zws.jonahsnider.ninja", "zerowidthshortener.netlify.com"];

// We do this to have avoid having "document.getElementById" a lot, since Parcel will rename this variable to something short
const getElementById = document.getElementById;

/**
 * HTML elements used across the project.
 */
export const elements = {
  submitButtons: {
    shorten: getElementById("shorten-submit") as HTMLButtonElement,
    stats: getElementById("stats-submit") as HTMLButtonElement
  },
  inputs: {
    shorten: getElementById("shorten-url") as HTMLInputElement,
    stats: getElementById("stats-url") as HTMLInputElement
  },
  outputs: {
    shorten: getElementById("shorten-result") as HTMLInputElement,
    stats: getElementById("stats-result") as HTMLParagraphElement
  },
  forms: {
    shorten: getElementById("shorten") as HTMLFormElement,
    stats: getElementById("stats") as HTMLFormElement
  },
  copyButton: getElementById("copy") as HTMLButtonElement
};
