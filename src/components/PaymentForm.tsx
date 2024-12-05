// import React from 'react';
// import { CreditCard, Phone } from 'lucide-react';
// import type { PaymentMethod } from '../types';

import React, { useState } from "react";

interface PaymentDetails {
  method: "credit-card" | "mobile-money";
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  mobileMoneyDetails?: {
    provider: string;
    phoneNumber: string;
  };
}

interface PaymentFormProps {
  onSubmit: (paymentDetails: PaymentDetails) => void;
}

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<"credit-card" | "mobile-money">("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [provider, setProvider] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const paymentDetails: PaymentDetails = {
      method: paymentMethod,
      cardNumber: paymentMethod === "credit-card" ? cardNumber : undefined,
      expiryDate: paymentMethod === "credit-card" ? expiryDate : undefined,
      cvv: paymentMethod === "credit-card" ? cvv : undefined,
      mobileMoneyDetails:
        paymentMethod === "mobile-money"
          ? {
              provider,
              phoneNumber,
            }
          : undefined,
    };

    onSubmit(paymentDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Payment Information</h2>

      <div className="mb-4">
      <label htmlFor="paymentMethod" className="block mb-2 font-semibold">
    Payment Method
  </label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value as "credit-card" | "mobile-money")}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="credit-card">Credit Card</option>
          <option value="mobile-money">Mobile Money</option>
        </select>
      </div>

      {paymentMethod === "credit-card" && (
        <>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Enter your card number"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="MM/YY"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="CVV"
            />
          </div>
        </>
      )}

      {paymentMethod === "mobile-money" && (
        <>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Provider</label>
            <input
              type="text"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Enter mobile money provider"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Enter phone number"
            />
          </div>
        </>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Payment
      </button>
    </form>
  );
}
