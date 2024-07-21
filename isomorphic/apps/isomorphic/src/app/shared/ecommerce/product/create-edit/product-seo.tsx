import { useFormContext } from 'react-hook-form';
import { Input } from 'rizzui';
import cn from '@utils/class-names';
import FormGroup from '@/app/shared/form-group';

export default function ProductSeo({ className }: { className?: string }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormGroup
      title="Optimización de motores de búsqueda"
      description="Añade aquí la información SEO de tu producto."
      className={cn(className)}
    >
      <Input
        label="Título de la página"
        placeholder="Título de la página"
        {...register('pageTitle')}
        error={errors.pageTitle?.message as string}
      />
      <Input
        label="Palabras clave"
        placeholder="Palabras clave"
        {...register('metaKeywords')}
        error={errors.metaKeywords?.message as string}
      />
      <Input
        label="Descripción"
        placeholder="Descripción"
        {...register('metaDescription')}
        error={errors.metaDescription?.message as string}
      />
      <Input
        label="Producto URL"
        type="url"
        placeholder="https://"
        {...register('productUrl')}
        error={errors.productUrl?.message as string}
      />
    </FormGroup>
  );
}
