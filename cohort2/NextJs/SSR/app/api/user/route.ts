import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
export async function GET(req: NextRequest) {
  return NextResponse.json({ name: "harsh", email: "harsh@gmail.com" });
}
//indianshahishere:bsRATk1g0xqI@ep-spring-lab-a1v2x7xn.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
export async function POST(req: NextRequest) {
  const body = await req.json();
  await client.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  // You can process the body data here

  return NextResponse.json(body);
}
