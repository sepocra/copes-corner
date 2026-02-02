import { c as createComponent, r as renderComponent, b as renderHead, a as renderTemplate } from '../chunks/astro/server_C6CajBlS.mjs';
import 'piccolore';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_DLajXgiV.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_Xm1ybWNM.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="ja"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <h1>Copes Corner<br></h1> <h2>What I notice</h2> <p>
I spend a lot of time noticing how things really work —
in workplaces, on basketball courts, at home with kids, and in the routines that shape our days.<br> <br>
This is where I put those observations.<br>
Part reflection, part sense-making.<br>
Somewhere to pause, notice, and make sense of what’s actually going on <br> </p> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/copes/CopesCorner/copes-corner/src/pages/index.astro", void 0);

const $$file = "C:/Users/copes/CopesCorner/copes-corner/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
