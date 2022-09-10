import { worker } from "@/mocks/browser";

export default defineNuxtPlugin(async () => {
  if (process.env.DEBUG) {
    await worker.start({
      onUnhandledRequest: "bypass",
    });
  }
});
