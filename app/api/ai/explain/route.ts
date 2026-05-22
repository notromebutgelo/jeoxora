import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Explain endpoint scaffolded." },
    { status: 501 },
  );
}
