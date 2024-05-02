export interface UserProfile {
  name: string;
  gender: string;
  birthday: Date;
  occupation: string;
  phone: string;
  email: string;
  profileImage: File | null;
}
