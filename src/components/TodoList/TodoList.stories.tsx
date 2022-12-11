import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TodoList } from "./";

export default {
  title: "TodoList",
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => (
  <TodoList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  todos: [
    {
      id: "1",
      name: "name1",
      done: false,
    },
    {
      id: "2",
      name: "name2",
      done: false,
    },
  ],
};

// TODOが0件の時の表示確認
export const Empty = Template.bind({});
Empty.args = {
  todos: [],
};
