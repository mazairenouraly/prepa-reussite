import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Clock, User, Tag, Search,
  ArrowRight, BookOpen, TrendingUp,
  Users, Heart, MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import { client } from '@/lib/sanity';
import BlogClientComponent from './BlogClientComponent';

interface BlogPost {
  _id: string;
  title: string;
  excerpt?: string;
  category?: string;
  publishedAt: string;
  readTime?: number;
  author?: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  featured?: boolean;
  tags?: string[];
}

// Fonction pour récupérer les articles côté serveur
async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const postsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      excerpt,
      category,
      publishedAt,
      readTime,
      author,
      mainImage {
        asset-> {
          url
        }
      },
      slug,
      featured,
      tags[]
    }`;

    const posts = await client.fetch(postsQuery);
    return posts || [];
  } catch (error) {
    console.error('Erreur lors du chargement des articles:', error);
    return [];
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient-pages">
        <div className="hero-content">
          <div className="text-center text-white">
            <AnimatedSection direction="up">
              <h1 className="hero-title-pages mb-8">Notre Blog</h1>
              <p className="hero-subtitle-pages max-w-4xl mx-auto">
                Conseils, témoignages et actualités pour réussir vos études de santé
                et préparer votre carrière médicale.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Composant client pour l'interactivité */}
      <BlogClientComponent initialPosts={blogPosts} />

      {/* Newsletter Section */}
      <section className="py-16 bg-prepa-light">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-prepa-blue mb-4">
                Restez informé
              </h3>
              <p className="text-prepa-gray mb-8">
                Recevez nos meilleurs conseils et nos actualités pour réussir vos études de santé
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-center">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="form-input flex-1"
                />
                <Button className="btn-primary text-white">
                  S'inscrire
                </Button>
              </div>

              <p className="text-s text-prepa-gray mt-4">
                En vous inscrivant, vous acceptez notre{' '}
                <Link href="/politique-confidentialite" className="text-prepa-blue hover:underline">
                  politique de confidentialité
                </Link>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}