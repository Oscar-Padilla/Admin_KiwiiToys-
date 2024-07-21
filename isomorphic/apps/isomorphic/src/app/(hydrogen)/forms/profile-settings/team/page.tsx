import { metaObject } from '@/config/site.config';
import TeamSettingsView from '@/app/shared/account-settings/team-settings';

export const metadata = {
  ...metaObject('Equipo'),
};

export default function ProfileSettingsFormPage() {
  return <TeamSettingsView />;
}
