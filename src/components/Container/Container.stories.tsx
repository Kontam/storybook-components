import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "./";

export default {
  title: "Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	children: <h2>Children</h2>
};
