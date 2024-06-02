"use client";
import Loading from "@/components/auth/loading";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

import { esES } from "@clerk/localizations";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const clerkPublicHasableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const convex = new ConvexReactClient(convexUrl);

interface Props {
  children: React.ReactNode;
}
const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider publishableKey={clerkPublicHasableKey} localization={esES}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Unauthenticated>{children}</Unauthenticated>
        <Authenticated>{children}</Authenticated>

        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
