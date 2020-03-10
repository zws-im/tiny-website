/**
 * Make an HTML element disabled until a promise is settled.
 * @param el Element to make load
 * @param promise Promise to use for updating the element
 */
export default (el: HTMLElement, promise: Promise<unknown>): void => {
  el.setAttribute("disabled", "true");

  promise.finally(() => {
    el.removeAttribute("disabled");
  });
};
