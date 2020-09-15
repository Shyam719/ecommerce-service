import { Document } from 'mongoose';

export interface Category extends Document {
  name: string;
  manageInventory: number;
  status: number;
  image: any;
  icon: any;
}
