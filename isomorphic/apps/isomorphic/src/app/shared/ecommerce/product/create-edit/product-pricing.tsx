import { useFormContext } from 'react-hook-form';
import { Input } from 'rizzui';

export default function ProductPricing() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Input
        label="Precio"
        placeholder="10"
        {...register('price')}
        error={errors.price?.message as string}
        prefix={'$'}
        type="number"
      />
      <Input
        label="Precio de coste"
        placeholder="15"
        {...register('costPrice')}
        error={errors.costPrice?.message as string}
        prefix={'$'}
        type="number"
      />
      <Input
        label="Precio al por menor"
        placeholder="10"
        {...register('retailPrice')}
        error={errors.retailPrice?.message as string}
        prefix={'$'}
        type="number"
      />
      <Input
        label="Precio de venta"
        placeholder="20"
        {...register('salePrice')}
        error={errors.salePrice?.message as string}
        prefix={'$'}
        type="number"
      />
    </>
  );
}
