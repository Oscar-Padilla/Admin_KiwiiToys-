import FormGroup from '@/app/shared/form-group';
import cn from '@utils/class-names';
import ProductAvailability from '@/app/shared/ecommerce/product/create-edit/product-availability';
import InventoryTracing from '@/app/shared/ecommerce/product/create-edit/inventory-tracking';
import ProductPricing from '@/app/shared/ecommerce/product/create-edit/product-pricing';

interface PricingInventoryProps {
  className?: string;
}

export default function PricingInventory({ className }: PricingInventoryProps) {
  return (
    <>
      <FormGroup
        title="Precios"
        description="Agregue el precio de su producto aquí"
        className={cn(className)}
      >
        <ProductPricing />
      </FormGroup>
      <FormGroup
        title="Seguimiento de inventario"
        description="Agregue la información de su inventario de productos aquí"
        className={cn(className)}
      >
        <InventoryTracing />
      </FormGroup>
      <FormGroup
        title="Disponibilidad"
        description="Agregue la información de su inventario de productos aquí"
        className={cn(className)}
      >
        <ProductAvailability />
      </FormGroup>
    </>
  );
}
