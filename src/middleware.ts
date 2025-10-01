import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Vérifier si l'utilisateur accède à Sanity Studio ou structure
  if (pathname.startsWith('/structure')) {
    // Vérifier que les variables d'environnement sont définies
    const SANITY_USERNAME = process.env.SANITY_USERNAME
    const SANITY_PASSWORD = process.env.SANITY_PASSWORD
    
    if (!SANITY_USERNAME || !SANITY_PASSWORD) {
      console.error('Variables d\'environnement SANITY_USERNAME et SANITY_PASSWORD non définies')
      return new NextResponse('Configuration d\'authentification manquante', { status: 500 })
    }

    // Vérifier l'authentification basique
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader) {
      // Demander l'authentification
      return new NextResponse(null, {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Sanity Studio Access"',
        },
      })
    }

    // Décoder les credentials
    const encodedCredentials = authHeader.split(' ')[1]
    const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8')
    const [username, password] = decodedCredentials.split(':')

    // Vérifier les credentials
    if (username !== SANITY_USERNAME || password !== SANITY_PASSWORD) {
      return new NextResponse(null, {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Sanity Studio Access"',
        },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/structure/:path*',
  ],
} 