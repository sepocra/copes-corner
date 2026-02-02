import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, e as createAstro } from './astro/server_C6CajBlS.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "C:/Users/copes/CopesCorner/copes-corner/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
