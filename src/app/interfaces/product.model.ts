export interface ProductModel {
  imageUrl: string,
  description: string,
  price: number,
  details
}

export interface FilteredDetailOfProduct {
  [index: number]: [string, string[]];
}
