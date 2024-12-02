export interface FormData {
  lastName: string;
  firstName: string;
  middleName: string;
  phone: string;
  email: string;
  address: string;
  username: string;
  password: string;
  confirmPassword: string;
  birthMonth: string;
  birthDay: string;
  birthYear: string;
}

export interface Agreements {
  personalData: boolean;
  terms: boolean;
  age: boolean;
}