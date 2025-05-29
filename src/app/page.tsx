"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RendezVousButton } from "@/components/RendezVousButton";
import { BrochureButton } from "@/components/BrochureButton";
import Link from "next/link";
import { Play, Phone, MapPin, Mail, Users, Target, Award, Zap, BarChart3, Shield, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ContactForm } from "@/components/ContactForm";
import { CentreSudSection } from "@/components/CentreSudSection";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <Layout>
      {/* Hero Section - Style Cours custom Page d'accueil */}
      <section className="hero-gradient-home">
        <div className="hero-content">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="hero-main-title">PRÉPA RÉUSSITE</span>
                  </div>
                  <h1 className="hero-subtitle-title mb-4">
                    La prépa de référence
                  </h1>
                  <h2 className="hero-subtitle-title">
                    aux études de santé
                  </h2>
                  <p className="hero-subtitle-home">
                    Préparer les études de santé avec sérieux, méthode et ambition.
                    Une prépa d'excellence, pensée pour viser haut avec méthode et confiance.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <BrochureButton className="btn-primary py-6 px-6 text-xl">
                    Brochure gratuite
                  </BrochureButton>
                  <RendezVousButton className="btn-outline py-6 px-6 text-xl">
                    <Phone className="w-4 h-4 mr-2" />
                    Rendez-vous
                  </RendezVousButton>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-custom-rose" />
                    <span className="text-base text-custom-gray font-roboto">96% de satisfaction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-custom-rose" />
                    <span className="text-base text-custom-gray font-roboto">Excellence depuis 2020</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="relative">
                <div className="card-white p-6">
                  {showVideo ? (
                    <div className="w-full h-80 rounded-xl overflow-hidden">
                      <iframe
                        src="https://www.youtube.com/embed/yWHmhMdhtsc?autoplay=1&playsinline=1&modestbranding=1&rel=0"
                        title="Vidéo YouTube"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
                        alt="Étudiants en cours"
                        className="w-full h-80 object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          size="lg"
                          onClick={() => setShowVideo(true)}
                          className="bg-white/20 hover:bg-white/30 text-white rounded-full w-16 h-16 backdrop-blur-sm"
                        >
                          <Play className="w-6 h-6 ml-1" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Statistics Section - Style Cours custom */}
      <section className="py-32 stats-section">
        <div className="section-container stats-content">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="space-y-6">
                <AnimatedCounter endValue={30} className="stat-number-white" />
                <div className="text-white font-semibold text-2xl font-roboto">élèves par promotion</div>
                <p className="stat-description-white">Pour un suivi personnalisé de qualité</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="space-y-6">
                <AnimatedCounter endValue={100} suffix="%" className="stat-number-white" />
                <div className="text-white font-semibold text-2xl font-roboto">en présentiel</div>
                <p className="stat-description-white">Parce que rien ne remplace l'interaction directe</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="space-y-6">
                <AnimatedCounter endValue={2} className="stat-number-white" />
                <div className="text-white font-semibold text-2xl font-roboto">campus</div>
                <p className="stat-description-white">Nord (Sainte-Clotilde) et Sud (Saint-Pierre)</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Notre Vision Section - Style Cours custom */}
      <section className="py-20 section-bg-light">
        <div className="section-container text-center">
          <AnimatedSection direction="up">
            <div className="section-header">
              <p className="section-eyebrow">Notre ADN</p>
              <h2 className="section-title">Notre Vision</h2>
              <p className="section-subtitle">
                Une approche personnalisée et exigeante
                pour accompagner chaque étudiant vers la réussite.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="scale" delay={0.2}>
            <div className="card-white p-8 mb-16 max-w-4xl mx-auto custom-shadow">
              <blockquote className="text-2xl italic leading-relaxed font-roboto font-medium">
                <span className="text-gradient-blue">
                  "Chaque étudiant réunionnais motivé mérite toutes les chances de réussir en médecine,
                  sans avoir à quitter son île ou se ruiner."
                </span>
              </blockquote>
              <p className="text-custom-gray text-base mt-6 font-roboto">Notre conviction fondatrice</p>
              
              {/* NOUVEAU TEXTE AJOUTÉ */}
              <div className="bg-gradient-to-r from-blue-50 to-rose-50 p-6 rounded-xl mt-8">
                <p className="text-lg font-medium text-custom-dark leading-relaxed">
                  Chez Prépa Réussite, nous avons créé une prépa à taille humaine, ancrée localement, 
                  exigeante mais bienveillante, pour accompagner ceux qui veulent s'engager dans les filières de santé.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Stats Cours custom Style */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="text-center">
                <div className="text-5xl font-bold text-custom-blue mb-2 font-gyst">3500</div>
                <div className="text-lg font-semibold font-roboto text-gradient-blue">étudiants accompagnés</div>
                <div className="text-base text-custom-gray font-roboto">chaque année</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="text-center">
                <div className="text-5xl font-bold text-custom-blue mb-2 font-gyst">2</div>
                <div className="text-lg font-semibold font-roboto text-gradient-blue">campus à La Réunion</div>
                <div className="text-base text-custom-gray font-roboto">Nord et Sud</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="text-center">
                <div className="text-5xl font-bold text-custom-blue mb-2 font-gyst">97%</div>
                <div className="text-lg font-semibold font-roboto text-gradient-blue">de nos anciens étudiants</div>
                <div className="text-base text-custom-gray font-roboto">nous recommandent</div>
              </div>
            </AnimatedSection>
          </div>

          {/* Values Grid - Style Cours custom */}
          <div className="features-grid-4">
            {[
              {
                icon: Award,
                title: "Le mérite",
                description: "Reconnaître la valeur de l'effort et célébrer l'excellence de chacun.",
                delay: 0.1
              },
              {
                icon: Zap,
                title: "L'effort",
                description: "Encourager la persévérance au quotidien pour bâtir une progression durable.",
                delay: 0.2
              },
              {
                icon: BarChart3,
                title: "La régularité",
                description: "Instaurer des routines claires pour avancer sereinement, semaine après semaine.",
                delay: 0.3
              },
              {
                icon: Shield,
                title: "La confiance",
                description: "Créer un climat bienveillant et structuré pour révéler le potentiel de chaque élève.",
                delay: 0.4
              }
            ].map((value, index) => (
              <AnimatedSection key={value.title} direction="up" delay={value.delay}>
                <div className="feature-card card-base custom-card-hover">
                  <div className="feature-icon">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="feature-title">{value.title}</h3>
                  <p className="feature-description">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* NOUVEAU TEXTE AJOUTÉ APRÈS LES CARDS */}
          <AnimatedSection direction="up" delay={0.5}>
            <div className="card-base p-8 mt-16 max-w-4xl mx-auto custom-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-custom-dark mb-4 font-gyst">Notre Mission</h3>
                <p className="text-xl leading-relaxed font-roboto">
                  <span className="text-gradient-blue font-semibold">
                    Derrière chaque inscription, il y a un rêve : devenir médecin, sage-femme, kiné, pharmacien ou dentiste.
                  </span>
                  <br/>
                  <span className="text-custom-dark font-medium mt-2 block">
                    Notre mission : transformer ce rêve en méthode, en progression, en réussite.
                  </span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Parcours Section - Style Cours custom MODIFIÉ */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="section-header">
              <p className="section-eyebrow">Nos parcours de préparation</p>
              <h2 className="section-title">Nos Prépas</h2>
              <p className="section-subtitle">
                Deux préparations exigeantes, adaptées à chaque étape de votre parcours vers la médecine.
              </p>
              <p className="section-subtitle">
                Chez Prépa Réussite, chaque programme est pensé pour maximiser vos chances dès le lycée et tout au long de la PASS/LAS.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Prépa Terminale MODIFIÉE */}
            <AnimatedSection direction="left" delay={0.2}>
              <Card className="card-base custom-card-hover h-full custom-shadow-hover">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Badge className="badge-primary">Lycéens</Badge>
                    <span className="text-base text-custom-gray font-roboto">Présentiel</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-gyst text-gradient-blue">Prépa Terminale</h3>
                  <p className="text-lg text-custom-gray mb-6 font-roboto">Anticiper, structurer, réussir.</p>

                  <p className="text-base text-custom-gray mb-6 font-roboto">
                    <strong>Pour les élèves de Terminale qui souhaitent :</strong>
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-base text-custom-gray font-roboto">Comprendre les attentes de la PASS / LAS</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-base text-custom-gray font-roboto">Acquérir une méthode de travail structurée et efficace</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-base text-custom-gray font-roboto">Prendre de l'avance sur les notions clés du programme</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-base text-custom-gray font-roboto">Développer rigueur, rythme et confiance</span>
                    </li>
                  </ul>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-custom-rose" />
                      <span className="text-base text-custom-gray font-roboto font-semibold">30 places max – accompagnement individuel garanti</span>
                    </div>
                  </div>

                  <RendezVousButton className="w-full btn-primary text-white">
                    Je m'informe →
                  </RendezVousButton>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Prépa PASS/LAS MODIFIÉE */}
            <AnimatedSection direction="right" delay={0.2}>
              <Card className="card-base custom-card-hover h-full custom-shadow-hover">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Badge className="badge-primary">Étudiants</Badge>
                    <span className="text-base text-custom-gray font-roboto">Présentiel</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-gyst text-gradient-blue">Prépa PASS / LAS</h3>
                  <p className="text-lg text-custom-gray mb-6 font-roboto">Réussir l'année la plus décisive.</p>

                  <p className="text-base text-custom-gray mb-6 font-roboto">
                    <strong>Pour les étudiants inscrits à l'Université de La Réunion :</strong>
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-base text-custom-gray font-roboto">Cours en présentiel pour consolider les acquis de la fac</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-base text-custom-gray font-roboto">TD, colles, concours blancs et coaching mental</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-base text-custom-gray font-roboto">Suivi individualisé selon la filière (PASS ou LAS)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-base text-custom-gray font-roboto">Accompagnement stratégique jusqu'aux épreuves</span>
                    </li>
                  </ul>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-custom-rose" />
                      <span className="text-base text-custom-gray font-roboto font-semibold">30 places max – exigence & soutien jusqu'au bout</span>
                    </div>
                  </div>

                  <RendezVousButton className="w-full btn-primary text-white">
                    Je m'informe →
                  </RendezVousButton>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="text-center mt-16">
              <Link href="/formations">
                <Button className="btn-secondary px-12 py-4 text-lg text-white">
                  <Target className="w-5 h-5 mr-3" />
                  Découvrir tous nos parcours en détail
                </Button>
              </Link>
              <p className="text-custom-gray text-base mt-4 font-roboto">
                Comparatif complet, témoignages et résultats détaillés
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* NOUVELLE SECTION : La Méthodologie Prépa Réussite */}
      <section className="py-20 section-bg-light">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="section-header">
              <p className="section-eyebrow">La Méthodologie Prépa Réussite</p>
              <h2 className="section-title">Un cadre structuré, un accompagnement de proximité, une exigence bienveillante</h2>
              <p className="section-subtitle">
                Chez Prépa Réussite, nous avons conçu une approche claire et rigoureuse, 
                adaptée aux enjeux des études de santé et aux besoins des étudiants réunionnais.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="feature-card card-base custom-card-hover h-full">
                <div className="feature-icon">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="feature-title">Suivi en petit groupe</h3>
                <p className="feature-description">
                  Des promotions limitées pour favoriser l'attention portée à chacun, 
                  l'interaction entre élèves et une dynamique d'apprentissage continue.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="feature-card card-base custom-card-hover h-full">
                <div className="feature-icon">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="feature-title">Présentiel à 100 %</h3>
                <p className="feature-description">
                  Cours, TD, colles et concours blancs : tout est dispensé en présentiel, 
                  afin de garantir l'implication, l'échange et la régularité.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="feature-card card-base custom-card-hover h-full">
                <div className="feature-icon">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="feature-title">Travail régulier et progression encadrée</h3>
                <p className="feature-description">
                  Un rythme soutenu avec des colles et des concours blancs tout au long de l'année, 
                  assortis de classements entre campus pour favoriser une émulation constructive.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Centres Section - Style Cours custom */}
      <section className="py-20 section-bg-blue-light">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="section-header">
              <p className="section-eyebrow">Nos campus</p>
              <h2 className="section-title">Découvrez nos campus partout à La Réunion</h2>
              <p className="section-subtitle">
                Deux localisations. Un même programme. Une même exigence.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Centre Nord */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-8">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=300&fit=crop"
                    alt="Centre Nord - Sainte-Clotilde"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="badge-blue">Centre Nord</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-2xl mb-3 font-gyst text-gradient-blue">Sainte-Clotilde</h3>
                  <div className="flex items-center text-custom-gray text-base mb-6 font-roboto">
                    <MapPin className="w-5 h-5 mr-3" />
                    24 Rte Philibert Tsiranana, CS 61115 97495, La Réunion (CREPS REUNION)
                  </div>
                </div>

                <Card className="card-white custom-shadow">
                  <CardContent className="p-8 space-y-6">
                    <h4 className="font-bold text-lg font-gyst text-gradient-blue">Centre de Sainte-Clotilde</h4>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-custom-blue rounded-full mt-2" />
                        <div>
                          <p className="font-semibold text-base font-roboto text-gradient-blue">Installations modernes</p>
                          <p className="text-custom-gray text-base font-roboto">
                            Locaux spacieux avec salles de classe équipées, espaces de travail collaboratif.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-custom-blue rounded-full mt-2" />
                        <div>
                          <p className="font-semibold text-base font-roboto text-gradient-blue">Emplacement stratégique</p>
                          <p className="text-custom-gray text-base font-roboto">
                            À 10 minutes de l'université, facilement accessible en transports en commun.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-custom-blue text-base pt-4 font-roboto">
                      <Phone className="w-5 h-5 mr-3" />
                      +262 692 71 30 84 
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            {/* Centre Sud */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-8">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop"
                    alt="Centre Sud - Saint-Pierre"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="badge-blue">Centre Sud</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-2xl mb-3 font-gyst text-gradient-blue">Saint-Pierre</h3>
                  <div className="flex items-center text-custom-gray text-base mb-6 font-roboto">
                    <MapPin className="w-5 h-5 mr-3" />
                    149 C Rue Marius et Ary Leblond, Saint-Pierre 97410, La Réunion (Nova assurances)
                  </div>
                </div>

                <Card className="card-white custom-shadow">
                  <CardContent className="p-8 space-y-6">
                    <h4 className="font-bold text-lg font-gyst text-gradient-blue">Centre de Saint-Pierre</h4>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-custom-blue rounded-full mt-2" />
                        <div>
                          <p className="font-semibold text-base font-roboto text-gradient-blue">Espace de travail optimisé</p>
                          <p className="text-custom-gray text-base font-roboto">
                            Locaux récents et lumineux, avec amphithéâtre et salles de travail.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-custom-blue rounded-full mt-2" />
                        <div>
                          <p className="font-semibold text-base font-roboto text-gradient-blue">Localisation idéale</p>
                          <p className="text-custom-gray text-base font-roboto">
                            En centre-ville, proche des commerces et restaurants, facilement accessible.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-custom-blue text-base pt-4 font-roboto">
                      <Phone className="w-5 h-5 mr-3" />
                      +262 692 71 30 84 
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Contact Section - Style Cours custom */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Questions */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-custom-rose/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🤔</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-3xl font-gyst text-gradient-blue">Des questions ?</h3>
                  </div>
                </div>

                <p className="text-custom-gray text-lg font-roboto leading-relaxed">
                  Consultez notre page de questions fréquentes pour trouver rapidement des réponses à vos interrogations
                  sur nos formations, nos méthodes et nos tarifs.
                </p>

                <Link href="/faq">
                  <Button className="btn-primary text-white">
                    Voir toutes les FAQ →
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}