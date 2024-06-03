"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useClerk } from "@clerk/clerk-react";

import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";

const AuthButton = () => {
  const clerk = useClerk();

  return (
    <div className="flex items-center">
      <Unauthenticated>
        <Button onClick={() => clerk.openSignIn()}>Ingresa</Button>
      </Unauthenticated>

      <Authenticated>
        <UserButton />
      </Authenticated>
    </div>
  );
};

export default AuthButton;
