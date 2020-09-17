import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types, Schema as mongooseSchema } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true, unique: true, min: 5, max: 255 })
  name: string;

  @Prop({ required: true, min: 5 })
  description: string;

  @Prop(
    raw({
      data: { type: Buffer },
      contentType: { type: String },
      originalName: { type: String },
    }),
  )
  image: Record<string, any>;

  @Prop({ required: true })
  hsn: string;

  @Prop({ required: true, default: true })
  tax: boolean;

  @Prop({ required: true })
  disc: number;

  @Prop({ required: true })
  low_stock: number;

  @Prop({ required: true })
  mrp: number;

  @Prop({ required: true })
  sale_price: number;

  @Prop({ required: true })
  variant: number;

  @Prop({ ref: 'Category', type: mongooseSchema.Types.ObjectId })
  category: mongooseSchema.Types.ObjectId;

  @Prop({ ref: 'Subcategory', type: mongooseSchema.Types.ObjectId })
  subCategory: mongooseSchema.Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
