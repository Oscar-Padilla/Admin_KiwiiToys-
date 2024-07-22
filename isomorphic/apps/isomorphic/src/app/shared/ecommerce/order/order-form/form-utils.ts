import { CreateOrderInput } from '@/validators/create-order.schema';

export function defaultValues(order?: CreateOrderInput) {
  return {
    billingAddress: {
      customerName: order?.billingAddress?.customerName,
      phoneNumber: order?.billingAddress?.phoneNumber,
      country: order?.billingAddress?.country,
      state: order?.billingAddress?.state,
      city: order?.billingAddress?.city,
      zip: order?.billingAddress?.zip,
      street: order?.billingAddress?.street,
    },
    sameShippingAddress: order?.sameShippingAddress ?? true,
    shippingAddress: {
      customerName: order?.shippingAddress?.customerName,
      phoneNumber: order?.shippingAddress?.phoneNumber,
      country: order?.shippingAddress?.country,
      state: order?.shippingAddress?.state,
      city: order?.shippingAddress?.city,
      zip: order?.shippingAddress?.zip,
      street: order?.shippingAddress?.street,
    },
    note: order?.note,
    paymentMethod: order?.paymentMethod,
    shippingMethod: order?.shippingMethod,
    shippingSpeed: order?.shippingSpeed,
    cardPayment: {
      cardNumber: order?.cardPayment?.cardNumber,
      expireMonth: order?.cardPayment?.expireMonth,
      expireYear: order?.cardPayment?.expireYear,
      cardCVC: order?.cardPayment?.cardCVC,
      cardUserName: order?.cardPayment?.cardUserName,
      isSaveCard: order?.cardPayment?.isSaveCard,
    },
  };
}

export const orderData = {
  billingAddress: {
    customerName: 'José Alexis Silva Guerrero',
    phoneNumber: '+52 499-118-9627',
    country: 'México',
    state: 'Aguascalientes',
    city: 'Cienega Grande',
    zip: '20722',
    street: 'Emiliano Zapata #19',
  },
  sameShippingAddress: true,
  shippingAddress: {
    customerName: 'José Alexis Silva Guerrero',
    phoneNumber: '',
    country: 'México',
    state: 'Aguascalientes',
    city: 'Cienega Grande',
    zip: '20722',
    street: 'Emiliano Zapata #19',
  },
  note: '',
  paymentMethod: 'PayPal',
  shippingMethod: 'Correos de México',
  shippingSpeed: '',
};
