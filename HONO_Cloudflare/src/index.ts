import { Hono } from "hono";

const app = new Hono();

app.post("/", async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.header("param"));
  return c.text("Hello Hono!");
});

app.post("/user", (c) => {
  return c.json({
    name: "hono",
  });
});

export default app;
