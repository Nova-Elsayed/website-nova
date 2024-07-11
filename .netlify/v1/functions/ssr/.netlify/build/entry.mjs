import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DSmS81qq.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DH5y43uP.mjs');
const _page1 = () => import('./chunks/404_Czz6fYsX.mjs');
const _page2 = () => import('./chunks/about_BdO_l4Zi.mjs');
const _page3 = () => import('./chunks/_.._B6MXBHha.mjs');
const _page4 = () => import('./chunks/contact_LYPYLHVK.mjs');
const _page5 = () => import('./chunks/_.._CR_SBZ2M.mjs');
const _page6 = () => import('./chunks/_regular__YcrGgcKp.mjs');
const _page7 = () => import('./chunks/index_C-C5RODB.mjs');
const _page8 = () => import('./chunks/_.._COqfCT6a.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/articles/[...slug].astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/workshops/[...slug].astro", _page5],
    ["src/pages/[regular].astro", _page6],
    ["src/pages/index.astro", _page7],
    ["src/pages/[...slug].astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "72de3851-c241-452f-8573-18f88765e6e8"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
