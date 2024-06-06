import contentful, { type EntryFieldTypes } from "contentful";

export interface Page {
  contentTypeId: "pages";
  fields: {
    title: EntryFieldTypes.Text;
    format: EntryFieldTypes.Text;
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
    featured: EntryFieldTypes.Boolean;
    image?: EntryFieldTypes.Object;
    description: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
  };
}

export interface Event {
  contentTypeId: "event";
  fields: {
    format: EntryFieldTypes.Text;
    title?: EntryFieldTypes.Text;
    dateStart: EntryFieldTypes.Date;
    dateEnd?: EntryFieldTypes.Date;
    location?: EntryFieldTypes.Text;
    parentEventTitle?: EntryFieldTypes.Text;
    parentEventURL?: EntryFieldTypes.Text;
    content?: EntryFieldTypes.RichText;
  };
}
export interface WorkshopFormat {
  contentTypeId: "workshopFormat";
  fields: {
    title: EntryFieldTypes.Text;
    format: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    image: EntryFieldTypes.Object;
    description: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
