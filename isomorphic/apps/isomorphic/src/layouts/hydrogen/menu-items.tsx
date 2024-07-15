import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import {
  PiShoppingCartDuotone,
  PiHeadsetDuotone,
  PiPackageDuotone,
  PiChartBarDuotone,
  PiCurrencyDollarDuotone,
  PiSquaresFourDuotone,
  PiGridFourDuotone,
  PiFeatherDuotone,
  PiChartLineUpDuotone,
  PiMapPinLineDuotone,
  PiUserGearDuotone,
  PiBellSimpleRingingDuotone,
  PiUserDuotone,
  PiEnvelopeSimpleOpenDuotone,
  PiStepsDuotone,
  PiCreditCardDuotone,
  PiTableDuotone,
  PiBrowserDuotone,
  PiHourglassSimpleDuotone,
  PiUserCircleDuotone,
  PiShootingStarDuotone,
  PiRocketLaunchDuotone,
  PiFolderLockDuotone,
  PiBinocularsDuotone,
  PiHammerDuotone,
  PiNoteBlankDuotone,
  PiUserPlusDuotone,
  PiShieldCheckDuotone,
  PiLockKeyDuotone,
  PiChatCenteredDotsDuotone,
  PiCalendarPlusDuotone,
  PiEnvelopeDuotone,
  PiCurrencyCircleDollarDuotone,
  PiBriefcaseDuotone,
  PiHouseLineDuotone,
  PiAirplaneTiltDuotone,
  PiFolder,
  PiCaretCircleUpDownDuotone,
  PiListNumbersDuotone,
  PiCoinDuotone,
  PiCalendarDuotone,
  PiShapesDuotone,
  PiNewspaperClippingDuotone,
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [

  // label start
  {
    name: 'Dashboard',
  },
  // label end
  {
    name: 'KiwiiToys',
    href: '/',
    icon: <PiShoppingCartDuotone />,
  },
  // label start
  {
    name: 'Herramientas',
  },
  // label end
  {
    name: 'KiwiiToys',
    href: '#',
    icon: <PiShoppingCartDuotone />,
    dropdownItems: [
      {
        name: 'Productos',
        href: routes.eCommerce.products,
        badge: '',
      },
      {
        name: 'Detalles de productos',
        href: routes.eCommerce.productDetails(DUMMY_ID),
      },
      {
        name: 'Agregar producto',
        href: routes.eCommerce.createProduct,
      },
      {
        name: 'Editar producto',
        href: routes.eCommerce.ediProduct(DUMMY_ID),
      },
      {
        name: 'Categorias',
        href: routes.eCommerce.categories,
      },
      {
        name: 'Agregar categoría',
        href: routes.eCommerce.createCategory,
      },
      {
        name: 'Editar categoría',
        href: routes.eCommerce.editCategory(DUMMY_ID),
      },
      {
        name: 'Órdenes de compra',
        href: routes.eCommerce.orders,
      },
      {
        name: 'Detalles de órdenes',
        href: routes.eCommerce.orderDetails(DUMMY_ID),
      },
      {
        name: 'Agregar órden de compra',
        href: routes.eCommerce.createOrder,
      },
      {
        name: 'Editar órden de compras',
        href: routes.eCommerce.editOrder(DUMMY_ID),
      },
      {
        name: 'Reviews',
        href: routes.eCommerce.reviews,
      },
      {
        name: 'Tienda',
        href: routes.eCommerce.shop,
      },
      {
        name: 'Carrito',
        href: routes.eCommerce.cart,
      },
      {
        name: 'Checkout y pago',
        href: routes.eCommerce.checkout,
      },
    ],
  },
  {
    name: 'Soporte',
    href: '#',
    icon: <PiHeadsetDuotone />,
    dropdownItems: [
      {
        name: 'Chat',
        href: routes.support.inbox,
      },
    ],
  },
  {
    name: 'Logística',
    href: '#',
    icon: <PiPackageDuotone />,
    dropdownItems: [
      {
        name: 'Lista de Envíos',
        href: routes.logistics.shipmentList,
      },
      {
        name: 'Detalles de envíos',
        href: routes.logistics.shipmentDetails(DUMMY_ID),
      },
      {
        name: 'Agregar envío',
        href: routes.logistics.createShipment,
      },
      {
        name: 'Editar envío',
        href: routes.logistics.editShipment(DUMMY_ID),
      },
      {
        name: 'Customer Profile',
        href: routes.logistics.customerProfile,
      },
      {
        name: 'Seguimiento',
        href: routes.logistics.tracking(DUMMY_ID),
      },
    ],
  },
];
