import dynamic from 'next/dynamic';
import { routes } from '@/config/routes';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import FiltersButton from '@/app/shared/filters-button';
import ProductFeed from '@/app/shared/ecommerce/shop/product-feed';
const ShopFilters = dynamic(
  () => import('@/app/shared/ecommerce/shop/shop-filters'),
  {
    ssr: false,
  }
);

const pageHeader = {
  title: 'Tienda',
  breadcrumb: [
    {
      name: 'Inicio',
    },
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      name: 'Tienda',
    },
  ],
};

export const metadata = {
  ...metaObject('Tienda'),
};

export default function ShopPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <FiltersButton placement="right" modalView={<ShopFilters />} />
      </PageHeader>

      <ProductFeed />
    </>
  );
}
