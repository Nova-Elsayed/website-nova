/* empty css                           */
import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, u as unescapeHTML, h as renderComponent } from '../astro_CyJ2PJMq.mjs';
import 'kleur/colors';
import { s as slugify, a as $$Base } from './404_RxPL2K7c.mjs';
import contentful from 'contentful';
import 'clsx';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  host: "cdn.contentful.com"
});

const locationToAddress = async (location) => {
  const URL = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.lat}&lon=${location.lon}&zoom=20`;
  const reverseGeocodingUrl = URL;
  const response = await fetch(reverseGeocodingUrl);
  const json = await response.json();

  //   console.log(json);

  return json.address;
};

const simpleGermanDate = (date) => {
  const newDate = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return newDate.toLocaleDateString("de-DE", options);
};

const $$Astro$2 = createAstro("https://novaelsayed.netlify.app");
const $$WorkshopCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WorkshopCard;
  const { title, location, headline, parentTitle, dateStart } = Astro2.props.data;
  const slug = slugify(title);
  const address = await locationToAddress(location);
  const readableDate = simpleGermanDate(dateStart);
  return renderTemplate`${maybeRenderHead()}<li class="w-1/3 p-4"> <a class="block transition-all group hover:scale-110"${addAttribute(`/workshops/${slug}/`, "href")}> <h3 class="text-xl text-red-500 group-transition-colors group-hover:text-red-300">${unescapeHTML(headline)}</h3> ${readableDate && renderTemplate`<p>${unescapeHTML(readableDate)}</p>`} ${parentTitle && renderTemplate`<p class="mt-2 font-secondary">${unescapeHTML(parentTitle)}</p>`} ${address && renderTemplate`<p>${unescapeHTML(address.city || address.village)}</p>`} </a> </li>`;
}, "/Users/pdxiii/CODE/website-nova/src/layouts/components/WorkshopCard.astro", void 0);

const $$Astro$1 = createAstro("https://novaelsayed.netlify.app");
const $$RichTextContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RichTextContainer;
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, next) => {
        return `<h1 id="${slugify(next(node.content))}">${next(node.content)}</h1>`;
      },
      [BLOCKS.HEADING_2]: (node, next) => {
        return `<h2 id="${slugify(next(node.content))}">${next(node.content)}</h2>`;
      },
      [BLOCKS.HEADING_3]: (node, next) => {
        return `<h3 id="${slugify(next(node.content))}">${next(node.content)}</h3>`;
      },
      [BLOCKS.HEADING_4]: (node, next) => {
        return `<h4 id="${slugify(next(node.content))}">${next(node.content)}</h4>`;
      },
      [BLOCKS.HEADING_5]: (node, next) => {
        return `<h5 id="${slugify(next(node.content))}">${next(node.content)}</h5>`;
      },
      [BLOCKS.HEADING_6]: (node, next) => {
        return `<h6 id="${slugify(next(node.content))}">${next(node.content)}</h6>`;
      }
      // [BLOCKS.PARAGRAPH]: (node, next) => {
      //   return `<p>${next(node.content).replace(/\n/g, `</br>`)}</p>`;
      // }
    }
  };
  const renderedHTML = documentToHtmlString(Astro2.props.content, options);
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`mx-auto prose rich-text-container ${Astro2.props.class || ""}`, "class")}>${unescapeHTML(renderedHTML)}</article>`;
}, "/Users/pdxiii/CODE/website-nova/src/layouts/components/RichTextContainer.astro", void 0);

