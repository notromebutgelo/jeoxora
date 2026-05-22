import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Generate reviewer endpoint scaffolded." },
    { status: 501 },
  );
}
