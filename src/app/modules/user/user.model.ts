import { Schema, model } from 'mongoose';

import { TUser, TUserAddress, TUserNames, UserModel } from './user.interface';

const addressSchema = new Schema<TUserAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const fullNameSchema = new Schema<TUserNames>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const userSchema = new Schema<TUser, UserModel>({
  id: { type: String, required: true, unique: true },
  userId: { type: Number, required: true },
  username: { type: String, required: true },
  fullName: { type: fullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String, String], required: true },
  address: { type: addressSchema, required: true },
});

userSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await User.findOne({ id });
  return existingUser;
};

userSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

userSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await User.findOne({ id });
  return existingUser;
};
export const User = model<TUser, UserModel>('User', userSchema);
