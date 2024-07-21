import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import TemplatesTable from '@/app/shared/support/templates/table';
import HeaderAction from '../header-action';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Templates'),
};

const pageHeader = {
  title: 'Soporte de Plantillas',
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
      name: 'Plantillas',
    },
  ],
};

export default function SupportTemplatesPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <HeaderAction title="template" />
      </PageHeader>
      <TemplatesTable />
    </>
  );
}
