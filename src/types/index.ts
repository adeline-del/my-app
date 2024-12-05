export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  specs?: {
    [key: string]: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ShippingDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  region: string;
  digitalAddress: string;
}

export type PaymentMethod = 'credit-card' | 'mobile-money';

export interface PaymentDetails {
  method: PaymentMethod;
  mobileMoneyDetails?: {
    provider: string;
    phoneNumber: string;
  };
}