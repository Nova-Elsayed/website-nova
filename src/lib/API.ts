import { contentfulClient } from "@/lib/contentful";
import type { Page, Article, Workshop, LandingPage, TTWorkshop } from "@/lib/contentful";
import { slugify, markdownify } from "@/lib/utils/textConverter";
import { simpleGermanDate } from "@/lib/utils/dateParser";
import axios from "axios";
import { get } from "http";



export const getSinglePage = async (id: string) => {
  let page;
  try {   
    page = await contentfulClient.getEntry<Page>(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  return page.fields;
};

export const getArticles = async (onlyFeatured?: boolean) => {
  const articlesEntries = await contentfulClient.getEntries<Article>({
    content_type: "article",
  });

  const articles = articlesEntries.items
    .map((item) => (
      // console.log(item),
      {
      params: { slug: slugify(item.fields.title) },
      props: {
        title: item.fields.title,
        slug: slugify(item.fields.title),
        isFeatured: item.fields.isFeatured,
        image: item.fields.image,
        description: item.fields.description,
        content: item.fields.content,
        publishedAt: item.sys.updatedAt,
      },
    }))
    .sort((a, b) => {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return Date.parse(b.props.publishedAt) - Date.parse(a.props.publishedAt);
    });

  if (onlyFeatured) {
   
    return articles.filter((item) => item.props.isFeatured);
  } else {
    return articles;
  }
};

export const getWorkshops = async () => {
  let entries;

  try {
    entries = await contentfulClient.getEntries<Workshop>({
      content_type: "workshop",
    });
  } catch (e) {
    console.error(e);
    throw e;
  }

  let workshops = entries.items.map((item) => {
    const imageURL = item.fields.image?.fields?.file?.url || null;

    return {
      params: { slug: slugify(item.fields.title) },
      props: {
        slug: slugify(item.fields.title),
        title: item.fields.title,
        headline: item.fields.headline,
        description: item.fields.description,
        location: item.fields.location,
        place: item.fields.place,
        street: item.fields.street,
        dateStart: item.fields.dateStart,
        dateEnd: item.fields.dateEnd,
        readableDate: simpleGermanDate(item.fields.dateStart),
        parentTitle: item.fields.parentTitle,
        parentURL: item.fields.parentURL,
        ticketLink: item.fields.ticketLink,
        imageURL: imageURL,
        address: null,
      },
    };
  });

  // workshops = await Promise.all(
  //   workshops.map(async (ws) => {
  //     try {
  //       ws.props.address = await getAddressFromLocation(ws.props.location);
  //     } catch (e) {
  //       console.error("Address fetch failed for", ws.props.slug);
  //       ws.props.address = null;
  //     }
  //     // console.log(ws);
  //     return ws;
  //   })
  // );
  
  return workshops;
};


// export const getWorkshopsTicketTailor = async () => {
//   const baseURL = "https://api.tickettailor.com/v1/";
//   const apiKey = btoa(import.meta.env.TICKETTAILOR_API_KEY);
//   const headers = {
//     Authorization: `Basic ${apiKey}`,
//     "Content-Type": "application/json",
//   };

  // const workshops = await axios.get(`${baseURL}events`, {
  //     headers: headers,
  //   })
  //   .then((response) => {

  //     return response.data.data.map((item: TTWorkshop) => {
  //       // console.log(item);
        
  //       return {
  //         params: { slug: slugify(item.name) },
  //         props: {
  //           slug: slugify(item.name),
  //           name: item.name,
  //           description: item.description.replace(/<\/?span[^>]*>/g,""),
  //           URL: item.url,
  //           status: item.status,
  //           readableDate: simpleGermanDate(item.start.iso),
  //           start:item.start.iso,
  //           end:item.end.iso,
  //         },
  //       };
  //     })
  //   }).catch (error => {
  //     console.log(error);

  //   })

  // return workshops;
  // };

export const getLandingPage = async () => {
  const landingPageData = await contentfulClient.getEntry<LandingPage>(
    "1aRfABlgG4hmSE78soNUP3",
  );
  return landingPageData.fields;
};

export const getAddressFromLocation = async (location:object) => {
  const URL = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${location.lon}&latitude=${location.lat}&access_token=${import.meta.env.MAPBOX_ACCESS_TOKEN}`

  console.log("address check")
  const response = await fetch(URL);
  if (!response.ok) {
    const txt = await response.text();
    console.error(txt);
    throw new Error("location to address failed");
  } else {
    const json = await response.json();
    console.log(json);
    return json.address;
  }
}