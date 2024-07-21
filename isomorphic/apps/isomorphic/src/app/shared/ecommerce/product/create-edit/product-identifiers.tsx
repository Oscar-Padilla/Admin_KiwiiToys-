import { useFormContext } from 'react-hook-form';
import { Input } from 'rizzui';
import cn from '@utils/class-names';
import FormGroup from '@/app/shared/form-group';
import CustomFields from '@/app/shared/ecommerce/product/create-edit/custom-fields';

interface ProductIdentifiersProps {
  className?: string;
}

export default function ProductIdentifiers({
  className,
}: ProductIdentifiersProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormGroup
      title="Identificadores de producto"
      description="Edite los identificadores de sus productos aquí"
      className={cn(className)}
    >
      <Input
        label="Número de artículo comercial global"
        placeholder="12345"
        {...register('tradeNumber')}
        error={errors.tradeNumber?.message as string}
      />
      <Input
        label="Número de pieza del fabricante"
        placeholder="145782"
        {...register('manufacturerNumber')}
        error={errors.manufacturerNumber?.message as string}
      />
      <Input
        label="Nombre de la marca"
        placeholder="Nombre de la marca"
        {...register('brand')}
        error={errors.brand?.message as string}
      />
      <Input
        label="Producto UPC/EAN "
        placeholder="145782"
        {...register('upcEan')}
        error={errors.upcEan?.message as string}
      />
      <CustomFields />
    </FormGroup>
  );
}
