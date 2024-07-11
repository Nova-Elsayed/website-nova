/* empty css                           */
import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, h as renderComponent } from '../astro_CyJ2PJMq.mjs';
import 'kleur/colors';
import { h as humanize, a as $$Base, c as config } from './404_RxPL2K7c.mjs';
import 'clsx';
import { g as getEntry } from './about_Dc5Wrb1c.mjs';

const $$Astro$2 = createAstro("https://novaelsayed.netlify.app");
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { className } = Astro2.props;
  const paths = Astro2.url.pathname.split("/").filter((x) => x);
  let parts = [
    {
      label: "start",
      href: "/",
      "aria-label": Astro2.url.pathname === "/" ? "page" : void 0
    }
  ];
  paths.forEach((label, i) => {
    const href = `/${paths.slice(0, i + 1).join("/")}`;
    label !== "page" && parts.push({
      label: humanize(label.replace(".html", "").replace(/[-_]/g, " ")) || "",
      href,
      "aria-label": Astro2.url.pathname === href ? "page" : void 0
    });
  });
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb"${addAttribute(className, "class")}> <ol class="inline-flex" role="list"> ${parts.map(({ label, ...attrs }, index) => renderTemplate`<li class="mx-1 capitalize" role="listitem"> ${index > 0 && renderTemplate`<span class="mr-1 inlin-block">/</span>`} ${index !== parts.length - 1 ? renderTemplate`<a class="text-primary dark:text-darkmode-primary"${spreadAttributes(attrs)}> ${label} </a>` : renderTemplate`<span class="text-light dark:text-darkmode-light">${label}</span>`} </li>`)} </ol> </nav>`;
}, "/Users/pdxiii/CODE/website-nova/src/layouts/components/Breadcrumbs.astro", void 0);

const $$Astro$1 = createAstro("https://novaelsayed.netlify.app");
const $$PageHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="container text-center"> <div class="rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14 dark:from-darkmode-body dark:to-darkmode-theme-light"> <h1>${humanize(title)}</h1> ${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "className": "mt-6" })} </div> </div> </section>`;
}, "/Users/pdxiii/CODE/website-nova/src/layouts/partials/PageHeader.astro", void 0);

const $$Astro = createAstro("https://novaelsayed.netlify.app");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const contact = await getEntry("contact", "-index");
  const { contact_form_action } = config.params;
  const { title, description, meta_title, image } = contact.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": title })} ${maybeRenderHead()}<section class="section-sm"> <div class="container"> <div class="row"> <div class="mx-auto md:col-10 lg:col-6"> <form${addAttribute(contact_form_action, "action")} method="POST"> <div class="mb-6"> <label for="name" class="form-label">
Full Name <span class="text-red-500">*</span> </label> <input id="name" name="name" class="form-input" placeholder="John Doe" type="text"> </div> <div class="mb-6"> <label for="email" class="form-label">
Working Mail <span class="text-red-500">*</span> </label> <input id="email" name="email" class="form-input" placeholder="john.doe@email.com" type="email"> </div> <div class="mb-6"> <label for="message" class="form-label">
Anything else? <span class="text-red-500">*</span> </label> <textarea id="message" name="message" class="form-input" placeholder="Message goes here..." rows="8"></textarea> </div> <button type="submit" class="btn btn-primary">Submit</button> </form> </div> </div> </div> </section> ` })}`;
}, "/Users/pdxiii/CODE/website-nova/src/pages/contact.astro", void 0);

const $$file = "/Users/pdxiii/CODE/website-nova/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PageHeader as $, contact as c };
