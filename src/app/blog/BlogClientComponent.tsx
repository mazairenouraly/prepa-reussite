'use client';

import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Clock, User, Tag, Search,
  ArrowRight, BookOpen, TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

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

interface BlogClientComponentProps {
  initialPosts: BlogPost[];
}

export default function BlogClientComponent({ initialPosts }: BlogClientComponentProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  // Extraire les catégories uniques avec capitalize
  const categories = ['Tous', ...new Set(initialPosts.map(post => post.category).filter(Boolean))];
  
  // Fonction pour capitaliser la première lettre
  const capitalize = (str: string) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // Filtrer les articles
  const filteredPosts = initialPosts.filter(post => {
    const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getImageUrl = (post: BlogPost) => {
    return post.mainImage?.asset?.url || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=250&fit=crop';
  };

  return (
    <>
      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Categories */}
            <AnimatedSection direction="left">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer transition-colors ${
                      selectedCategory === category
                        ? 'bg-prepa-blue text-white'
                        : 'hover:bg-prepa-light border-prepa-blue text-prepa-blue'
                    }`}
                    onClick={() => setSelectedCategory(category || 'Tous')}
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {capitalize(category || 'Tous')}
                  </Badge>
                ))}
              </div>
            </AnimatedSection>

            {/* Search */}
            <AnimatedSection direction="right">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-prepa-gray" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  className="form-input pl-10 w-80"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && featuredPosts.map((post) => (
        <section key={post._id} className="py-16 bg-prepa-light">
          <div className="section-container">
            <AnimatedSection direction="up">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div>
                      {post.category && (
                        <Badge className="bg-prepa-gold text-prepa-blue mb-4">
                          {capitalize(post.category)}
                        </Badge>
                      )}
                      <h2 className="text-3xl font-bold text-prepa-blue mb-4">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-prepa-gray text-lg leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center space-x-6 text-prepa-gray text-base">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      {post.readTime && (
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime} min de lecture</span>
                        </div>
                      )}
                      {post.author && (
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      )}
                    </div>

                    <Link href={`/blog/${post.slug.current}`}>
                      <Button className="btn-primary text-white">
                        Lire l'article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <div className="relative">
                    <img
                      src={getImageUrl(post)}
                      alt={post.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-500 text-white">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Article vedette
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* Regular Articles Grid */}
      <section className="py-16 bg-white">
        <div className="section-container">
          {initialPosts.length === 0 ? (
            /* No articles at all */
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Aucun article publié pour le moment
              </h3>
              <p className="text-gray-500 mb-6">
                Les premiers articles seront bientôt disponibles
              </p>
            </div>
          ) : regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <AnimatedSection key={post._id} direction="up" delay={index * 0.1}>
                  <Card className="card-base overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={getImageUrl(post)}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      {post.category && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-prepa-blue text-white">
                            {capitalize(post.category)}
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold text-prepa-blue leading-tight line-clamp-2">
                          {post.title}
                        </h3>

                        {post.excerpt && (
                          <p className="text-prepa-gray text-base leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}

                        <div className="flex items-center justify-between text-s text-prepa-gray">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            {post.readTime && (
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{post.readTime} min</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          {post.author && (
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4 text-prepa-gray" />
                              <span className="text-base text-prepa-gray">{post.author}</span>
                            </div>
                          )}

                          <Link href={`/blog/${post.slug.current}`}>
                            <Button variant="ghost" size="sm" className="text-prepa-blue hover:text-prepa-cyan">
                              Lire
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            /* Filtered results empty */
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Aucun article trouvé
              </h3>
              <p className="text-gray-500 mb-6">
                Essayez de modifier vos critères de recherche
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Tous');
                }}
                variant="outline"
                className="btn-outline"
              >
                Voir tous les articles
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
