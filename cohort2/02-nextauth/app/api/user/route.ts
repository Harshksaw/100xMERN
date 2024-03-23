import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export function GET({
    const session = await getServerSession();
    return NextResponse.json({ session });
})