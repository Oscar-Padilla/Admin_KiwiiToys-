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
        name: 'Categorías',
        href: routes.eCommerce.categories,
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
];
