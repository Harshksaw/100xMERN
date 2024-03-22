import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import App from "next/app";
import Appbar from "../components/appbar";

export default async function () {
  const session = await getServerSession();
  return (
    <div>
      <Appbar session={session} />
      User compoent
      {JSON.stringify(session)}
    </div>
  );
}
