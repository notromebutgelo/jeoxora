import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Focus endpoint scaffolded." },
    { status: 501 },
  );
}

export async function POST() {
  return NextResponse.json(
    { message: "Focus endpoint scaffolded." },
    { status: 501 },
  );
}
