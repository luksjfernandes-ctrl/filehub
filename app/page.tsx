import Image from "next/image";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUser } from "@/app/actions/user";
import LandingPage from "@/app/components/LandingPage";

export default async function Home() {
  // Check if user is authenticated with Clerk
  const user = await currentUser();

  if (!user) {
    // No Clerk user - render landing page
    return <LandingPage />;
  }

  // User is authenticated - fetch database user
  const dbUser = await getUser(user.id);

  if (!dbUser) {
    // Database user not found - redirect to sign up flow
    redirect("/sign-up");
  }

  // Check if user is onboarded
  if (dbUser.onboarded) {
    // User is onboarded - redirect to main app
    redirect("/main");
  } else {
    // User is not onboarded - redirect to onboarding
    redirect("/onboarding");
  }
}