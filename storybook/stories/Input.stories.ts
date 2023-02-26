import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../../src";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Base/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Base: Story = {
  args: {
    name: "input-form-name",
    label: "Input",
    hint: "A hint",
    placeholder: "placeholder",
  },
};

export const Addon: Story = {
  args: {
    name: "input-form-name",
    label: "Input",
    addOn: "US +1",
    placeholder: "(000) 000-0000",
  },
};

export const Disabled: Story = {
  args: {
    name: "input-form-name",
    label: "Input",
    defaultChecked: true,
    disabled: true,
    placeholder: "placeholder",
  },
};

export const Required: Story = {
  args: {
    name: "checkbox-form-name",
    label: "Input",
    defaultChecked: false,
    placeholder: "placeholder",
    required: true,
  },
};
