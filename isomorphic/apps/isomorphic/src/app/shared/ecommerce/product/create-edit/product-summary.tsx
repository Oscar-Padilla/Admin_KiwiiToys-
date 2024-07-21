import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'rizzui';
import cn from '@utils/class-names';
import FormGroup from '@/app/shared/form-group';
import {
  categoryOption,
  typeOption,
} from '@/app/shared/ecommerce/product/create-edit/form-utils';
import dynamic from 'next/dynamic';
import SelectLoader from '@components/loader/select-loader';
import QuillLoader from '@components/loader/quill-loader';
const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
  ssr: false,
  loading: () => <SelectLoader />,
});
const QuillEditor = dynamic(() => import('@ui/quill-editor'), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

export default function ProductSummary({ className }: { className?: string }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormGroup
      title="Resumen"
      description="Edite la descripción de su producto y la información necesaria desde aquí"
      className={cn(className)}
    >
      <Input
        label="Título"
        placeholder="Título de producto"
        {...register('title')}
        error={errors.title?.message as string}
      />
      <Input
        label="SKU"
        placeholder="Sku del Producto"
        {...register('sku')}
        error={errors.sku?.message as string}
      />

      <Controller
        name="Tipo"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            dropdownClassName="!z-0"
            options={typeOption}
            value={value}
            onChange={onChange}
            label="Tipo de Producto"
            error={errors?.type?.message as string}
            getOptionValue={(option) => option.value}
          />
        )}
      />

      <Controller
        name="Categorias"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            options={categoryOption}
            value={value}
            onChange={onChange}
            label="Categorias"
            error={errors?.categories?.message as string}
            getOptionValue={(option) => option.value}
            inPortal={false}
          />
        )}
      />

      <Controller
        control={control}
        name="Descripción"
        render={({ field: { onChange, value } }) => (
          <QuillEditor
            value={value}
            onChange={onChange}
            label="Descripción"
            className="col-span-full [&_.ql-editor]:min-h-[100px]"
            labelClassName="font-medium text-gray-700 dark:text-gray-600 mb-1.5"
          />
        )}
      />
    </FormGroup>
  );
}
