import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_CyJ2PJMq.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.N2XxB48v.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.YlM88EmW.css"},{"type":"external","src":"/_astro/_slug_.D-wRETM4.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.N2XxB48v.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.YlM88EmW.css"},{"type":"external","src":"/_astro/_slug_.D-wRETM4.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.N2XxB48v.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.YlM88EmW.css"},{"type":"external","src":"/_astro/_slug_.D-wRETM4.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.N2XxB48v.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.YlM88EmW.css"},{"type":"external","src":"/_astro/_slug_.D-wRETM4.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"site":"https://novaelsayed.netlify.app","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["/Users/pdxiii/CODE/website-nova/src/pages/articles/[...slug].astro",{"propagation":"none","containsHead":true}],["/Users/pdxiii/CODE/website-nova/src/pages/workshops/[...slug].astro",{"propagation":"none","containsHead":true}],["/Users/pdxiii/CODE/website-nova/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/pdxiii/CODE/website-nova/src/pages/[...slug].astro",{"propagation":"none","containsHead":true}],["/Users/pdxiii/CODE/website-nova/src/pages/[regular].astro",{"propagation":"in-tree","containsHead":true}],["/Users/pdxiii/CODE/website-nova/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["/Users/pdxiii/CODE/website-nova/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["/Users/pdxiii/CODE/website-nova/src/pages/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/pdxiii/CODE/website-nova/src/lib/contentParser.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[regular]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Cx6wGEUx.mjs","\u0000@astrojs-manifest":"manifest_DSmS81qq.mjs","/Users/pdxiii/CODE/website-nova/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DH5y43uP.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_Czz6fYsX.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_BdO_l4Zi.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"chunks/_.._B6MXBHha.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_LYPYLHVK.mjs","\u0000@astro-page:src/pages/workshops/[...slug]@_@astro":"chunks/_.._CR_SBZ2M.mjs","\u0000@astro-page:src/pages/[regular]@_@astro":"chunks/_regular__YcrGgcKp.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_C-C5RODB.mjs","\u0000@astro-page:src/pages/[...slug]@_@astro":"chunks/_.._COqfCT6a.mjs","/Users/pdxiii/CODE/website-nova/public/images/Ich_Hut.jpg":"chunks/Ich_Hut_oUH9ifmB.mjs","/Users/pdxiii/CODE/website-nova/public/images/Logo_Nova.png":"chunks/Logo_Nova_DU-TEyHd.mjs","/Users/pdxiii/CODE/website-nova/public/images/avatar-sm.png":"chunks/avatar-sm_C3eVgohR.mjs","/Users/pdxiii/CODE/website-nova/public/images/avatar.png":"chunks/avatar_Bfog-ZOR.mjs","/Users/pdxiii/CODE/website-nova/public/images/banner.png":"chunks/banner_BODlI0NQ.mjs","/Users/pdxiii/CODE/website-nova/public/images/call-to-action.png":"chunks/call-to-action_hiXdUXfs.mjs","/Users/pdxiii/CODE/website-nova/public/images/closing.png":"chunks/closing_B0wuValt.mjs","/Users/pdxiii/CODE/website-nova/public/images/conception.png":"chunks/conception_DdIvG-1F.mjs","/Users/pdxiii/CODE/website-nova/public/images/favicon.png":"chunks/favicon_De1urlc_.mjs","/Users/pdxiii/CODE/website-nova/public/images/image-placeholder.png":"chunks/image-placeholder_DLMQTIQ9.mjs","/Users/pdxiii/CODE/website-nova/public/images/implementation.png":"chunks/implementation_DEkAxvLo.mjs","/Users/pdxiii/CODE/website-nova/public/images/logo-darkmode.png":"chunks/logo-darkmode_C8K4KdkC.mjs","/Users/pdxiii/CODE/website-nova/public/images/logo.png":"chunks/logo_BRNiUtcN.mjs","/Users/pdxiii/CODE/website-nova/public/images/organization.png":"chunks/organization_CtgK5A7T.mjs","/Users/pdxiii/CODE/website-nova/public/images/sensual_revolution_header.png":"chunks/sensual_revolution_header_BpYIMUXA.mjs","/Users/pdxiii/CODE/website-nova/public/images/service-3.png":"chunks/service-3_DyDzK5Zv.mjs","/Users/pdxiii/CODE/website-nova/public/images/workshops/bodywork_customized.png":"chunks/bodywork_customized_5rjAbfpk.mjs","/Users/pdxiii/CODE/website-nova/public/images/workshops/presence_is_sexy.png":"chunks/presence_is_sexy_Dz7lYItK.mjs","/Users/pdxiii/CODE/website-nova/public/images/workshops/sexpress_yourself.png":"chunks/sexpress_yourself_BeFgnPkz.mjs","/Users/pdxiii/CODE/website-nova/src/content/about/-index.md?astroContentCollectionEntry=true":"chunks/-index_DvlVLh05.mjs","/Users/pdxiii/CODE/website-nova/src/content/contact/-index.md?astroContentCollectionEntry=true":"chunks/-index_BvR5-GxL.mjs","/Users/pdxiii/CODE/website-nova/src/content/homepage/-index.md?astroContentCollectionEntry=true":"chunks/-index_To10B9qJ.mjs","/Users/pdxiii/CODE/website-nova/src/content/pages/elements.mdx?astroContentCollectionEntry=true":"chunks/elements_ByOqp4PI.mjs","/Users/pdxiii/CODE/website-nova/src/content/pages/privacy-policy.md?astroContentCollectionEntry=true":"chunks/privacy-policy_xqjoRa5Y.mjs","/Users/pdxiii/CODE/website-nova/src/content/about/-index.md?astroPropagatedAssets":"chunks/-index_pIbWNVXj.mjs","/Users/pdxiii/CODE/website-nova/src/content/contact/-index.md?astroPropagatedAssets":"chunks/-index_BhcZXMhc.mjs","/Users/pdxiii/CODE/website-nova/src/content/homepage/-index.md?astroPropagatedAssets":"chunks/-index_CMqlSban.mjs","/Users/pdxiii/CODE/website-nova/src/content/pages/elements.mdx?astroPropagatedAssets":"chunks/elements_Z2UzXDnN.mjs","/Users/pdxiii/CODE/website-nova/src/content/pages/privacy-policy.md?astroPropagatedAssets":"chunks/privacy-policy_BwZcW3c5.mjs","/Users/pdxiii/CODE/website-nova/src/content/about/-index.md":"chunks/-index_DHokwq11.mjs","/Users/pdxiii/CODE/website-nova/src/content/contact/-index.md":"chunks/-index_DNOhesVg.mjs","/Users/pdxiii/CODE/website-nova/src/content/homepage/-index.md":"chunks/-index_bnKrs-uG.mjs","/Users/pdxiii/CODE/website-nova/src/content/pages/elements.mdx":"chunks/elements_C_PDioDK.mjs","/Users/pdxiii/CODE/website-nova/src/content/pages/privacy-policy.md":"chunks/privacy-policy_D-0GJLt8.mjs","@/shortcodes/Accordion":"_astro/Accordion.TlHBG6Ce.js","@/shortcodes/Youtube":"_astro/Youtube.BEhLUyng.js","/astro/hoisted.js?q=0":"_astro/hoisted.N2XxB48v.js","@/shortcodes/Tabs":"_astro/Tabs.yN2nyCfT.js","@astrojs/react/client.js":"_astro/client.DbokQZWz.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/avatar-sm.BXWjsrdh.png","/_astro/call-to-action.DNZkTK0I.png","/_astro/avatar.DeQDKSwT.png","/_astro/banner.BMwzPDc-.png","/_astro/closing.DiBg1C1o.png","/_astro/favicon.C1-wf8m0.png","/_astro/image-placeholder.DyBpoAJD.png","/_astro/logo-darkmode.BKNj4L4F.png","/_astro/logo.Byxv003l.png","/_astro/Ich_Hut.B5bwZMiN.jpg","/_astro/service-3.CK7pyFF_.png","/_astro/conception.DRZQntqV.png","/_astro/implementation.CSn2C_cR.png","/_astro/bodywork_customized.DWiwvbcG.png","/_astro/organization.ADSrIP0O.png","/_astro/presence_is_sexy.C8crHC5N.png","/_astro/sexpress_yourself.DtIA2td7.png","/_astro/sensual_revolution_header.BOVq0IXS.png","/_astro/_slug_.YlM88EmW.css","/_astro/_slug_.D-wRETM4.css","/robots.txt","/_astro/Accordion.TlHBG6Ce.js","/_astro/LiteYouTubeEmbed.ggy1BK9Y.css","/_astro/Tabs.yN2nyCfT.js","/_astro/Youtube.BEhLUyng.js","/_astro/client.DbokQZWz.js","/_astro/hoisted.N2XxB48v.js","/_astro/index.NEDEFKed.js","/_astro/jsx-runtime.K1e75nIr.js","/images/Ich_Hut.jpg","/images/Logo_Nova.png","/images/avatar-sm.png","/images/avatar.png","/images/banner.png","/images/call-to-action.png","/images/closing.png","/images/conception.png","/images/favicon.png","/images/image-placeholder.png","/images/implementation.png","/images/logo-darkmode.png","/images/logo.png","/images/organization.png","/images/sensual_revolution_header.png","/images/service-3.png","/images/workshops/bodywork_customized.png","/images/workshops/presence_is_sexy.png","/images/workshops/sexpress_yourself.png"],"buildFormat":"directory"});

export { manifest };
