import { useFormContext } from 'react-hook-form';
import UploadZone from '@ui/file-upload/upload-zone';
import FormGroup from '@/app/shared/form-group';
import cn from '@utils/class-names';

interface ProductMediaProps {
  className?: string;
}

export default function ProductMedia({ className }: ProductMediaProps) {
  const { getValues, setValue } = useFormContext();

  return (
    <FormGroup
      title="Subir nuevas imágenes de productos"
      description="Sube la galería de imágenes de tu producto aquí"
      className={cn(className)}
    >
      <UploadZone
        className="col-span-full"
        name="productImages"
        getValues={getValues}
        setValue={setValue}
      />
    </FormGroup>
  );
}
