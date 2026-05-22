import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Summarize endpoint scaffolded." },
    { status: 501 },
  );
}
