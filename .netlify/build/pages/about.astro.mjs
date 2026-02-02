import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C6CajBlS.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../chunks/BlogPost_aQ-bJGZr.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "About Me", "description": "daisuke osada", "pubDate": /* @__PURE__ */ new Date("September 29 2025"), "heroImage": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
dai a.k.a. daisuke
</p>
- [daisuke](https://x.com/daisuke)
- [dai](https://github.com/dai)
` })}`;
}, "C:/Users/copes/CopesCorner/copes-corner/src/pages/about.astro", void 0);

const $$file = "C:/Users/copes/CopesCorner/copes-corner/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
