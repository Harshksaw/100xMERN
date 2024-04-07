import { NextRequest } from "next/server";

let requestCount = 0;
export function middleware(req: NextRequest) {
  requestCount++;

  NextResponse.next;
}
export const config = {
    matcher: '/api/user'
}