import shortenURL from "../api/shortenURL";
import { elements } from "../constants";
import load from "../util/loadUntilPromiseSettled";
import preRequestChecks from "../util/preRequestChecks";

export default (event: Event) => {
  event.preventDefault();

  const { value: url } = elements.inputs.shorten;
  const { shorten: result } = elements.outputs;

  try {
    preRequestChecks(url);
  } catch (error) {
    return (result.innerText = error);
  }

  const request = shortenURL(url);

  // Make the button load until the request is finished
  load(elements.submitButtons.shorten, request);

  request
    .then(shortened => {
      elements.copyButton.disabled = false;
      return (result.value = shortened);
    })
    .catch(error => {
      console.error(error);
      return (result.value = `An error occurred: ${error}`);
    });
};
