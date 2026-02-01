import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  _request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ cartId: string }>;
  },
) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    if (!backendUrl) {
      return NextResponse.json(
        {
          message: "Missing NEXT_PUBLIC_BACKEND_URL in environment variables.",
        },
        { status: 500 },
      );
    }

    const { cartId } = await params;

    if (!cartId) {
      return NextResponse.json(
        { message: "Missing parameters in path." },
        { status: 400 },
      );
    }

    const response = await fetch(`${backendUrl}/icy-tales-cart/${cartId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { message: "Internal error while updating quantity." },
      { status: 500 },
    );
  }
}
