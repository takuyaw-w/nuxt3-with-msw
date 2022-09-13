import { rest } from "msw";

export const handlers = [
  rest.get("/users", (_, res, ctx) => {
    const users = [...Array(50)].map((_, i) => ({
      id: ++i,
      name: `user no.${i}`,
    }));
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        users,
      })
    );
  }),
];
