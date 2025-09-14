import { NextRequest, NextResponse } from 'next/server'

const HH_API = 'https://api.hh.ru/vacancies'
const UA = 'HH-Visualizer (contact@example.com)'

export async function GET(req: NextRequest) {
  const hhUrl = new URL(HH_API);
  req.nextUrl.searchParams.forEach((v, k) => hhUrl.searchParams.set(k, v))

  const res = await fetch(hhUrl, { 
    headers: { 'User-Agent': UA } 
  })
  const data = await res.json()
  return NextResponse.json(data, { status: res.status })
}
