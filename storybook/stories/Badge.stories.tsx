import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../../src";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Base/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Base: Story = {
  args: {
    children: "Badge",
    outline: true,
  },
};

export const Colors = () => {
  return (
    <div className="space-x-4">
      <Badge>Badge</Badge>
      <Badge color="gray">Badge</Badge>
      <Badge color="blue">Badge</Badge>
      <Badge color="green">Badge</Badge>
      <Badge color="indigo">Badge</Badge>
      <Badge color="pink">Badge</Badge>
      <Badge color="purple">Badge</Badge>
      <Badge color="red">Badge</Badge>
      <Badge color="yellow">Badge</Badge>
    </div>
  );
};

export const Danger: Story = {
  args: {
    children: "Badge",
    danger: true,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Badge",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Badge",
  },
};
