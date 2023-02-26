import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../../src";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Base/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Checked: Story = {
  args: {
    name: "checkbox-form-name",
    label: "Checkbox",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    name: "checkbox-form-name",
    label: "Checkbox",
    defaultChecked: true,
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    name: "checkbox-form-name",
    label: "Checkbox",
    defaultChecked: false,
    required: true,
  },
};
