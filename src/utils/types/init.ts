import { LinkType } from "./links";

export type init = {
  texts: any;
  media: any;
  languages: Array<language>;
  generalInfo: Array<GeneralInfo>;
  links: Array<LinkType>;
  metaTags: Array<metaTags>;
};

export type GeneralInfo = {
  cmsTitle?: string;
  inputType: string;
  name: string;
  value: string | Array<any>;
  _id?: string;
};

export type language = {
  _id: string;
  lang: string;
};

export type metaTags = {
  _id: string;
  route: string;
  lang_id: string;
  fields: Array<metaTag>;
};

export type metaTag = {
  meta_tag_id: string;
  type: string;
  value: string;
};
