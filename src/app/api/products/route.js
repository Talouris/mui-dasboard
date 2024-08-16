import { NextResponse } from "next/server";
import { dataBase } from "./Data";

export async function GET() {
    return NextResponse.json(dataBase)
}