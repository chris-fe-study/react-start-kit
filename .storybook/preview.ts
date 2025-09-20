import type { Preview } from "@storybook/react-vite";
import { initialize, mswLoader } from "msw-storybook-addon";
import { withQueryProvider } from "@/shared/ui";
import { mockHandlers } from "./mock-handlers";
import "../src/index.css";

initialize({
  onUnhandledRequest: "bypass",
  // 서버가 구동됐을 때 mockServiceWorker.js 파일이 위치하는 경로
  serviceWorker: {
    url: "./mockServiceWorker.js",
  },
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    msw: {
      handlers: mockHandlers,
    },
  },
  loaders: [mswLoader],
  decorators: [withQueryProvider],
};

export default preview;
