import { Document } from 'mongoose';

export interface SubCategory extends Document {
  name: string;
  status: number;
  image: any;
  icon: any;
  category: string;
}
