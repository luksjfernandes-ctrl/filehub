import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignIn } from "@clerk/nextjs";
import AuthSidebar from "@/app/components/AuthSidebar";

export default async function SignInPage() {
  // Check if user is already authenticated
  const user = await currentUser();

  if (user) {
    // User is already signed in, redirect to home
    redirect("/");
  }

  return (
    <div className="w-full h-full bg-white flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 max-w-6xl w-full items-center">
        {/* Left Side - Logo and Steps */}
        <AuthSidebar />

        {/* Right Side - Clerk SignIn Component */}
        <div className="md:col-span-7 flex items-center justify-center">
          <SignIn />
        </div>
      </div>
    </div>
  );
}

