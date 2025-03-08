export type CreateGalleryResponse = {
  message: string;
  data: {
    thumbnail: string | null;
    title: string;
    description: string;
    images: string[];
    _id: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};

export type GallerySingleItemType = {
  _id: string;
  thumbnail: string | null;
  title: string;
  description?: string;
  images: string[];
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Meta = {
  totalPages: number;
  currentPage: number;
  total: number;
  pageSize: number;
};

export type GetGalleryApiResponse = {
  message: string;
  data: Array<GallerySingleItemType>;
  meta: Meta;
};

export type GetAllPhotosApiResponse = {
  message: string;
  data: string[];
  meta: Meta;
};

export type GetSingleGalleryApiResponse = {
  message: string;
  data: GallerySingleItemType;
};

export type PutGalleryType = {
  id: string;
  deleteImage?: string[];
  imageFiles?: File[];
};
