import Image from 'next/image';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from '@ui/datepicker';
import PencilIcon from '@components/icons/pencil';
import { Text, Title, Select, ActionIcon } from 'rizzui';
import cn from '@utils/class-names';

interface CustomerInfoProps {
  className?: string;
}

export default function CustomerInfo({ className }: CustomerInfoProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={cn(
        'pb-7 pt-10 @container @5xl:col-span-4 @5xl:py-0 @6xl:col-span-3',
        className
      )}
    >
      <div className="rounded-xl border border-gray-300 p-5 @sm:p-6 @md:p-7">
        <div className="relative border-b border-gray-300 pb-7">
          <Title as="h6" className="mb-6">
            Customer Info
          </Title>
          <ActionIcon
            className="absolute -top-1.5 end-0 z-10 text-gray-600 dark:text-gray-800"
            rounded="full"
            variant="flat"
            size="sm"
          >
            <PencilIcon className="h-3.5 w-3.5" />
          </ActionIcon>
          <div className="flex">
            <div className="relative aspect-square h-16 w-16 shrink-0 overflow-hidden rounded-full @5xl:h-20 @5xl:w-20">
              <Image
                fill
                src={
                  '/logo/mencho.png'
                }
                alt="avatar"
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
              />
            </div>
            <div className="ps-4 @5xl:ps-6">
              <Title as="h6" className="mb-2.5 font-semibold">
                José Alexis Silva Guerrero
              </Title>
              <Text as="p" className="mb-2 break-all last:mb-0">
                axgro@gmail.com
              </Text>
              <Text as="p" className="mb-2 last:mb-0">
                (496) 118-9627
              </Text>
            </div>
          </div>
        </div>
        <div className="relative mb-7 border-b border-gray-300 py-7">
          <Title as="h6">Detalles de Órden</Title>
          <ActionIcon
            className="absolute end-0 top-5 z-10 text-gray-600 dark:text-gray-800"
            rounded="full"
            variant="flat"
            size="sm"
          >
            <PencilIcon className="h-3.5 w-3.5" />
          </ActionIcon>
          <Text
            as="p"
            className="mt-3 flex flex-col font-semibold text-gray-700"
          >
            <span className="mb-2 font-normal">ID</span> COMP1502
          </Text>
        </div>
        <div className="space-y-4 @lg:space-y-5 @2xl:space-y-6">
          <Controller
            name="paymentMethod"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                dropdownClassName="!z-0"
                options={paymentOptions}
                value={value}
                onChange={onChange}
                label="Método de Pago"
                error={errors?.paymentMethod?.message as string}
                getOptionValue={(option) => option.label}
              />
            )}
          />
          <Controller
            name="shippingMethod"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                dropdownClassName="!z-0"
                options={shippingOption}
                value={value}
                onChange={onChange}
                label="Método de Envío"
                error={errors?.shippingMethod?.message as string}
                getOptionValue={(option) => option.label}
              />
            )}
          />
          <Controller
            name="orderDate"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <DatePicker
                inputProps={{ label: 'Fecha de Órden' }}
                placeholderText="Seleccionar Fecha"
                dateFormat="dd/MM/yyyy"
                onChange={onChange}
                onBlur={onBlur}
                wrapperClassName="w-full"
                //@ts-ignore
                selected={value}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}

// Payment method option
const paymentOptions = [
  {
    value: 'paypal',
    label: 'PayPal',
  },

  {
    value: 'visa',
    label: 'Visa',
  },
  {
    value: 'mastercard',
    label: 'Mastercard',
  },
];

// shipping option
const shippingOption = [
  {
    value: 'ups',
    label: 'Correos de México',
  },
  {
    value: 'usps',
    label: 'DHL',
  },
  {
    value: 'fedex',
    label: 'FedEx',
  },
];
