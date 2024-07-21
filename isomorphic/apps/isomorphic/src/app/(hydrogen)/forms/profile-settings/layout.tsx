import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import ProfileSettingsNav from '@/app/shared/account-settings/navigation';

const pageHeader = {
  title: 'Confuración de Cuenta',
  breadcrumb: [
    {
      href: '/',
      name: 'Inicio',
    },
    {
      href: routes.forms.profileSettings,
      name: 'Forma',
    },
    {
      name: 'Confuración de Cuenta',
    },
  ],
};

export default function ProfileSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <ProfileSettingsNav />
      {children}
    </>
  );
}
