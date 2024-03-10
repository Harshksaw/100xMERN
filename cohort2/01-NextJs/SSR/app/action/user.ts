"use server";

import client from "@/db";
import { NextResponse } from "next/server";

export async function solve(email: string, password: string) {
  try {
    await client.user.create({
      data: {
        email: email,
        password: password,
      },
    });
    return true;
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
