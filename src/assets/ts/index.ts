import { elements } from "./constants";
import copy from "./events/copy";
import shorten from "./events/shorten";
import stats from "./events/stats";
import registerServiceWorker from "./util/registerServiceWorker";

registerServiceWorker();

elements.forms.shorten.addEventListener("submit", shorten);
elements.forms.stats.addEventListener("submit", stats);
elements.copyButton.addEventListener("click", copy);
