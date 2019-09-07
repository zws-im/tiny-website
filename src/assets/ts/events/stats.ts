import { Stats } from "../../../types/stats";
import getURLStats from "../api/getURLStats";
import { elements } from "../constants";
import load from "../util/loadUntilPromiseSettled";
import preRequestChecks from "../util/preRequestChecks";

export default (event: Event) => {
  event.preventDefault();

  const { value: url } = elements.inputs.stats;
  const { stats: result } = elements.outputs;

  try {
    preRequestChecks(url);
  } catch (error) {
    return (result.innerText = error);
  }

  const request = getURLStats(url);

  // Make the button load until the request is finished
  load(elements.submitButtons.stats, request);

  request.then(async response => {
    if (response.ok) {
      const stats: Stats = await response.json();

      return (result.innerText = `Shortened ${stats.shorten.toLocaleString()} times and visited ${stats.get.toLocaleString()} times.`);
    } else {
      if (response.status === 404) {
        return (result.innerText = "That URL couldn't be found or you don't have access to it");
      } else {
        console.error(response);
        return (result.innerText = `An error occurred: ${response.status}`);
      }
    }
  });
};
