"use client";

import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Button, Input } from "rizzui";
import { Form } from "@ui/form";
import {
  NewsLetterFormSchema,
  newsLetterFormSchema,
} from "@/validators/newsletter.schema";
import { useTranslation } from "@/app/i18n/client";

const initialValues = {
  email: "",
};

export default function NewsLetterForm({ lang }: { lang?: string }) {
  const [reset, setReset] = useState({});
  const { t } = useTranslation(lang!, "form");

  const onSubmit: SubmitHandler<NewsLetterFormSchema> = (data) => {
    console.log(data);
    setReset(initialValues);
  };
  return (
    <>
      <Form<NewsLetterFormSchema>
        validationSchema={newsLetterFormSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="relative">
            <Input
              placeholder={t("form-email-placeholder")}
              inputClassName="w-full text-base pr-36"
              size="xl"
              rounded="pill"
              {...register("email")}
              error={errors.email?.message}
            />
            <Button
              type="submit"
              className="absolute right-1 top-1 text-base font-medium"
              size="lg"
              rounded="pill"
            >
              {t("form-subscribe")}
            </Button>
          </div>
        )}
      </Form>
      <p className="mt-3 text-center text-sm font-medium text-gray-500 @2xl:mt-4 @2xl:text-base">
        {t("form-email-is-safe")}
      </p>
    </>
  );
}
