import { CreateProductInput } from '@/validators/create-product.schema';
import isEmpty from 'lodash/isEmpty';

export const customFields = [
  {
    label: '',
    value: '',
  },
];
export const locationShipping = [
  {
    name: '',
    shippingCharge: '',
  },
];
export const productVariants = [
  {
    label: '',
    value: '',
  },
];

export function defaultValues(product?: CreateProductInput) {
  return {
    title: product?.title ?? '',
    sku: product?.sku ?? '',
    type: product?.type ?? '',
    categories: product?.categories ?? '',
    description: product?.description ?? '',
    price: product?.price ?? undefined,
    costPrice: product?.costPrice ?? undefined,
    retailPrice: product?.retailPrice ?? undefined,
    salePrice: product?.salePrice ?? undefined,
    inventoryTracking: product?.inventoryTracking ?? '',
    currentStock: product?.currentStock ?? '',
    lowStock: product?.lowStock ?? '',
    productAvailability: product?.productAvailability ?? '',
    productImages: product?.productImages ?? undefined,
    tradeNumber: product?.tradeNumber ?? '',
    manufacturerNumber: product?.manufacturerNumber ?? '',
    brand: product?.brand ?? '',
    upcEan: product?.upcEan ?? '',
    customFields: isEmpty(product?.customFields)
      ? customFields
      : product?.customFields,

    freeShipping: product?.freeShipping ?? false,
    shippingPrice: product?.shippingPrice ?? undefined,
    locationBasedShipping: product?.locationBasedShipping ?? false,
    locationShipping: isEmpty(product?.locationShipping)
      ? locationShipping
      : product?.locationShipping,
    pageTitle: product?.pageTitle ?? '',
    metaDescription: product?.metaDescription ?? '',
    metaKeywords: product?.metaKeywords ?? '',
    productUrl: product?.productUrl ?? '',
    isPurchaseSpecifyDate: product?.isPurchaseSpecifyDate ?? false,
    isLimitDate: product?.isLimitDate ?? false,
    dateFieldName: product?.dateFieldName ?? '',
    productVariants: isEmpty(product?.productVariants)
      ? productVariants
      : product?.productVariants,
    tags: product?.tags ?? [],
  };
}

export const productData = {
  title: 'S.H.FIGUARTS: Dragon Ball Super Super Hero - Son Goku - Super Hero Ver. (Reissue) [Bandai]',
  description: 'Mejora tu colección con la figura "S.H.FIGUARTS: Dragon Ball Super Super Hero - Son Goku - Super Hero Ver. (Reissue)" de Bandai.',
  sku: 'SKU-28935',
  type: 'Producto Digital',
  categories: 'S.H.Figuarts',
  price: 800,
  costPrice: 600,
  retailPrice: 750,
  salePrice: 800,
  productImages: undefined,
  inventoryTracking: 'no',
  currentStock: '150',
  lowStock: '2',
  productAvailability: 'online',
  tradeNumber: '12345',
  manufacturerNumber: '154',
  brand: 'S.H.Figuarts',
  upcEan: 'Ean',
  customFields: [
    {
      label: 'Color',
      value: 'Rojo',
    },
  ],
  freeShipping: false,
  shippingPrice: 45,
  locationBasedShipping: true,
  locationShipping: [
    {
      name: 'MEX',
      shippingCharge: '200',
    },
  ],
  pageTitle: 'S.H.Figuarts',
  metaDescription: 'S.H.Figuarts',
  metaKeywords: 'Dragon Ball, S.H.figuarts',
  productUrl: 'http://localhost:3000/',
  isPurchaseSpecifyDate: true,
  isLimitDate: true,
  dateFieldName: 'Date Field',
  productVariants: [
    {
      name: 'Goku',
      value: '800',
    },
  ],
  tags: ['Figura', 'Dragon Ball'],
};

export const menuItems = [
  {
    label: 'Resumen',
    value: 'Resumen',
  },
  {
    label: 'Imagenes & Galeria',
    value: 'Imagenes & Galeria',
  },
  {
    label: 'Precio e Inventario',
    value: 'Precio e Inventario',
  },
  {
    label: 'Identificadores de productos y campos personalizados',
    value: 'Identificadores de productos y campos personalizados',
  },
  {
    label: 'Envío y disponibilidad',
    value: 'Envío y disponibilidad',
  },
  {
    label: 'SEO',
    value: 'SEO',
  },
  {
    label: 'Opciones variantes',
    value: 'Opciones variantes',
  },
];

// Category option
export const categoryOption = [
  {
    value: 'Mini Figuarts',
    label: 'Mini Figuarts',
  },
  {
    value: 'Myth Cloth',
    label: 'Myth Cloth',
  },
  {
    value: 'Anime Heroes',
    label: 'Anime Heroes',
  },
  {
    value: 'Banpresto',
    label: 'Banpresto',
  },
  {
    value: 'Proplica',
    label: 'Proplica',
  },
  {
    value: 'S.H.Monstarts',
    label: 'S.H.Monstarts',
  },
  {
    value: 'Model Kit',
    label: 'Model Kit',
  },
];

// Type option
export const typeOption = [
  {
    value: 'Producto Digital',
    label: 'Producto Digital',
  },
  {
    value: 'Producto Físico',
    label: 'Producto Físico',
  },
];

// Variant option
export const variantOption = [
  {
    value: 'Unico',
    label: 'Unico',
  },
  {
    value: 'Multiple',
    label: 'Multiple',
  },
];
