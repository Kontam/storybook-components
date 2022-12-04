import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TodoItem } from './';

export default {
  title: 'TodoItem',
  component: TodoItem,
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args) => <TodoItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	todo: {
		id: "1",
		name: "name",
		done: false,
	}
};
