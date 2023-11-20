export type TProduct = {
  name: string;
  src: string;
  price: number;
  priceOld: number;
  reference?: string;
  description?: string;
  url?: string;
  whatsappURL?: string;
  urlImage?: string;
  path?: string;
};

export type TGeneralInfo = {
  id: string;
  title: string;
  src: string;
  price?: number;
  priceOld?: number;
  reference?: string;
  description?: string;
};
