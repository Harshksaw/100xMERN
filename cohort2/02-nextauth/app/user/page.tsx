import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import App from "next/app";
import Appbar from "../components/appbar";
import { NEXT_AUTH } from "../lib/auth";

export async function GET () {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <div>
      <Appbar session={session} />
      User compoent
      {JSON.stringify(session)}
    </div>
  );
}
