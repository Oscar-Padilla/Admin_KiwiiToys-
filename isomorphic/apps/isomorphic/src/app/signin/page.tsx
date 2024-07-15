import SignInForm from '@/app/signin/sign-in-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import Image from 'next/image';
import UnderlineShape from '@components/shape/underline';
import { metaObject } from '@/config/site.config';

/*
export const metadata = {
  ...metaObject('Sign In'),
};
*/

export default function SignIn() {
  return (
    <AuthWrapperOne
      title={
        <>
          Hola! Por favor,{' '}
          <span className="relative inline-block">
            inicia sesión para
            <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-24 text-blue md:w-28 xl:-bottom-1.5 xl:w-36" />
          </span>{' '}
          continuar.
        </>
      }
      description="Inicia sesión para que accedas al administrador de KiwiiToys."
      pageImage={
        <div className="relative mx-auto aspect-[1/1] w-[250px] xl:w-[310px] 2xl:w-[410px]">
          <Image
            src={
              '/logo/kiwiilogo.png'
            }
            alt="Sign Up Thumbnail"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
      }
    >
      <SignInForm />
    </AuthWrapperOne>
  );
}
