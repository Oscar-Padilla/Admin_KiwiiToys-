import FormGroup from '@/app/shared/form-group';
import { Checkbox, Input } from 'rizzui';
import cn from '@utils/class-names';
import { DatePicker } from '@ui/datepicker';
import { Controller, useFormContext } from 'react-hook-form';

export default function DeliveryEvent({ className }: { className?: string }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <FormGroup
      title="Fecha de entrega/ Evento"
      description="Agregue la fecha de entrega o fecha de evento aquí"
      className={cn(className)}
    >
      <Controller
        name="isPurchaseSpecifyDate"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Checkbox
            value={value}
            checked={value}
            onChange={onChange}
            label="Sí, los clientes deben especificar una fecha para comprar este producto."
            className="col-span-full"
          />
        )}
      />
      <Input
        label="Nombre del campo de fecha"
        placeholder="Nombre del campo de fecha"
        className="col-span-full"
        {...register('dateFieldName')}
        error={errors.dateFieldName?.message as string}
      />
      <Controller
        name="isLimitDate"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Checkbox
            value={value}
            checked={value}
            onChange={onChange}
            label="Quiero limitar el rango de fechas."
            className="col-span-full"
          />
        )}
      />
      <Controller
        name="availableDate"
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <DatePicker
            inputProps={{ label: 'Fecha disponible' }}
            placeholderText="Seleccione fecha"
            dateFormat="dd/MM/yyyy"
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
          />
        )}
      />
      <Controller
        name="endDate"
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <DatePicker
            inputProps={{ label: 'Fecha final' }}
            placeholderText="Seleccione fecha"
            dateFormat="dd/MM/yyyy"
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
          />
        )}
      />
    </FormGroup>
  );
}
