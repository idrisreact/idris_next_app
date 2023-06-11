"use client";
import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { Button } from "idvor-components";

const SignIn = () => {
  const { data: session } = useSession();
  return (
    <>
      <div>{!session && <Button onClick={() => signIn()}>Sign in</Button>}</div>

      {session && (
        <>
          <div>{<Button onClick={() => signOut()}>Sign out</Button>}</div>
          <div>
            <p>Welcome {session?.user?.name} </p>
          </div>
        </>
      )}
    </>
  );
};

export default SignIn;
