export const supportStatuses = {
  Open: 'Open',
  Closed: 'Closed',
} as const;

export const supportTypes = {
  Chat: 'Chat',
  Email: 'Email',
} as const;

export const supportPriorities = {
  Low: 'Low',
  Medium: 'Medium',
  High: 'High',
} as const;

export type SupportType = keyof typeof supportTypes;
export type SupportStatusType = keyof typeof supportStatuses;
export type SupportPriorityType = keyof typeof supportPriorities;

export type MessageType = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  company: string;
  selected: boolean;
  markedAsRead: boolean;
  summary: string;
  description: string;
  date: Date;
  hasAttachments: boolean;
  category: string;
  supportType: SupportType;
  status: SupportStatusType;
  priority: SupportPriorityType;
  attachments: {
    id: string;
    type: string;
    name: string;
    size: string;
    thumbnail: string;
    preview: string;
  }[];
};

export const messages = [
  

  {
    id: '1919515230',
    selected: false,
    title: 'Figuras Defectuosas',
    firstName: 'Valentín',
    lastName: 'Elizalde',
    email: 'gallodeoro2009@gmail.com',
    avatar:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJdUemAUxu09HIQNL7j1o1XNMVXIX0X7mtpvmAPAD0LHyO98HG',
    company: 'Valentín',
    markedAsRead: true,
    summary:
      'Las Figuras vienen con varios defectos',
    description:
      'Las figuras que me llegaron tenian varios problemas a la hora de articular.',
    date: new Date('2022-11-15T06:47:52.056Z'),
    category: 'unassigned',
    hasAttachments: false,
    status: supportStatuses.Open,
    supportType: supportTypes.Email,
    priority: supportPriorities.Low,
    attachments: [
      {
        id: '24238',
        type: 'pdf',
        name: 'Fotos.pdf',
        size: '7.9mb',
        thumbnail: 'https://picsum.photos/seed/OCq7xh8OM3/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=1799404755353600',
      },
    ],
  },
  
  

  
  
];
