import dynamic from 'next/dynamic';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import FileStats from '@/app/shared/file/manager/file-stats';
import { metaObject } from '@/config/site.config';
import UploadButton from '@/app/shared/upload-button';
import PageLayout from '@/app/(hydrogen)/file-manager/page-layout';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
  ssr: false,
});

export const metadata = {
  ...metaObject('Administrador de archivos'),
};

const pageHeader = {
  title: 'Administrador de archivos',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Inicio',
    },
    {
      href: routes.file.dashboard,
      name: 'Administrador de archivos',
    },
    {
      name: 'Lista',
    },
  ],
};

export default function FileListPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <UploadButton modalView={<FileUpload />} />
      </PageHeader>

      <FileStats className="mb-6 @5xl:mb-8 @7xl:mb-11" />
      <PageLayout />
    </>
  );
}
