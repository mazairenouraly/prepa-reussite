import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { path?: string[] } }
) {
  // Rediriger vers la page Sanity Studio
  const url = new URL(request.url)
  const sanityPath = params.path ? `/${params.path.join('/')}` : ''
  
  return NextResponse.redirect(new URL(`/sanity${sanityPath}`, url.origin))
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path?: string[] } }
) {
  // Rediriger vers la page Sanity Studio
  const url = new URL(request.url)
  const sanityPath = params.path ? `/${params.path.join('/')}` : ''
  
  return NextResponse.redirect(new URL(`/sanity${sanityPath}`, url.origin))
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { path?: string[] } }
) {
  // Rediriger vers la page Sanity Studio
  const url = new URL(request.url)
  const sanityPath = params.path ? `/${params.path.join('/')}` : ''
  
  return NextResponse.redirect(new URL(`/sanity${sanityPath}`, url.origin))
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { path?: string[] } }
) {
  // Rediriger vers la page Sanity Studio
  const url = new URL(request.url)
  const sanityPath = params.path ? `/${params.path.join('/')}` : ''
  
  return NextResponse.redirect(new URL(`/sanity${sanityPath}`, url.origin))
} 