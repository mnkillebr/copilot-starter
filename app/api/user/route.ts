import { readCurrentUserUsersMeGet } from "@/app/openapi-client";
import { getErrorMessage } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value
  try {
    const { data, error } = await readCurrentUserUsersMeGet({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (error) {
      return NextResponse.json({ server_validation_error: getErrorMessage(error) }, { status: 401 });
    }
    return NextResponse.json(data);
  } catch (err) {
    console.error("Fetch user error:", err);
    return NextResponse.json({
      server_error: "An unexpected error occurred. Please try again later.",
    }, { status: 500 });
  }
}
