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
const doc = document;

/**
 * HTML elements used across the project.
 */
export const elements = {
  submitButtons: {
    shorten: doc.getElementById("shorten-submit") as HTMLButtonElement,
    stats: doc.getElementById("stats-submit") as HTMLButtonElement
  },
  inputs: {
    shorten: doc.getElementById("shorten-url") as HTMLInputElement,
    stats: doc.getElementById("stats-url") as HTMLInputElement
  },
  outputs: {
    shorten: doc.getElementById("shorten-result") as HTMLInputElement,
    stats: doc.getElementById("stats-result") as HTMLParagraphElement
  },
  forms: {
    shorten: doc.getElementById("shorten") as HTMLFormElement,
    stats: doc.getElementById("stats") as HTMLFormElement
  },
  copyButton: doc.getElementById("copy") as HTMLButtonElement
};
