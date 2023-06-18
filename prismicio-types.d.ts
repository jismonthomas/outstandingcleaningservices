// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for About documents */
interface AboutDocumentData {
  /**
   * Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Image Heading field in *About*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: about.image_heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  image_heading: prismic.TitleField;
  /**
   * Image Text field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.image_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  image_text: prismic.RichTextField;
  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *About → Slice Zone*
 *
 */
type AboutDocumentDataSlicesSlice =
  | HeaderSlice
  | HeadingAndTextSlice
  | ParagraphSlice;
/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<AboutDocumentData>, "about", Lang>;
/** Content for Contact documents */
interface ContactDocumentData {
  /**
   * Slice Zone field in *Contact*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<ContactDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Contact*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: contact.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Contact*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: contact.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Contact → Slice Zone*
 *
 */
type ContactDocumentDataSlicesSlice = HeaderSlice;
/**
 * Contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ContactDocumentData>,
    "contact",
    Lang
  >;
/** Content for Footer documents */
interface FooterDocumentData {
  /**
   * Logo field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismic.ImageField<never>;
  /**
   * Menu Item 1 field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.menu_item_1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menu_item_1: prismic.LinkField;
  /**
   * Menu Item 2 field in *Footer*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.menu_item_2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menu_item_2: prismic.RelationField;
  /**
   * Menu Item 3 field in *Footer*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.menu_item_3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menu_item_3: prismic.RelationField;
  /**
   * Menu Item 4 field in *Footer*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.menu_item_4
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menu_item_4: prismic.RelationField;
  /**
   * Menu Item 5 field in *Footer*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.menu_item_5
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menu_item_5: prismic.RelationField;
  /**
   * Menu Item 6 field in *Footer*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.menu_item_6
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menu_item_6: prismic.RelationField;
  /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice>;
}
/**
 * Slice for *Footer → Slice Zone*
 *
 */
type FooterDocumentDataSlicesSlice = never;
/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;
/** Content for Global Navigation documents */
interface GlobalNavigationDocumentData {
  /**
   * Menu Item 1 field in *Global Navigation*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: global_navigation.menu_item_1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menu_item_1: prismic.RelationField;
  /**
   * Menu Item 2 field in *Global Navigation*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: global_navigation.menu_item_2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menu_item_2: prismic.RelationField;
  /**
   * Menu Item 3 field in *Global Navigation*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: global_navigation.menu_item_3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menu_item_3: prismic.RelationField;
  /**
   * Menu Item 4 field in *Global Navigation*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: global_navigation.menu_item_4
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menu_item_4: prismic.RelationField;
  /**
   * Menu Item 5 field in *Global Navigation*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: global_navigation.menu_item_5
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menu_item_5: prismic.RelationField;
  /**
   * Menu Item 6 field in *Global Navigation*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: global_navigation.menu_item_6
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menu_item_6: prismic.RelationField;
}
/**
 * Global Navigation document from Prismic
 *
 * - **API ID**: `global_navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GlobalNavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<GlobalNavigationDocumentData>,
    "global_navigation",
    Lang
  >;
/** Content for Home documents */
interface HomeDocumentData {
  /**
   * Section 3 Left Side field in *Home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.section_3_left_side
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  section_3_left_side: prismic.RichTextField;
  /**
   * Section 3 Right Side field in *Home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.section_3_right_side
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  section_3_right_side: prismic.RichTextField;
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice =
  | HeaderSlice
  | CallToActionSlice
  | ImageSliderSlice;
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Services documents */
interface ServicesDocumentData {
  /**
   * Slice Zone field in *Services*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: services.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<ServicesDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Services*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: services.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Services*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: services.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: services.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Services → Slice Zone*
 *
 */
type ServicesDocumentDataSlicesSlice = ServiceItemSlice | HeaderSlice;
/**
 * Services document from Prismic
 *
 * - **API ID**: `services`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServicesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ServicesDocumentData>,
    "services",
    Lang
  >;
/** Content for Settings documents */
interface SettingsDocumentData {
  /**
   * White Letter Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.white_letter_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  white_letter_logo: prismic.ImageField<never>;
  /**
   * Black Letter Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.black_letter_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  black_letter_logo: prismic.ImageField<never>;
  /**
   * Icon field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.icon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  icon: prismic.ImageField<never>;
  /**
   * Primary Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.primary_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  primary_color: prismic.ColorField;
  /**
   * Dark Text Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.dark_text_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  dark_text_color: prismic.ColorField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;
export type AllDocumentTypes =
  | AboutDocument
  | ContactDocument
  | FooterDocument
  | GlobalNavigationDocument
  | HomeDocument
  | ServicesDocument
  | SettingsDocument;
/**
 * Primary content in CallToAction → Primary
 *
 */
interface CallToActionSliceDefaultPrimary {
  /**
   * Description field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Primary Button field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.primary_button
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  primary_button: prismic.LinkField;
  /**
   * Primary Button Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.primary_button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  primary_button_text: prismic.KeyTextField;
  /**
   * Secondary Button field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.secondary_button
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  secondary_button: prismic.LinkField;
  /**
   * Secondary Button Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.secondary_button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  secondary_button_text: prismic.KeyTextField;
}
/**
 * Item in CallToAction → Items
 *
 */
export interface CallToActionSliceDefaultItem {
  /**
   * Title Line field in *CallToAction → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.items[].title_line
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title_line: prismic.KeyTextField;
}
/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  Simplify<CallToActionSliceDefaultItem>
>;
/**
 * Slice variation for *CallToAction*
 *
 */
type CallToActionSliceVariation = CallToActionSliceDefault;
/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: `CallToAction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;
/**
 * Primary content in Header → Primary
 *
 */
interface HeaderSliceDefaultPrimary {
  /**
   * Description field in *Header → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
}
/**
 * Item in Header → Items
 *
 */
export interface HeaderSliceDefaultItem {
  /**
   * Title Line field in *Header → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].title_line
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title_line: prismic.KeyTextField;
}
/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeaderSliceDefaultPrimary>,
  Simplify<HeaderSliceDefaultItem>
>;
/**
 * Primary content in Header → Primary
 *
 */
interface HeaderSliceHeaderWithButtonPrimary {
  /**
   * Description field in *Header → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Primary Button field in *Header → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.primary_button
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  primary_button: prismic.LinkField;
  /**
   * Primary Button Text field in *Header → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.primary_button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  primary_button_text: prismic.KeyTextField;
  /**
   * Secondary Button field in *Header → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.secondary_button
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  secondary_button: prismic.LinkField;
  /**
   * Secondary Button Text  field in *Header → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.secondary_button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  secondary_button_text: prismic.KeyTextField;
}
/**
 * Item in Header → Items
 *
 */
export interface HeaderSliceHeaderWithButtonItem {
  /**
   * Title Line field in *Header → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].title_line
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title_line: prismic.KeyTextField;
}
/**
 * header-with-button variation for Header Slice
 *
 * - **API ID**: `headerWithButton`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSliceHeaderWithButton = prismic.SharedSliceVariation<
  "headerWithButton",
  Simplify<HeaderSliceHeaderWithButtonPrimary>,
  Simplify<HeaderSliceHeaderWithButtonItem>
>;
/**
 * Slice variation for *Header*
 *
 */
type HeaderSliceVariation = HeaderSliceDefault | HeaderSliceHeaderWithButton;
/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSlice = prismic.SharedSlice<"header", HeaderSliceVariation>;
/**
 * Primary content in HeadingAndText → Primary
 *
 */
interface HeadingAndTextSliceDefaultPrimary {
  /**
   * Identifier field in *HeadingAndText → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: (used identify content in code)
   * - **API ID Path**: heading_and_text.primary.identifier
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  identifier: prismic.KeyTextField;
  /**
   * Heading field in *HeadingAndText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_and_text.primary.heading
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  heading: prismic.RichTextField;
  /**
   * Text field in *HeadingAndText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_and_text.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
}
/**
 * Default variation for HeadingAndText Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeadingAndTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeadingAndTextSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *HeadingAndText*
 *
 */
type HeadingAndTextSliceVariation = HeadingAndTextSliceDefault;
/**
 * HeadingAndText Shared Slice
 *
 * - **API ID**: `heading_and_text`
 * - **Description**: `HeadingAndText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeadingAndTextSlice = prismic.SharedSlice<
  "heading_and_text",
  HeadingAndTextSliceVariation
>;
/**
 * Item in ImageSlider → Items
 *
 */
export interface ImageSliderSliceDefaultItem {
  /**
   * Image field in *ImageSlider → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_slider.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Caption field in *ImageSlider → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_slider.items[].caption
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  caption: prismic.KeyTextField;
}
/**
 * Default variation for ImageSlider Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ImageSliderSliceDefaultItem>
>;
/**
 * Slice variation for *ImageSlider*
 *
 */
type ImageSliderSliceVariation = ImageSliderSliceDefault;
/**
 * ImageSlider Shared Slice
 *
 * - **API ID**: `image_slider`
 * - **Description**: `ImageSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliderSlice = prismic.SharedSlice<
  "image_slider",
  ImageSliderSliceVariation
>;
/**
 * Primary content in Paragraph → Primary
 *
 */
interface ParagraphSliceDefaultPrimary {
  /**
   * Identifier field in *Paragraph → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: (used identify content in code)
   * - **API ID Path**: paragraph.primary.identifier
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  identifier: prismic.KeyTextField;
}
/**
 * Item in Paragraph → Items
 *
 */
export interface ParagraphSliceDefaultItem {
  /**
   * Paragraph field in *Paragraph → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: paragraph.items[].paragraph
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  paragraph: prismic.RichTextField;
}
/**
 * Default variation for Paragraph Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ParagraphSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ParagraphSliceDefaultPrimary>,
  Simplify<ParagraphSliceDefaultItem>
>;
/**
 * Slice variation for *Paragraph*
 *
 */
type ParagraphSliceVariation = ParagraphSliceDefault;
/**
 * Paragraph Shared Slice
 *
 * - **API ID**: `paragraph`
 * - **Description**: `Paragraph`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ParagraphSlice = prismic.SharedSlice<
  "paragraph",
  ParagraphSliceVariation
>;
/**
 * Item in ServiceItem → Items
 *
 */
export interface ServiceItemSliceDefaultItem {
  /**
   * Heading field in *ServiceItem → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_item.items[].heading
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  heading: prismic.KeyTextField;
  /**
   * Description field in *ServiceItem → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_item.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Excerpt field in *ServiceItem → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_item.items[].excerpt
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  excerpt: prismic.RichTextField;
  /**
   * Icon field in *ServiceItem → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: service_item.items[].icon
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  icon: prismic.ImageField<never>;
  /**
   * Theme field in *ServiceItem → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: service_item.items[].theme
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  theme: prismic.ColorField;
}
/**
 * Default variation for ServiceItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ServiceItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ServiceItemSliceDefaultItem>
>;
/**
 * Slice variation for *ServiceItem*
 *
 */
type ServiceItemSliceVariation = ServiceItemSliceDefault;
/**
 * ServiceItem Shared Slice
 *
 * - **API ID**: `service_item`
 * - **Description**: `ServiceItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ServiceItemSlice = prismic.SharedSlice<
  "service_item",
  ServiceItemSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      AboutDocument,
      ContactDocumentData,
      ContactDocumentDataSlicesSlice,
      ContactDocument,
      FooterDocumentData,
      FooterDocumentDataSlicesSlice,
      FooterDocument,
      GlobalNavigationDocumentData,
      GlobalNavigationDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      HomeDocument,
      ServicesDocumentData,
      ServicesDocumentDataSlicesSlice,
      ServicesDocument,
      SettingsDocumentData,
      SettingsDocument,
      AllDocumentTypes,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceDefaultItem,
      CallToActionSliceDefault,
      CallToActionSliceVariation,
      CallToActionSlice,
      HeaderSliceDefaultPrimary,
      HeaderSliceDefaultItem,
      HeaderSliceDefault,
      HeaderSliceHeaderWithButtonPrimary,
      HeaderSliceHeaderWithButtonItem,
      HeaderSliceHeaderWithButton,
      HeaderSliceVariation,
      HeaderSlice,
      HeadingAndTextSliceDefaultPrimary,
      HeadingAndTextSliceDefault,
      HeadingAndTextSliceVariation,
      HeadingAndTextSlice,
      ImageSliderSliceDefaultItem,
      ImageSliderSliceDefault,
      ImageSliderSliceVariation,
      ImageSliderSlice,
      ParagraphSliceDefaultPrimary,
      ParagraphSliceDefaultItem,
      ParagraphSliceDefault,
      ParagraphSliceVariation,
      ParagraphSlice,
      ServiceItemSliceDefaultItem,
      ServiceItemSliceDefault,
      ServiceItemSliceVariation,
      ServiceItemSlice,
    };
  }
}
