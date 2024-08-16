import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ 
        Title: 'API Products of CRISPS',
        Api: '/api',
        Products: '/api/products',
        Product: '/api/products/4',
    })
}