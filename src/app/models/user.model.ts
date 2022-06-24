export default interface IUser {
  uid?: string;
  name: string;
  email: string;
  age: number;
  phoneNumber: string;
  password?: string;
  confirm_password?: string;
  createdAt?: string;
  updatedAt?: string;
}
