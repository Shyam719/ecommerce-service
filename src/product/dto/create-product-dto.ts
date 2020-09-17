export class CreateProductDto {
  name: string;
  description: string;
  hsn: string;
  tax: boolean;
  disc: number;
  low_stock: number;
  mrp: number;
  sale_price: number;
  variant: string;
  category: string;
  subCategory: String;
}
