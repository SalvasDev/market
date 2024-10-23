export interface Producto {
  _id:           number;
  name:          string;
  description:   string;
  Category:      string[];
  imageUrl:      string[];
  sale_price:    number;
  regular_price: number;
  slug?:         string;
  created_at:    Date;
  updated_at?:   Date;
}
