import { metaObject } from '@/config/site.config';
import BillingSettingsView from '@/app/shared/account-settings/billing-settings';

export const metadata = {
  ...metaObject('Facturación'),
};

export default function IntegrationSettingsFormPage() {
  return <BillingSettingsView />;
}
