/**
 * Base API URL to use for requests.
 */
export const apiURL = "https://us-central1-zero-width-shortener.cloudfunctions.net";
/**
 * Hostnames of ZWS instances.
 * Used in addition to server-side validation to prevent shortening an already short URL.
 */
export const hostnames = ["zws.im", "zws.jonahsnider.ninja", "zerowidthshortener.netlify.com"];

// We do this to have avoid having "document.getElementById" a lot, since Parcel will mangle this variable to something short

const getByID = id => document.getElementById(id);

/**
 * HTML elements used across the project.
 */
export const elements = {
  submitButtons: {
    shorten: getByID("shorten-submit") as HTMLButtonElement,
    stats: getByID("stats-submit") as HTMLButtonElement
  },
  inputs: {
    shorten: getByID("shorten-url") as HTMLInputElement,
    stats: getByID("stats-url") as HTMLInputElement
  },
  outputs: {
    shorten: getByID("shorten-result") as HTMLInputElement,
    stats: getByID("stats-result") as HTMLParagraphElement
  },
  forms: {
    shorten: getByID("shorten") as HTMLFormElement,
    stats: getByID("stats") as HTMLFormElement
  },
  copyButton: getByID("copy") as HTMLButtonElement
};
