import { hostnames } from "../constants";
import validateURL from "./validateURL";

/**
 * Checks several requirements before sending an API request.
 * @param url URL that's being used in the request
 * @throws The human readable error message for what was wrong
 */
export default (url: string) => {
  if (!navigator.onLine) {
    throw "You are offline";
  }

  if (validateURL(url)) {
    if (hostnames.includes(new URL(url).hostname)) {
      throw "Using a URL with a hostname of a ZWS instance is disallowed";
    }
  } else {
    throw "Invalid URL";
  }
};
