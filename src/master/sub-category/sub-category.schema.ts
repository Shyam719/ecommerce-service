import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import * as existsValidator from 'mongoose-exists';

export const SubCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'is required'],
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    icon: {
      data: Buffer,
      contentType: String,
    },
    status: {
      type: Number,
      default: 1,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'category is required'],
      exists: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

SubCategorySchema.plugin(uniqueValidator, { message: 'is already taken' });
SubCategorySchema.plugin(existsValidator);
