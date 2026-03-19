"use server";

import prisma from "@/lib/prisma";

export async function getUser(clerkUserId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkUserId,
      },
    });

    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
