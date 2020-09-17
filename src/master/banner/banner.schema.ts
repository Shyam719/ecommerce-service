import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Schema as mongooseSchema } from 'mongoose';
import * as idValidator from 'mongoose-id-validator';

@Schema()
export class Banner extends Document {
  @Prop({ required: true, min: 5, max: 255 })
  desc: string;

  @Prop({ required: true })
  type: string;

  @Prop(
    raw({
      data: { type: Buffer },
      contentType: { type: String },
      originalName: { type: String },
    }),
  )
  image: Record<string, any>;

  @Prop({ ref: 'Category', type: mongooseSchema.Types.ObjectId })
  category: mongooseSchema.Types.ObjectId;

  @Prop({ ref: 'Product', type: mongooseSchema.Types.ObjectId })
  product: mongooseSchema.Types.ObjectId;

  @Prop({ default: 1 })
  status: number;

  @Prop({ default: 1 })
  level: number;
}

export const BannerSchema = SchemaFactory.createForClass(Banner);

// BannerSchema.plugin(idValidator);
