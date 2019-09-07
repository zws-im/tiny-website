import { elements } from "../constants";

export default () => {
  const shortenedURL = elements.outputs.shorten;

  shortenedURL.select();
  shortenedURL.setSelectionRange(0, shortenedURL.value.length);

  return document.execCommand("copy");
};
