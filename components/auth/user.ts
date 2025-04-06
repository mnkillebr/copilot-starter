"use server";
import { readCurrentUserUsersMeGet } from "@/app/openapi-client";
import { getErrorMessage } from "@/lib/utils";
import { cookies } from "next/headers";

export const isLoggedIn = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  return token ? true : false;
};

export const getUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  try {
    const { data, error } = await readCurrentUserUsersMeGet({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (error) {
      return { server_validation_error: getErrorMessage(error) };
    }
    return data;
  } catch (err) {
    console.error("Fetch user error:", err);
    return {
      server_error: "An unexpected error occurred. Please try again later.",
    };
  }
};
