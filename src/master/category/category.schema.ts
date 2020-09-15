import * as mongoose from 'mongoose';
import * as validator from 'validator';
import * as uniqueValidator from 'mongoose-unique-validator';

export const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'is required'],
    },
    manage_inventory: {
      type: Number,
      default: 1,
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
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

CategorySchema.plugin(uniqueValidator, { message: 'is already taken' });
