'use client';

import { useAtomValue } from 'jotai';
import { z } from 'zod';
import { LuReply } from 'react-icons/lu';
import { useState, useEffect } from 'react';
import { PiCaretDownBold } from 'react-icons/pi';
import {
  Title,
  Text,
  Badge,
  Button,
  Avatar,
  Empty,
  Select,
  Loader,
} from 'rizzui';
import cn from '@utils/class-names';
import {
  dataAtom,
  messageIdAtom,
} from '@/app/shared/support/inbox/message-list';
import { SubmitHandler, Controller } from 'react-hook-form';
import { Form } from '@ui/form';
import ActionDropdown from '@/app/shared/support/inbox/action-dropdown';
import MessageBody from '@/app/shared/support/inbox/message-body';
import SimpleBar from '@ui/simplebar';
import { useElementSize } from '@hooks/use-element-size';
import { useMedia } from '@hooks/use-media';
import dynamic from 'next/dynamic';
import { SupportType, supportTypes } from '@/data/support-inbox';

const QuillEditor = dynamic(() => import('@ui/quill-editor'), {
  ssr: false,
});

const FormSchema = z.object({
  message: z.string({ required_error: 'Invalid email address' }),
});

type FormValues = {
  message: string;
};

const priorityOptions = [
  {
    value: 'Low',
    label: 'Low',
  },
  {
    value: 'Medium',
    label: 'Medium',
  },
  {
    value: 'High',
    label: 'High',
  },
];

const agentsOptions = [
  {
    value: 1,
    label: 'Oscar',
    avatar:
      'data:image/jpeg;base64,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',
  },
  {
    value: 2,
    label: 'Kiwii',
    avatar:
      'data:image/jpeg;base64,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',
  },
  {
    value: 3,
    label: 'Eve',
    avatar:
      'https://static.wikia.nocookie.net/doblaje/images/b/b6/Popis.png/revision/latest?cb=20140420053622&path-prefix=es',
  },
  {
    value: 4,
    label: 'Leon',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbl-4qXfRx4i7_3RvKK3lzg1XJ3TL5lLwtjg&s',
  },
  {
    value: 5,
    label: 'Krizz',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Pitbull_6%2C_2012.jpg/800px-Pitbull_6%2C_2012.jpg',
  },
];

const contactStatuses = [
  {
    value: 'Nuevo',
    label: 'Nuevo',
  },
  {
    value: 'Waiting on contact',
    label: 'Esperando un Contacto',
  },
  {
    value: 'Waiting on us',
    label: 'Esperandonos',
  },
  {
    value: 'Closed',
    label: 'Cerrado',
  },
];

const supportOptionTypes = [
  {
    value: supportTypes.Chat,
    label: supportTypes.Chat,
  },
  {
    value: supportTypes.Email,
    label: supportTypes.Email,
  },
];

