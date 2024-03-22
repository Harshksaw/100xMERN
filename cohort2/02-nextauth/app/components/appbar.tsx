"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Appbar = () => {
  const session = useSession();

  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/api/auth/signin")}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>

      {JSON.stringify(session)}
    </div>
  );
};
export default Appbar;
