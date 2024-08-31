/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type ProductType = {
  _id: string;
  _type: "productType";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
};

export type Product = {
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  description?: string;
  productType?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "productType";
  }>;
  isSoldOut: boolean;
  priceList: Price;
  volume?: number;
  alcoholContent?: number;
  variants?: Array<string>;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  producer?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "producer";
  };
};

export type Price = {
  _type: "price";
  ordinary: number;
  student: number;
  internal: number;
};

export type Producer = {
  _id: string;
  _type: "producer";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  logo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Event = {
  _id: string;
  _type: "event";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  start: string;
  end: string;
  isPrivate?: boolean;
  registrationLink?: string;
  body: string;
};

export type MediaTag = {
  _id: string;
  _type: "media.tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: Slug;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type Markdown = string;

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | ProductType
  | Product
  | Price
  | Producer
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Event
  | MediaTag
  | Slug
  | Markdown;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/lib/data/sanity/events.ts
// Variable: getEventsQuery
// Query: *[_type == "event" && !(_id in path("drafts.**"))] | order(start desc) {	_id,	title,	"slug": slug.current,	start,	end,	isPrivate,	registrationLink,	body}
export type GetEventsQueryResult = Array<{
  _id: string;
  title: string;
  slug: string;
  start: string;
  end: string;
  isPrivate: boolean | null;
  registrationLink: string | null;
  body: string;
}>;
// Variable: getUpcomingEventsQuery
// Query: *[_type == "event" && !(_id in path("drafts.**")) && start > now()] | order(start asc) {	_id,    title,	"slug": slug.current,    start,    end,	isPrivate,	registrationLink,    body}
export type GetUpcomingEventsQueryResult = Array<{
  _id: string;
  title: string;
  slug: string;
  start: string;
  end: string;
  isPrivate: boolean | null;
  registrationLink: string | null;
  body: string;
}>;
// Variable: getEventBySlugQuery
// Query: *[_type == "event" && !(_id in path("drafts.**")) && slug.current == $slug] {	_id,	title,	"slug": slug.current,	start,	end,	isPrivate,	registrationLink,	body}[0]
export type GetEventBySlugQueryResult = {
  _id: string;
  title: string;
  slug: string;
  start: string;
  end: string;
  isPrivate: boolean | null;
  registrationLink: string | null;
  body: string;
} | null;

// Source: ./src/lib/data/sanity/products.ts
// Variable: getProductsQuery
// Query: *[_type == "product" && !(_id in path("drafts.**"))] {    _id,    name,    description,    "productTypes": productType[]->{        _id,        title    },    isSoldOut,    priceList,    image,    "producer": producer->name,    volume,    alcoholContent,    variants,}
export type GetProductsQueryResult = Array<{
  _id: string;
  name: string;
  description: string | null;
  productTypes: Array<{
    _id: string;
    title: string;
  }> | null;
  isSoldOut: boolean;
  priceList: Price;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  producer: string | null;
  volume: number | null;
  alcoholContent: number | null;
  variants: Array<string> | null;
}>;
// Variable: getProductByIdQuery
// Query: *[_type == "product" && _id == $id && !(_id in path("drafts.**"))] {    _id,    name,    description,    "productTypes": productType[]->{        _id,        title    },    isSoldOut,    priceList,    image,    "producer": producer->name,    volume,    alcoholContent,    variants,}[0]
export type GetProductByIdQueryResult = {
  _id: string;
  name: string;
  description: string | null;
  productTypes: Array<{
    _id: string;
    title: string;
  }> | null;
  isSoldOut: boolean;
  priceList: Price;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  producer: string | null;
  volume: number | null;
  alcoholContent: number | null;
  variants: Array<string> | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    '*[_type == "event" && !(_id in path("drafts.**"))] | order(start desc) {\n\t_id,\n\ttitle,\n\t"slug": slug.current,\n\tstart,\n\tend,\n\tisPrivate,\n\tregistrationLink,\n\tbody\n}': GetEventsQueryResult;
    '*[_type == "event" && !(_id in path("drafts.**")) && start > now()] | order(start asc) {\n\t_id,\n    title,\n\t"slug": slug.current,\n    start,\n    end,\n\tisPrivate,\n\tregistrationLink,\n    body\n}': GetUpcomingEventsQueryResult;
    '*[_type == "event" && !(_id in path("drafts.**")) && slug.current == $slug] {\n\t_id,\n\ttitle,\n\t"slug": slug.current,\n\tstart,\n\tend,\n\tisPrivate,\n\tregistrationLink,\n\tbody\n}[0]': GetEventBySlugQueryResult;
    '*[_type == "product" && !(_id in path("drafts.**"))] {\n    _id,\n    name,\n    description,\n    "productTypes": productType[]->{\n        _id,\n        title\n    },\n    isSoldOut,\n    priceList,\n    image,\n    "producer": producer->name,\n    volume,\n    alcoholContent,\n    variants,\n}': GetProductsQueryResult;
    '*[_type == "product" && _id == $id && !(_id in path("drafts.**"))] {\n    _id,\n    name,\n    description,\n    "productTypes": productType[]->{\n        _id,\n        title\n    },\n    isSoldOut,\n    priceList,\n    image,\n    "producer": producer->name,\n    volume,\n    alcoholContent,\n    variants,\n}[0]': GetProductByIdQueryResult;
  }
}
