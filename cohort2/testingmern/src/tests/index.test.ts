// import { describe, expect, test, it } from "@jest/globals";
// import request from "supertest";
// import { app } from "../index";

// describe("POST /sum", () => {
//   it("should return the sum of two numbers", async () => {
//     const res = await request(app).post("/sum").send({
//       a: 1,
//       b: 2,
//     });
//     expect(res.statusCode).toBe(200);
//     expect(res.body.answer).toBe(3);
//   });

//   it("should return the sum of two negative numbers", async () => {
//     const res = await request(app).post("/sum").send({
//       a: -1,
//       b: -2,
//     });
//     expect(res.statusCode).toBe(200);
//     expect(res.body.answer).toBe(-3);
//   });

//   it("should return the sum of two zero number", async () => {
//     const res = await request(app).post("/sum").send({
//       a: 0,
//       b: 0,
//     });
//     expect(res.statusCode).toBe(200);
//     expect(res.body.answer).toBe(0);
//   });
// });

import express from "express";
import { z } from "zod";
import { prismaClient } from "../db";

export const app = express();
app.use(express.json());

const sumInput = z.object({
  a: z.number(),
  b: z.number(),
});

app.post("/sum", async (req, res) => {
  const parsedResponse = sumInput.safeParse(req.body);

  if (!parsedResponse.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const answer = parsedResponse.data.a + parsedResponse.data.b;

  await prismaClient.sum.create({
    data: {
      a: parsedResponse.data.a,
      b: parsedResponse.data.b,
      result: answer,
    },
  });

  res.json({
    answer,
  });
});

app.get("/sum", (req, res) => {
  const parsedResponse = sumInput.safeParse({
    a: Number(req.headers["a"]),
    b: Number(req.headers["b"]),
  });

  if (!parsedResponse.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const answer = parsedResponse.data.a + parsedResponse.data.b;

  res.json({
    answer,
  });
});
