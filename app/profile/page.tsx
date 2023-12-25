/* eslint-disable @next/next/no-img-element */
// async component

import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth/next";

export default async function Profile() {
  const session = await getServerSession(authConfig); // Принимает тот же authConfig

  return (
    <div>
      <h1 className="heading"> Profile of {session?.user?.name} </h1>;
      {session?.user?.image && <img src={session.user.image} alt="" />}
    </div>
  );
}
