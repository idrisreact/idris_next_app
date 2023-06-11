"use client";
import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { Button } from "../../components/Button/Button";

const SignIn = () => {
  const { data: session } = useSession();
  return (
    <>
      <div>
        {!session && (
          <Button isPrimary onClick={() => signIn()}>
            Sign in
          </Button>
        )}
      </div>

      {session && (
        <div className="flex align-middle justify-center">
          <Button isPrimary onClick={() => signOut()}>
            Sign out
          </Button>

          <p className="self-center px-2">Welcome {session?.user?.name} </p>
        </div>
      )}
    </>
  );
};

export default SignIn;
