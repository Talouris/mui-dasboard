import { NextResponse } from "next/server";
import { dataBase } from "../Data";

export async function GET( request, context) {
    const { params } = context;
    const prod = dataBase.filter((item) => params.product === item.id.toString())

    return NextResponse.json(prod)
}