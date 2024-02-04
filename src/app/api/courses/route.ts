import { db } from "@/db";
import { courses } from "@/db/schema/courses";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await db.select().from(courses).all();
  console.log(data);
  return NextResponse.json(data);
}
