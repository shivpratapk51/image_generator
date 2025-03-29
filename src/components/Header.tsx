"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { BiLoaderCircle } from "react-icons/bi";

export const Header = () => {
  const [intialLoading, setIntialLoading] = useState<Boolean>(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") {
      setIntialLoading(false);
    }
  }, [status, session]);

  return (
    <div className="w-full h-[60px] bg-black border-b border-white/60 p-3 flex justify-between items-center fixed top-0">
      <Link href="/">
        <h2 className="font-bold text-xl">StableMax</h2>
      </Link>
      {intialLoading && status === "loading" ? (
        <BiLoaderCircle className="animate-spin" />
      ) : !session ? (
        <div className="__menu">
          <Button onClick={() => signIn("google")}>Login</Button>
        </div>
      ) : (
        <Avatar>
          <AvatarImage src={session.user?.image || ""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};
