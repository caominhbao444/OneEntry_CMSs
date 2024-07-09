"use server";
import { defineOneEntry } from "oneentry";
const {
  Admins,
  AttributesSets,
  AuthProvider,
  Blocks,
  Events,
  Forms,
  FormData,
  FileUploading,
  GeneralTypes,
  Locales,
  Menus,
  Orders,
  Pages,
  Products,
  ProductStatuses,
  System,
  Templates,
  TemplatePreviews,
  Payments,
  Users,
} = defineOneEntry("https://shop-ecomer.oneentry.cloud", {
  token: process.env.ONEENTRY_TOKEN,
  langCode: "en",
});

//get all data from a page by url
export async function getPageData(url: string) {
  const value = await Pages.getPageByUrl(url, "en_US");
  const bannerData = {
    title: value.attributeValues?.maintitle.value,
    image: value.attributeValues?.mainimage.value[0].downloadLink,
  };

  return { bannerData };
}
