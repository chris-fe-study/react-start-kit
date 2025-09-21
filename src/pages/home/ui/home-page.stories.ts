import type { Meta, StoryObj } from "@storybook/react-vite";

import { HomePage } from "./home-page";
import { error404Handler } from "@/apis/home/api";

const meta = {
  title: "Pages/Home",
  component: HomePage,
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const Error404: Story = {
  parameters: {
    msw: {
      handlers: [error404Handler],
    },
  },
  args: {},
};