const $$Astro = createAstro("https://novaelsayed.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const landingPageData = await contentfulClient.getEntry(
    "1aRfABlgG4hmSE78soNUP3"
  );
  const landingPage = landingPageData.fields;
  const workshopEntries = await contentfulClient.getEntries({
    content_type: "workshop"
  });
  const workshops = workshopEntries.items.map((item) => {
    return item.fields;
  }).sort((a, b) => {
    return Date.parse(b.dateStart) - Date.parse(a.dateStart);
  });
  const upcomingWorkshops = workshops.filter((item) => Date.parse(item.dateStart) >= Date.now()).reverse();
  const recentWorkshops = workshops.filter(
    (item) => Date.parse(item.dateStart) < Date.now()
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative w-screen h-screen overflow-hidden"> ${landingPage.headerImage?.fields.file.url && renderTemplate`<img class="absolute top-0 z-0 object-cover w-full h-full start-0"${addAttribute(landingPage.headerImage.fields.file.url, "src")} alt="">`} <div class="absolute top-0 z-10 grid h-full grid-cols-2 gap-4 start-0"> <div class="flex flex-col justify-center col-end-3"> <div class="mb-8"> <h1 class="mb-2 text-3xl text-white drop-shadow-2xl">${unescapeHTML(landingPage.headerHeadline)}</h1> <h1 class="text-2xl text-red-500 drop-shadow-2xl">${unescapeHTML(landingPage.headerSubHeadline)}</h1> </div> <div class="flex"> <a class="block py-3 text-teal-400 transition-all border border-teal-400 rounded hover:scale-110 px-7 hover:border-teal-200 hover:text-teal-200 me-4"${addAttribute(landingPage.headerLink01URL, "href")}>${unescapeHTML(landingPage.headerLink01Label)}</a> <a class="block py-3 text-teal-400 transition-all border border-teal-400 rounded hover:scale-110 px-7 hover:border-teal-200 hover:text-teal-200"${addAttribute(landingPage.headerLink02URL, "href")}>${unescapeHTML(landingPage.headerLink02Label)}</a> </div> </div> </div> </section>   <section class="w-screen py-16 text-center"> <h2 class="mb-2 text-2xl">${unescapeHTML(landingPage.introHeadline)}</h2> <h2 class="mb-8 text-xl">${unescapeHTML(landingPage.introSubHeadline)}</h2> ${renderComponent($$result2, "RichTextContainer", $$RichTextContainer, { "class": "text-left", "content": landingPage.introText })} </section>   <section class="w-screen py-16 text-center"> <h2 class="mb-8 text-xl">${unescapeHTML(landingPage.workshopsHeadline)}</h2> ${renderComponent($$result2, "RichTextContainer", $$RichTextContainer, { "class": "text-left", "content": landingPage.workshopsText })} ${workshops && upcomingWorkshops && renderTemplate`<section class="my-8"> <h2 class="mb-4 text-lg">Meine kommenden Workshops</h2> <ul class="flex w-full px-8 my-8 justify-evenly"> ${upcomingWorkshops.map((workshop) => renderTemplate`${renderComponent($$result2, "WorkshopCard", $$WorkshopCard, { "data": workshop })}`)} </ul> </section>`} ${workshops && recentWorkshops && renderTemplate`<section class="my-8 opacity-60"> <h2 class="mb-4 text-lg">Vergangene Workshops</h2> <ul class="flex w-full px-8 my-8 justify-evenly"> ${recentWorkshops.map((workshop) => renderTemplate`${renderComponent($$result2, "WorkshopCard", $$WorkshopCard, { "data": workshop })}`)} </ul> </section>`} </section>   <section class="w-screen py-16 text-center"> <h2 class="mb-8 text-xl">${unescapeHTML(landingPage.supportHeadline)}</h2> <div class="grid grid-cols-3 gap-4 mx-auto max-w-prose"> <div> <a class="block w-full py-3 mx-auto text-xl text-center text-teal-400 transition-all hover:scale-110 font-secondary hover:text-teal-200"${addAttribute(landingPage.supportLink01URL, "href")}>${unescapeHTML(landingPage.supportLink01Label)}</a> <div class="w-0 h-8 mx-auto my-0 border border-teal-400"></div> <a class="block w-full py-3 mx-auto text-xl text-center text-teal-400 transition-all hover:scale-110 font-secondary hover:text-teal-200"${addAttribute(landingPage.supportLink02URL, "href")}>${unescapeHTML(landingPage.supportLink02Label)}</a> <div class="w-0 h-8 mx-auto my-0 border border-teal-400"></div> <a class="block w-full py-3 mx-auto text-xl text-center text-teal-400 transition-all hover:scale-110 font-secondary hover:text-teal-200"${addAttribute(landingPage.supportLink03URL, "href")}>${unescapeHTML(landingPage.supportLink03Label)}</a> <div class="w-0 h-8 mx-auto my-0 border border-teal-400"></div> <a class="block w-full py-3 mx-auto text-xl text-center text-teal-400 transition-all hover:scale-110 font-secondary hover:text-teal-200"${addAttribute(landingPage.supportLink04URL, "href")}>${unescapeHTML(landingPage.supportLink04Label)}</a> </div> ${renderComponent($$result2, "RichTextContainer", $$RichTextContainer, { "class": "col-span-2 text-left", "content": landingPage.supportText })} </div> </section>  ` })}`;
}, "/Users/pdxiii/CODE/website-nova/src/pages/index.astro", void 0);

const $$file = "/Users/pdxiii/CODE/website-nova/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$RichTextContainer as $, contentfulClient as c, index as i };