export default function MessageDetails({ className }: { className?: string }) {
  const data = useAtomValue(dataAtom);
  const [agent, setAgent] = useState();
  const [priority, setPriority] = useState('');
  const messageId = useAtomValue(messageIdAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [supportType, setSupportType] = useState<SupportType>();
  const [contactStatus, setContactStatus] = useState(contactStatuses[0].value);
  const [ref, { width }] = useElementSize();
  const isWide = useMedia('(min-width: 1280px) and (max-width: 1440px)', false);

  function formWidth() {
    if (isWide) return width - 64;
    return width - 44;
  }

  const message = data.find((m) => m.id === messageId) ?? data[0];
  const initials = `${message?.firstName.charAt(0)}${message?.lastName.charAt(
    0
  )}`;

  // set default selected message when render complete
  useEffect(() => {
    // setFormWidth(width);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 500 milliseconds
    return () => clearTimeout(timer);
  }, []);

  // set active message id
  useEffect(() => {
    setSupportType(message?.supportType);
  }, [message]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return (
      <div
        className={cn(
          '!grid h-full min-h-[128px] flex-grow place-content-center items-center justify-center',
          className
        )}
      >
        <Loader variant="spinner" size="xl" />
      </div>
    );
  }

  if (!message) {
    return (
      <div
        className={cn(
          '!grid h-full min-h-[128px] flex-grow place-content-center items-center justify-center',
          className
        )}
      >
        <Empty
          text="No conversations selected"
          textClassName="mt-4 text-base text-gray-500"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative pt-6 lg:rounded-lg lg:border lg:border-muted lg:px-4 lg:py-7 xl:px-5 xl:py-5 2xl:pb-7 2xl:pt-6',
        className
      )}
    >
      <div>
        <header className="flex flex-col justify-between gap-4 border-b border-muted pb-5 3xl:flex-row 3xl:items-center">
          <div className="flex flex-col items-start justify-between gap-3 xs:flex-row xs:items-center xs:gap-6 lg:justify-normal">
            <Title as="h4" className="font-semibold">
              {message?.title}
            </Title>
            <Badge variant="outline" color="danger" size="sm">
              Problemas
            </Badge>
          </div>

          <div className="jus flex flex-wrap items-center gap-2.5 sm:justify-end">
            <Select
              value={agent}
              variant="text"
              options={agentsOptions}
              onChange={setAgent}
              placeholder="Seleccionar Empleado"
              placement="bottom-end"
              displayValue={(value: AvatarOptionTypes) =>
                renderAvatarOptionDisplayValue(value)
              }
              getOptionDisplayValue={(option) =>
                renderAvatarOptionDisplayValue(option)
              }
              dropdownClassName="!w-60 p-2 gap-1 grid !z-0"
              suffix={<PiCaretDownBold className="h-3 w-3" />}
              className={'w-auto'}
            />
            <Select
              variant="text"
              value={contactStatus}
              options={contactStatuses}
              onChange={setContactStatus}
              placeholder="Seleccionar Estado"
              placement="bottom-end"
              selectClassName="text-xs sm:text-sm"
              optionClassName="text-xs sm:text-sm"
              dropdownClassName="!w-48 p-2 gap-1 grid !z-0"
              suffix={<PiCaretDownBold className="h-3 w-3" />}
              className={'w-auto'}
            />
            <Select
              variant="text"
              value={priority}
              onChange={setPriority}
              options={priorityOptions}
              placeholder="Fijar prioridad"
              placement="bottom-end"
              dropdownClassName="!w-32 p-2 gap-1 grid !z-0"
              getOptionValue={(option) => option.value}
              getOptionDisplayValue={(option) =>
                renderPriorityOptionDisplayValue(option.value as string)
              }
              displayValue={(selected: string) =>
                renderPriorityOptionDisplayValue(selected)
              }
              suffix={<PiCaretDownBold className="h-3 w-3" />}
              className={'w-auto'}
            />
            <ActionDropdown className="ml-auto sm:ml-[unset]" />
          </div>
        </header>

        <div className="[&_.simplebar-content]:grid [&_.simplebar-content]:gap-8 [&_.simplebar-content]:py-5">
          <SimpleBar className="@3xl:max-h-[calc(100dvh-34rem)] @4xl:max-h-[calc(100dvh-32rem)] @7xl:max-h-[calc(100dvh-31rem)]">
            <MessageBody />
            <MessageBody />
            <MessageBody />
            <MessageBody />
          </SimpleBar>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-[32px_1fr] items-start gap-3 rounded-b-lg bg-white @3xl:pt-4 lg:gap-4 lg:pl-0 xl:grid-cols-[48px_1fr] dark:bg-transparent dark:lg:pt-0"
        >
          <figure className="dark:mt-4">
            <Avatar
              name="John Doe"
              initials={initials}
              src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-14.png"
              className="!h-8 !w-8 bg-[#70C5E0] font-medium text-white xl:!h-12 xl:!w-12"
            />
          </figure>
          <div
            className="relative rounded-lg border border-muted bg-gray-50 p-4 2xl:p-5"
            style={{
              maxWidth: formWidth(),
            }}
          >
            <Form<FormValues> onSubmit={onSubmit} validationSchema={FormSchema}>
              {({ control, watch, formState: { errors } }) => {
                return (
                  <>
                    <div className="relative mb-2.5 flex items-center justify-between">
                      <Select
                        size="sm"
                        variant="outline"
                        value={supportType}
                        options={supportOptionTypes}
                        onChange={setSupportType}
                        getOptionValue={(option) => option.value}
                        displayValue={(selected: string) => selected}
                        suffix={<PiCaretDownBold className="ml-1 h-3 w-3" />}
                        placement="bottom-start"
                        dropdownClassName="p-2 gap-1 grid !w-20 !z-0"
                        selectClassName="bg-gray-0 dark:bg-gray-50"
                        className={'w-auto'}
                      />
                      <Button
                        type="submit"
                        className="dark:bg-gray-200 dark:text-white"
                      >
                        Enviar
                      </Button>
                    </div>
                    {supportType === supportTypes.Email && (
                      <div className="mb-2.5 flex items-center gap-2">
                        <LuReply />
                        <span className="rounded border border-muted px-1.5 py-1 lowercase">
                          {message?.email}
                        </span>
                      </div>
                    )}

                    <Controller
                      control={control}
                      name="message"
                      render={({ field: { onChange, value } }) => (
                        <QuillEditor
                          value={value}
                          onChange={onChange}
                          className="rounded-md bg-gray-0 dark:bg-gray-50 [&>.ql-container_.ql-editor]:min-h-[100px]"
                        />
                      )}
                    />
                  </>
                );
              }}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DotSeparator({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
      {...props}
    >
      <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
    </svg>
  );
}

type AvatarOptionTypes = {
  avatar: string;
  label: string;
  [key: string]: any;
};

function renderAvatarOptionDisplayValue(option: AvatarOptionTypes) {
  return (
    <div className="flex items-center gap-2">
      <Avatar
        src={option.avatar}
        name={option.label}
        className="!h-6 !w-6 rounded-full"
      />
      <span className="whitespace-nowrap text-xs sm:text-sm">
        {option.label}
      </span>
    </div>
  );
}

function renderPriorityOptionDisplayValue(value: string) {
  switch (value) {
    case 'Medium':
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium capitalize text-orange-dark">
            {value}
          </Text>
        </div>
      );
    case 'Low':
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium capitalize text-green-dark">
            {value}
          </Text>
        </div>
      );
    case 'High':
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium capitalize text-red-dark">
            {value}
          </Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium capitalize text-gray-600">
            {value}
          </Text>
        </div>
      );
  }
}
