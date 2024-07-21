import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from '@/app/shared/page-header';
import { TabList } from '@/app/shared/support/inbox/inbox-tabs';
import SupportInbox from '@/app/shared/support/inbox';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Bandeja de entrada de soporte'),
};

const pageHeader = {
  title: 'Bandeja de entrada de soporte',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Inicio',
    },
    {
      href: routes.support.dashboard,
      name: 'Soporte',
    },
    {
      name: 'Bandeja de entrada',
    },
  ],
};

export default function SupportInboxPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Button className="mt-4 w-full @lg:mt-0 @lg:w-auto">
          <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
          Create Ticket
        </Button>
      </PageHeader>

      <TabList />

      <SupportInbox />
    </>
  );
}
