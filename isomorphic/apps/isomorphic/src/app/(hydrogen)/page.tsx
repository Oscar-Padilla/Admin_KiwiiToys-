import FileDashboard from '@/app/shared/file/dashboard';
import EcommerceDashboard from '../shared/ecommerce/dashboard';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject(),
};

export default function EcommerceDashboardPage() {
  return <EcommerceDashboard />;
}
