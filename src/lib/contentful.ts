import * as contentful from "contentful";
import { type EntryFieldTypes } from "contentful";

const { createClient } = contentful;

export interface Page {
  contentTypeId: "pages";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    image?: EntryFieldTypes.Object;
    description?: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
  };
}
export interface Article {
  contentTypeId: "article";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    isFeatured: EntryFieldTypes.Boolean;
    image?: EntryFieldTypes.Object;
    description: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    publishedAt: EntryFieldTypes.Date;
  };
}

export interface Workshop {
  contentTypeId: "workshop";
  fields: {
    title: EntryFieldTypes.Text;
    headline: EntryFieldTypes.Text;
    description?: EntryFieldTypes.RichText;
    location?: EntryFieldTypes.Text;
    dateStart: EntryFieldTypes.Date;
    dateEnd?: EntryFieldTypes.Date;
    parentTitle?: EntryFieldTypes.Text;
    parentURL?: EntryFieldTypes.Text;
  };
}

export interface LandingPage {
  contentTypeId: "index";
  entryId: "1aRfABlgG4hmSE78soNUP3";
  fields: {
    title: EntryFieldTypes.Text;
    headerHeadline: EntryFieldTypes.Text;
    headerImage: EntryFieldTypes.Object;
    headerSubHeadline: EntryFieldTypes.Text;
    headerTagline: EntryFieldTypes.Text;
    headerLink01Label: EntryFieldTypes.Text;
    headerLink01URL: EntryFieldTypes.Text;
    headerLink02Label: EntryFieldTypes.Text;
    headerLink02URL: EntryFieldTypes.Text;
    introHeadline: EntryFieldTypes.Text;
    introSubHeadline: EntryFieldTypes.Text;
    introText: EntryFieldTypes.RichText;
    workshopsHeadline: EntryFieldTypes.Text;
    workshopsText: EntryFieldTypes.RichText;
    workshopsUpcomingHeadline: EntryFieldTypes.Text;
    workshopsRecentHeadline: EntryFieldTypes.Text;
    supportHeadline: EntryFieldTypes.Text;
    supportIntroText: EntryFieldTypes.RichText;
    supportText: EntryFieldTypes.RichText;
    supportLink01Label: EntryFieldTypes.Text;
    supportLink01URL: EntryFieldTypes.Text;
    supportLink02Label: EntryFieldTypes.Text;
    supportLink02URL: EntryFieldTypes.Text;
    supportLink03Label: EntryFieldTypes.Text;
    supportLink03URL: EntryFieldTypes.Text;
    supportLink04Label: EntryFieldTypes.Text;
    supportLink04URL: EntryFieldTypes.Text;
    articlesHeadline: EntryFieldTypes.Text;
    articlesIntroText: EntryFieldTypes.RichText;
    articlesLinkLabel: EntryFieldTypes.Text;
    articlesLinkURL: EntryFieldTypes.Text;
  };
}

export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
