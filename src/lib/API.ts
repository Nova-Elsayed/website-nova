import { contentfulClient } from "@/lib/contentful";
import type { Page, Article, Workshop, LandingPage } from "@/lib/contentful";
import { slugify } from "@/lib/utils/textConverter";
import { locationToAddress } from "@/lib/utils/locationParser";
import { simpleGermanDate } from "@/lib/utils/dateParser";

export const getSinglePage = async (id: string) => {
  const page = await contentfulClient.getEntry<Page>(id);
  return page.fields;
};

export const getArticles = async () => {
  const articlesEntries = await contentfulClient.getEntries<Article>({
    content_type: "article",
  });

  const articles = articlesEntries.items.map((item) => ({
    params: { slug: item.fields.slug },
    props: {
      title: item.fields.title,
      slug: item.fields.slug,
      isFeatured: item.fields.isFeatured,
      image: item.fields.image,
      description: item.fields.description,
      content: item.fields.content,
      publishedAt: item.sys.updatedAt,
    },
  }));

  return articles;
};

export const getWorkshops = async () => {
  const entries = await contentfulClient.getEntries<Workshop>({
    content_type: "workshop",
  });

  const workshops = entries.items.map((item) => {
    return {
      params: { slug: slugify(item.fields.title) },
      props: {
        slug: slugify(item.fields.title),
        title: item.fields.title,
        headline: item.fields.headline,
        description: item.fields.description,
        location: item.fields.location,
        dateStart: item.fields.dateStart,
        dateEnd: item.fields.dateEnd,
        readableDate: simpleGermanDate(item.fields.dateStart),
        parentTitle: item.fields.parentTitle,
        parentURL: item.fields.parentURL,
      },
    };
  });

  return workshops;
};

export const getLandingPage = async () => {
  const landingPageData = await contentfulClient.getEntry<LandingPage>(
    "1aRfABlgG4hmSE78soNUP3",
  );
  return landingPageData.fields;
};
