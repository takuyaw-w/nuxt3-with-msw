import { worker } from "@/mocks/browser";

export default async (context, inject) => {
  if (context.isDev) {
    await worker.start({
      onUnhandledRequest: "bypass",
    });
  }
};
