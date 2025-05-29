import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContactForm } from '@/components/ContactForm';
import { ReunionMap } from '@/components/ReunionMap';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RendezVousButton } from '@/components/RendezVousButton';
import {
  MapPin, Phone, Mail, Clock, Navigation,
  MessageCircle, Calendar, Users, Target
} from 'lucide-react';

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient-pages">
        <div className="hero-content">
          <div className="text-center text-white">
            <AnimatedSection direction="up">
              {/*
              <MessageCircle className="w-20 h-20 mx-auto mb-8 text-custom-rose" />
              */}
              <h1 className="hero-title-pages mb-8">Contactez-nous</h1>
              <p className="hero-subtitle-pages max-w-4xl mx-auto">
                Une question sur nos formations ? Besoin d'un conseil personnalisé ?
                Notre équipe est là pour vous accompagner dans votre projet.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection direction="up" delay={0.1}>
              <Card className="card-base text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-prepa-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-prepa-blue mb-4">Appelez-nous</h3>
                  <div className="space-y-3 text-prepa-gray">
                    <div>
                      <p className="font-semibold">Centre Nord</p>
                      <p>0262 12 34 56</p>
                    </div>
                    <div>
                      <p className="font-semibold">Centre Sud</p>
                      <p>0262 98 76 54</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-base pt-4">
                      <Clock className="w-4 h-4" />
                      <span>Lun-Ven 8h-17h30</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <Card className="card-base text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-prepa-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-prepa-blue mb-4">Écrivez-nous</h3>
                  <div className="space-y-3 text-prepa-gray">
                    <p>contact@prepa-reussite.com</p>
                    <p className="text-base">Réponse garantie sous 24h</p>
                    <div className="flex items-center justify-center space-x-2 text-base pt-4">
                      <MessageCircle className="w-4 h-4" />
                      <span>Support 7j/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="card-base text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-prepa-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-prepa-blue mb-4">Prenez RDV</h3>
                  <div className="space-y-3 text-prepa-gray">
                    <p>Rencontrez notre équipe</p>
                    <p className="text-base">Visite des locaux incluse</p>
                    <div className="flex items-center justify-center space-x-2 text-base pt-4">
                      <Users className="w-4 h-4" />
                      <span>Conseil personnalisé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-prepa-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <ContactForm />
            </AnimatedSection>

            {/* Locations */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-prepa-blue mb-6">Nos centres</h3>
                  <p className="text-prepa-gray mb-8">
                    Deux localisations à La Réunion pour vous accompagner au plus près de chez vous.
                  </p>
                </div>

                {/* Horaires */}
                <Card className="card-light">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-prepa-blue mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Horaires d'ouverture
                    </h4>
                    <div className="space-y-2 text-prepa-gray">
                      <div className="flex justify-between">
                        <span>Lundi - Vendredi</span>
                        <span className="font-medium">8h00 - 17h30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samedi</span>
                        <span className="font-medium">9h00 - 12h00 (sur RDV)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dimanche</span>
                        <span className="font-medium">Fermé</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map */}
                <ReunionMap />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*
      <section className="py-16 bg-white">
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-prepa-blue mb-4">
                Pourquoi nous rencontrer ?
              </h3>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-prepa-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Découvrir notre approche</h4>
                      <p className="text-prepa-gray text-base">Méthode pédagogique et accompagnement personnalisé</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-prepa-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Visiter nos locaux</h4>
                      <p className="text-prepa-gray text-base">Salles de cours modernes et espaces de travail</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-prepa-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Conseil personnalisé</h4>
                      <p className="text-prepa-gray text-base">Orientation adaptée à votre profil et vos objectifs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-prepa-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-prepa-blue">Questions financement</h4>
                      <p className="text-prepa-gray text-base">Solutions de paiement et aides possibles</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <RendezVousButton className="btn-primary px-8 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Prendre rendez-vous
                </RendezVousButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      */}
    </Layout>
  );
}