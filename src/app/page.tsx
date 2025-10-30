"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RendezVousButton } from "@/components/RendezVousButton";
import { BrochureButton } from "@/components/BrochureButton";
import { BrochureSuccessButton } from "@/components/BrochureSuccessButton";
import Link from "next/link";
import { Play, Phone, MapPin, Users, Target, Award, Zap, BarChart3, Shield, CheckCircle, X } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ContactForm } from "@/components/ContactForm";
import { Layout } from "@/components/layout/Layout";
import ImageSwitcher from "@/components/ImageSwitcher";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isCeremonyModalOpen, setIsCeremonyModalOpen] = useState(false);
  const [isCeremonyImageOpen, setIsCeremonyImageOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsCeremonyModalOpen(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isCeremonyModalOpen && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // ignore autoplay rejection; user can start playback manually
        });
      }
    }
  }, [isCeremonyModalOpen]);

  const handleOpenCeremonyModal = () => setIsCeremonyModalOpen(true);
  const handleCloseCeremonyModal = () => setIsCeremonyModalOpen(false);
  const handleOpenCeremonyImage = () => setIsCeremonyImageOpen(true);
  const handleCloseCeremonyImage = () => setIsCeremonyImageOpen(false);

  return (
    <Layout>
      {/* Hero Section - Style Cours custom Page d'accueil */}
      <section className="hero-gradient-home overflow-hidden">
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

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <BrochureButton className="btn-primary py-4 sm:py-6 px-4 sm:px-6 text-lg sm:text-xl w-full sm:w-auto">
                    Brochure gratuite
                  </BrochureButton>
                  <AnimatedSection direction="scale" delay={0.8}>
                    <BrochureSuccessButton className="py-4 sm:py-6 px-4 sm:px-6 text-lg sm:text-xl w-full sm:w-auto">
                      🚀 De 144ème à 57ème !
                    </BrochureSuccessButton>
                  </AnimatedSection>
                  <RendezVousButton className="btn-outline py-4 sm:py-6 px-4 sm:px-6 text-lg sm:text-xl w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    Rendez-vous
                  </RendezVousButton>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-2 sm:space-y-0 pt-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-custom-rose flex-shrink-0" />
                    <span className="text-base text-custom-gray font-roboto">96% de satisfaction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-custom-rose flex-shrink-0" />
                    <span className="text-base text-custom-gray font-roboto">Excellence depuis 2015</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="relative">
                <div className="card-white p-6 md:p-8 space-y-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="hero-subtitle-title !text-xl sm:!text-2xl lg:!text-3xl">
                      Cérémonie de clôture 2025
                    </h3>
                    <Button
                      onClick={handleOpenCeremonyModal}
                      className="btn-primary inline-flex items-center gap-2 px-4 py-3 text-sm text-white sm:px-6 sm:py-3 sm:text-base"
                    >
                      <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                      Voir la vidéo
                    </Button>
                  </div>

                  <button
                    type="button"
                    onClick={handleOpenCeremonyImage}
                    className="group relative block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-custom-rose"
                    aria-label="Afficher la photo de la cérémonie de clôture 2025 en grand"
                  >
                    <div className="relative h-72 w-full overflow-hidden">
                      <Image
                        src="/media/ceremonie_cloture_2025.jpg"
                        alt="Cérémonie de clôture 2025 de Prépa Réussite"
                        width={1200}
                        height={800}
                        priority
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/25 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/85 p-4 backdrop-blur transition-all duration-500 group-hover:translate-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-custom-blue/80">
                        Prépa Réussite
                      </p>
                      <p className="mt-1 font-gyst text-lg font-semibold text-custom-dark">
                        Revivez les temps forts de la promo 2025
                      </p>
                    </div>
                  </button>

                  <p className="text-base leading-relaxed text-custom-gray font-roboto md:text-lg">
                    Une célébration d&apos;excellence et de partage pour honorer la réussite de nos étudiants. Découvrez l&apos;émotion de la
                    remise des diplômes et l&apos;ambiance unique de cet événement.
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Statistics Section - Style Cours custom CORRIGÉ POUR MOBILE */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Background avec gestion responsive */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-custom-blue/90 to-blue-600/80" />
        
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16 text-center max-w-6xl mx-auto">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="space-y-4 md:space-y-6">
                <AnimatedCounter endValue={30} className="stat-number-white" />
                <div className="text-white font-semibold text-xl md:text-2xl font-roboto">élèves par promotion</div>
                <p className="stat-description-white text-sm md:text-base">Pour un suivi personnalisé de qualité</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="space-y-4 md:space-y-6">
                <AnimatedCounter endValue={100} suffix="%" className="stat-number-white" />
                <div className="text-white font-semibold text-xl md:text-2xl font-roboto">en présentiel</div>
                <p className="stat-description-white text-sm md:text-base">Parce que rien ne remplace l'interaction directe</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="space-y-4 md:space-y-6">
                <AnimatedCounter endValue={2} className="stat-number-white" />
                <div className="text-white font-semibold text-xl md:text-2xl font-roboto">campus</div>
                <p className="stat-description-white text-sm md:text-base">Nord (Sainte-Clotilde) et Sud (Saint-Pierre)</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Notre Vision Section - Style Cours custom */}
      <section className="py-20 section-bg-light overflow-hidden">
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
            <div className="card-white p-6 md:p-8 mb-16 max-w-4xl mx-auto custom-shadow">
              <blockquote className="text-xl md:text-2xl italic leading-relaxed font-roboto font-medium">
                <span className="text-gradient-blue">
                  "Chaque étudiant réunionnais motivé mérite toutes les chances de réussir en médecine,
                  sans avoir à quitter son île ou se ruiner."
                </span>
              </blockquote>
              <p className="text-custom-gray text-base mt-6 font-roboto">Notre conviction fondatrice</p>
              
              {/* NOUVEAU TEXTE AJOUTÉ */}
              <div className="bg-gradient-to-r from-blue-50 to-rose-50 p-4 md:p-6 rounded-xl mt-8">
                <p className="text-base md:text-lg font-medium text-custom-dark leading-relaxed">
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
                <div className="text-4xl md:text-5xl font-bold text-custom-blue mb-2 font-gyst">44%</div>
                <div className="text-base md:text-lg font-semibold font-roboto text-gradient-blue">réussite aux concours de médecine</div>
                <div className="text-sm md:text-base text-custom-gray font-roboto">(promo 2025)</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-custom-blue mb-2 font-gyst">2</div>
                <div className="text-base md:text-lg font-semibold font-roboto text-gradient-blue">campus à La Réunion</div>
                <div className="text-sm md:text-base text-custom-gray font-roboto">Nord et Sud</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-custom-blue mb-2 font-gyst">97%</div>
                <div className="text-base md:text-lg font-semibold font-roboto text-gradient-blue">de nos anciens étudiants</div>
                <div className="text-sm md:text-base text-custom-gray font-roboto">nous recommandent</div>
              </div>
            </AnimatedSection>
          </div>

          {/* Values Grid - Style Cours custom */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div className="card-base p-8 md:p-10 mt-16 max-w-4xl mx-auto custom-shadow bg-gradient-to-br from-blue-50/50 to-rose-50/50">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-medium text-custom-dark mb-6 font-gyst">Notre Mission</h3>
                <p className="text-lg md:text-xl leading-relaxed font-roboto">
                  <span className="text-gradient-blue font-medium">
                    Derrière chaque inscription, il y a un rêve : devenir médecin, sage-femme, kiné, pharmacien ou dentiste.
                  </span>
                  <br/>
                  <span className="text-custom-dark font-normal mt-4 block">
                    Notre mission : transformer ce rêve en méthode, en progression, en réussite.
                  </span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Moments Gallery Section */}
      <section className="py-20 section-bg-light overflow-hidden">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <h2 className="section-title text-left">
                  Réussir sans se ruiner
                </h2>
                <p className="text-lg leading-relaxed text-custom-gray font-roboto md:text-xl">
                  Nos étudiants ont choisi Prépa Réussite pour réussir leur entrée en médecine sans s&apos;infliger des frais de
                  14000 euros. Ils progressent dans un accompagnement exigeant, humain et accessible.
                </p>
                <p className="text-base text-custom-gray font-roboto">
                  Ici, la réussite s&apos;obtient avec du travail, du soutien et une pédagogie éprouvée, pas avec des factures
                  exorbitantes.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <div className="flex justify-center">
                <ImageSwitcher />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Parcours Section - Style Cours custom MODIFIÉ */}
      <section className="py-20 bg-white overflow-hidden">
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

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            {/* Prépa Terminale MODIFIÉE */}
            <AnimatedSection direction="left" delay={0.2}>
              <Card className="card-base custom-card-hover h-full custom-shadow-hover">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
                    <Badge className="badge-primary w-fit">Lycéens</Badge>
                    <span className="text-base text-custom-gray font-roboto">Présentiel</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 font-gyst text-gradient-blue">Prépa Terminale</h3>
                  <p className="text-lg text-custom-gray mb-6 font-roboto">Anticiper, structurer, réussir.</p>

                  <p className="text-base text-custom-gray mb-6 font-roboto">
                    <strong>Pour les élèves de Terminale qui souhaitent :</strong>
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base text-custom-gray font-roboto">Comprendre les attentes de la PASS / LAS</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base text-custom-gray font-roboto">Acquérir une méthode de travail structurée et efficace</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base text-custom-gray font-roboto">Prendre de l'avance sur les notions clés du programme</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base text-custom-gray font-roboto">Développer rigueur, rythme et confiance</span>
                    </li>
                  </ul>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-custom-rose flex-shrink-0" />
                      <span className="text-sm md:text-base text-custom-gray font-roboto font-semibold">30 places max – accompagnement individuel garanti</span>
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
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
                    <Badge className="badge-primary w-fit">Étudiants</Badge>
                    <span className="text-base text-custom-gray font-roboto">Présentiel</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 font-gyst text-gradient-blue">Prépa PASS / LAS</h3>
                  <p className="text-lg text-custom-gray mb-6 font-roboto">Réussir l'année la plus décisive.</p>

                  <p className="text-base text-custom-gray mb-6 font-roboto">
                    <strong>Pour les étudiants inscrits à l'Université de La Réunion :</strong>
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base text-custom-gray font-roboto">Cours en présentiel pour consolider les acquis de la fac</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base text-custom-gray font-roboto">TD, colles, concours blancs et coaching mental</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base text-custom-gray font-roboto">Suivi individualisé selon la filière (PASS ou LAS)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-custom-rose mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base text-custom-gray font-roboto">Accompagnement stratégique jusqu'aux épreuves</span>
                    </li>
                  </ul>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-custom-rose flex-shrink-0" />
                      <span className="text-sm md:text-base text-custom-gray font-roboto font-semibold">30 places max – exigence & soutien jusqu'au bout</span>
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
                <Button className="btn-secondary px-8 md:px-12 py-4 text-base md:text-lg text-white">
                  <Target className="w-5 h-5 mr-3" />
                  Découvrir tous nos parcours en détail
                </Button>
              </Link>
              <p className="text-custom-gray text-sm md:text-base mt-4 font-roboto">
                Comparatif complet, témoignages et résultats détaillés
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* NOUVELLE SECTION : La Méthodologie Prépa Réussite */}
      <section className="py-20 section-bg-light overflow-hidden">
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

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
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
      <section className="py-20 section-bg-blue-light overflow-hidden">
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

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            {/* Centre Nord */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-8">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=300&fit=crop"
                    alt="Centre Nord - Sainte-Clotilde"
                    className="w-full h-48 md:h-64 object-cover rounded-xl"
                  />
                  <div className="absolute top-4 md:top-6 left-4 md:left-6">
                    <Badge className="badge-blue">Centre Nord</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-xl md:text-2xl mb-3 font-gyst text-gradient-blue">Sainte-Clotilde</h3>
                  <div className="flex items-start md:items-center text-custom-gray text-sm md:text-base mb-6 font-roboto">
                    <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-1 md:mt-0" />
                    <span>24 Rte Philibert Tsiranana, CS 61115 97495, La Réunion (CREPS REUNION)</span>
                  </div>
                </div>

                <Card className="card-white custom-shadow">
                  <CardContent className="p-6 md:p-8 space-y-6">
                    <h4 className="font-bold text-lg font-gyst text-gradient-blue">Centre de Sainte-Clotilde</h4>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-custom-blue rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm md:text-base font-roboto text-gradient-blue">Installations modernes</p>
                          <p className="text-custom-gray text-sm md:text-base font-roboto">
                            Locaux spacieux avec salles de classe équipées, espaces de travail collaboratif.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-custom-blue rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm md:text-base font-roboto text-gradient-blue">Emplacement stratégique</p>
                          <p className="text-custom-gray text-sm md:text-base font-roboto">
                            À 10 minutes de l'université, facilement accessible en transports en commun.
                          </p>
                        </div>
                      </div>
                    </div>

                    <a 
                      href="tel:+262692713084" 
                      className="flex items-center text-custom-blue text-sm md:text-base pt-4 font-roboto hover:text-custom-rose transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                      +262 692 71 30 84 
                    </a>
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
                    className="w-full h-48 md:h-64 object-cover rounded-xl"
                  />
                  <div className="absolute top-4 md:top-6 left-4 md:left-6">
                    <Badge className="badge-blue">Centre Sud</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-xl md:text-2xl mb-3 font-gyst text-gradient-blue">Saint-Pierre</h3>
                  <div className="flex items-start md:items-center text-custom-gray text-sm md:text-base mb-6 font-roboto">
                    <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-1 md:mt-0" />
                    <span>149 C Rue Marius et Ary Leblond, Saint-Pierre 97410, La Réunion (Nova assurances)</span>
                  </div>
                </div>

                <Card className="card-white custom-shadow">
                  <CardContent className="p-6 md:p-8 space-y-6">
                    <h4 className="font-bold text-lg font-gyst text-gradient-blue">Centre de Saint-Pierre</h4>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-custom-blue rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm md:text-base font-roboto text-gradient-blue">Espace de travail optimisé</p>
                          <p className="text-custom-gray text-sm md:text-base font-roboto">
                            Locaux récents et lumineux, avec amphithéâtre et salles de travail.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-custom-blue rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm md:text-base font-roboto text-gradient-blue">Localisation idéale</p>
                          <p className="text-custom-gray text-sm md:text-base font-roboto">
                            En centre-ville, proche des commerces et restaurants, facilement accessible.
                          </p>
                        </div>
                      </div>
                    </div>

                    <a 
                      href="tel:+262692713084" 
                      className="flex items-center text-custom-blue text-sm md:text-base pt-4 font-roboto hover:text-custom-rose transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                      +262 692 71 30 84 
                    </a>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <TestimonialsSection />

      {/* Contact Section - Style Cours custom */}
      <section className="py-20 bg-white overflow-hidden" id="contact">
        <div className="section-container">
          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
            {/* Questions */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-custom-rose/10 md:h-16 md:w-16">
                    <span className="text-2xl md:text-3xl">🤔</span>
                  </div>
                  <div>
                    <h3 className="font-gyst text-2xl font-bold text-gradient-blue md:text-3xl">
                      Des questions ?
                    </h3>
                  </div>
                </div>

                <p className="text-custom-gray text-base leading-relaxed font-roboto md:text-lg">
                  Consultez notre page de questions fréquentes pour trouver rapidement des réponses à vos interrogations
                  sur nos formations, nos méthodes et nos tarifs.
                </p>

                <Link href="/faq">
                  <Button className="btn-primary w-full text-white sm:w-auto">
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

      <AnimatePresence>
        {isCeremonyModalOpen && (
          <motion.div
            key="ceremony-video"
            className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={handleCloseCeremonyModal}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-custom-rose/10 shadow-[0_40px_140px_-50px_rgba(15,23,42,0.8)]"
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.92 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleCloseCeremonyModal}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-custom-dark shadow-lg transition-all hover:bg-white"
                aria-label="Fermer la vidéo de la cérémonie"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-4 px-6 pt-8 pb-4 text-center md:px-10 md:pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-custom-blue/80 md:text-sm">
                  Instant exclusif
                </p>
                <h3 className="text-2xl font-extrabold text-custom-dark md:text-3xl">
                  Cérémonie de clôture 2025 — un moment à revivre sans attendre
                </h3>
                <p className="text-sm text-custom-gray font-roboto md:text-base">
                  Laissez-vous porter par l&apos;émotion de nos lauréats et activez le son depuis les contrôles si vous souhaitez profiter de l&apos;ambiance.
                </p>
              </div>

              <div className="relative bg-black">
                <div className="pointer-events-none absolute -left-8 top-6 hidden h-36 w-36 rounded-full bg-custom-blue/40 blur-2xl md:block" />
                <div className="pointer-events-none absolute -right-12 bottom-4 hidden h-44 w-44 rounded-full bg-custom-rose/40 blur-2xl md:block" />
                <video
                  ref={videoRef}
                  src="/media/ceremonie_cloture_2025.webm"
                  autoPlay
                  playsInline
                  controls
                  loop
                  poster="/media/ceremonie_cloture_2025.jpg"
                  className="relative z-10 h-[260px] w-full object-cover sm:h-[360px] md:h-[420px]"
                >
                  Votre navigateur ne prend pas en charge la lecture de cette vidéo.
                </video>
              </div>

              <div className="px-6 py-6 md:px-10 md:py-8">
                <div className="text-center md:text-left">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-custom-blue/80">
                    Prépa Réussite
                  </p>
                  <p className="text-base text-custom-gray font-roboto md:text-lg">
                    Une célébration de l&apos;excellence réunionnaise vers les études de santé.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {isCeremonyImageOpen && (
          <motion.div
            key="ceremony-photo"
            className="fixed inset-0 z-[210] flex items-center justify-center bg-slate-950/85 px-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={handleCloseCeremonyImage}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="relative w-full max-w-6xl overflow-hidden rounded-[36px] bg-gradient-to-br from-white via-white to-custom-blue/10 shadow-[0_60px_180px_-60px_rgba(15,23,42,0.85)]"
              initial={{ opacity: 0, y: 50, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleCloseCeremonyImage}
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-custom-dark shadow-lg transition-all hover:bg-white"
                aria-label="Fermer la photo de la cérémonie"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-3 px-8 pt-10 pb-2 text-center md:px-12">
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-custom-blue/80 md:text-sm">
                  Instantané d&apos;émotion
                </p>
                <h3 className="text-xl font-extrabold text-custom-dark md:text-2xl">
                  Cérémonie de clôture 2025 — souvenirs en grand format
                </h3>
                <p className="text-sm text-custom-gray font-roboto md:text-base">
                  Plongez dans l&apos;ambiance de la soirée et admirez les sourires de la promotion 2025.
                </p>
              </div>

              <div className="relative mx-4 mb-10 mt-2 overflow-hidden rounded-[28px] bg-slate-900">
                <div className="pointer-events-none absolute inset-x-8 top-6 hidden h-32 rounded-full bg-custom-rose/35 blur-3xl md:block" />
                <div className="pointer-events-none absolute inset-x-10 bottom-6 hidden h-40 rounded-full bg-custom-blue/35 blur-3xl md:block" />
                <Image
                  src="/media/ceremonie_cloture_2025.jpg"
                  alt="Cérémonie de clôture 2025 de Prépa Réussite"
                  width={2000}
                  height={1335}
                  className="relative z-10 h-full w-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
