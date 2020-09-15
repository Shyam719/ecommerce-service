import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface SubCategory extends Document {
  name: string;
  status: number;
  image: any;
  icon: any;
  category: string | mongoose.Schema.Types.ObjectId;
}
