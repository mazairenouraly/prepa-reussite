import { client } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Clock, User, Share2, BookOpen,
  ArrowLeft, ChevronRight, Heart, MessageCircle,
  CheckCircle, AlertTriangle, Lightbulb, Target
} from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateStaticParams() {
  const blogSlugs = await client.fetch(`*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current }`);
  const pdfSlugs = await client.fetch(`*[_type == "pdfDocument" && defined(slug.current)]{ "slug": slug.current }`);
  const allSlugs = [...blogSlugs, ...pdfSlugs];

  return allSlugs.map(post => ({
    slug: post.slug
  }));
}

export default async function BlogPostPage({ params }: Props) {
  // Attendre les params avant de les utiliser
  const { slug } = await params;

  const blogQuery = `*[_type == "blogPost" && slug.current == $slug][0]{
    title, excerpt, category, author, publishedAt, readTime,
    mainImage{ asset->{ _id, url } },
    content, tags[]
  }`;

  const pdfQuery = `*[_type == "pdfDocument" && slug.current == $slug][0]{
    title,
    "pdfUrl": pdfFile.asset->url
  }`;

  const post = await client.fetch(blogQuery, { slug });

  if (!post) {
    const pdf = await client.fetch(pdfQuery, { slug });

    if (!pdf) {
      notFound();
    }

    return (
      <Layout>
        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection direction="up">
                <h1 className="text-4xl font-bold text-prepa-blue mb-8">{pdf.title}</h1>
                <iframe
                  src={pdf.pdfUrl}
                  className="w-full h-[90vh] rounded-lg border"
                  allow="autoplay"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <Layout>
      <section className="py-4 bg-prepa-light border-b">
        <div className="section-container">
          <AnimatedSection direction="right">
            <nav className="flex items-center space-x-2 text-base">
              <Link href="/" className="text-prepa-gray hover:text-prepa-blue">Accueil</Link>
              <ChevronRight className="w-4 h-4 text-prepa-gray" />
              <Link href="/blog" className="text-prepa-gray hover:text-prepa-blue">Blog</Link>
              <ChevronRight className="w-4 h-4 text-prepa-gray" />
              <span className="text-prepa-blue font-medium">{post.title}</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <div className="text-center mb-12">
                {post.category && (
                  <Badge className="bg-prepa-gold text-prepa-blue mb-6">{post.category}</Badge>
                )}
                <h1 className="text-4xl lg:text-5xl font-bold text-prepa-blue mb-6 leading-tight">
                  {post.title}
                </h1>
                {post.excerpt && (
                  <p className="text-xl text-prepa-gray leading-relaxed max-w-3xl mx-auto">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-y border-gray-200 mb-12">
                <div className="flex items-center space-x-6 text-prepa-gray text-base">
                  {post.author && (
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  )}
                  {post.publishedAt && (
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                  )}
                  {post.readTime && (
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min de lecture</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <Button variant="outline" size="sm" className="btn-outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                    <Heart className="w-4 h-4 mr-2" />
                    J'aime
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {post.mainImage?.asset?.url && (
              <AnimatedSection direction="scale" delay={0.3}>
                <div className="mb-12">
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <div className="content-area">
                <PortableText 
                  value={post.content}
                  components={{
                    block: {
                      normal: ({children}) => <p className="text-lg leading-relaxed mb-6">{children}</p>,
                      h1: ({children}) => <h1 className="text-3xl font-bold text-prepa-blue mb-6 mt-12">{children}</h1>,
                      h2: ({children}) => <h2 className="text-2xl font-bold text-prepa-blue mb-6 mt-12">{children}</h2>,
                      h3: ({children}) => <h3 className="text-xl font-semibold text-prepa-blue mb-4">{children}</h3>,
                      h4: ({children}) => <h4 className="text-lg font-semibold text-prepa-blue mb-3">{children}</h4>,
                      blockquote: ({children}) => (
                        <blockquote className="border-l-4 border-prepa-blue bg-prepa-light p-6 mb-8 italic">
                          {children}
                        </blockquote>
                      ),
                    },
                    list: {
                      bullet: ({children}) => <ul className="space-y-3 mb-8">{children}</ul>,
                      number: ({children}) => <ol className="space-y-3 mb-8 list-decimal list-inside">{children}</ol>,
                    },
                    listItem: {
                      bullet: ({children}) => (
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>{children}</span>
                        </li>
                      ),
                      number: ({children}) => <li className="mb-2">{children}</li>,
                    },
                    marks: {
                      strong: ({children}) => <strong className="font-semibold text-prepa-blue">{children}</strong>,
                      em: ({children}) => <em className="italic">{children}</em>,
                      link: ({children, value}) => (
                        <a href={value.href} className="text-prepa-blue hover:underline" target="_blank" rel="noopener noreferrer">
                          {children}
                        </a>
                      ),
                    },
                  }}
                />

                <div className="card-light p-8 text-center mt-12">
                  <h4 className="text-xl font-bold text-prepa-blue mb-4">
                    Prêt à maximiser vos chances de réussite ?
                  </h4>
                  <p className="text-prepa-gray mb-6">
                    Découvrez notre méthode et bénéficiez de l'expérience de nos enseignants experts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="btn-primary text-white">
                      <Target className="w-4 h-4 mr-2" />
                      Découvrir nos formations
                    </Button>
                    <Button variant="outline" className="btn-outline">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Télécharger notre guide
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {post.author && (
        <section className="py-12 bg-prepa-light">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection direction="up">
                <Card className="card-base">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-prepa-blue rounded-full flex items-center justify-center">
                        <User className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-prepa-blue mb-2">{post.author}</h4>
                        <p className="text-prepa-gray mb-4">
                          Expert en accompagnement des étudiants en études de santé.
                        </p>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex items-center space-x-2 flex-wrap">
                            {post.tags.map((tag: string, index: number) => (
                              <Badge key={index} variant="outline" className="text-prepa-blue border-prepa-blue">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <h3 className="text-2xl font-bold text-prepa-blue mb-8 text-center">
                Articles similaires
              </h3>
            </AnimatedSection>
            <div className="text-center text-prepa-gray">
              <p>Découvrez d'autres articles sur notre blog</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-prepa-light border-t">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <div className="text-center">
                <Link href="/blog">
                  <Button variant="outline" className="btn-outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour au blog
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
