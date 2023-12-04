import { Model } from 'mongoose';
export type TUserNames = {
  firstName: string;
  lastName: string;
};
export type TUserAddress = {
  street: string;
  city: string;
  country: string;
};
export type TUser = {
  id: string;
  userId: number;
  username: string;
  fullName: TUserNames;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: [string, string];
  address: TUserAddress;
};

export interface UserModel extends Model<TUser> {
  isUserExists(id: string): Promise<TUser | null>;
}
