'use client';

import { useCallback } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { Input, Switch, Button, ActionIcon } from 'rizzui';
import cn from '@utils/class-names';
import FormGroup from '@/app/shared/form-group';
import { locationShipping } from '@/app/shared/ecommerce/product/create-edit/form-utils';
import TrashIcon from '@components/icons/trash';
import { PiPlusBold } from 'react-icons/pi';

export default function ShippingInfo({ className }: { className?: string }) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'locationShipping',
  });

  const addCustomField = useCallback(
    () => append([...locationShipping]),
    [append]
  );

  return (
    <FormGroup
      title="Envío"
      description="Añade tu información de envío aquí"
      className={cn(className)}
    >
      <Controller
        name="freeShipping"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Switch
            label="Envío gratis"
            className="col-span-full"
            value={value}
            checked={value}
            onChange={onChange}
          />
        )}
      />

      <Input
        label="Precio de envío"
        placeholder="200"
        {...register('shippingPrice')}
        error={errors.shippingPrice?.message as string}
        prefix={'$'}
        type="number"
      />
      <Controller
        name="locationBasedShipping"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Switch
            label="Envío basado en la ubicación"
            className="col-span-full"
            value={value}
            checked={value}
            onChange={onChange}
          />
        )}
      />

      {fields.map((item, index) => (
        <div key={item.id} className="col-span-full flex gap-4 xl:gap-7">
          <Input
            label="Nombre del lugar"
            placeholder="Nombre del lugar"
            className="flex-grow"
            {...register(`locationShipping.${index}.name`)}
          />
          <Input
            label="Costo de envío"
            placeholder="200"
            className="flex-grow"
            {...register(`locationShipping.${index}.value`)}
          />
          {fields.length > 1 && (
            <ActionIcon
              onClick={() => remove(index)}
              variant="flat"
              className="mt-7 shrink-0"
            >
              <TrashIcon className="h-4 w-4" />
            </ActionIcon>
          )}
        </div>
      ))}
      <Button
        onClick={addCustomField}
        variant="outline"
        className="col-span-full ml-auto w-auto"
      >
        <PiPlusBold className="me-2 h-4 w-4" strokeWidth={2} /> Add Item
      </Button>
    </FormGroup>
  );
}
