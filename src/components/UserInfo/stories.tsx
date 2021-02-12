import { Story, Meta } from '@storybook/react/types-6-0';
import UserInfo from '.';

export default {
  title: 'UserInfo',
  component: UserInfo,
} as Meta;

export const Default: Story = () => <UserInfo />;
Default.args = {};
