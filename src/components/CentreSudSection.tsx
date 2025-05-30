'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

export const CentreSudSection = () => {
  return (
    <AnimatedSection direction="up" delay={0.2}>
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
          <h3 className="font-bold text-custom-dark text-2xl mb-3 font-gyst">Saint-Pierre</h3>
          <div className="flex items-center text-custom-gray text-base mb-6 font-roboto">
            <MapPin className="w-5 h-5 mr-3" />
            45 Avenue des Palmiers, 97410
          </div>
        </div>

        <Card className="card-base custom-shadow">
          <CardContent className="p-8 space-y-6">
            <h4 className="font-bold text-custom-dark text-lg font-gyst">Centre de Saint-Pierre</h4>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-custom-blue rounded-full mt-2" />
                <div>
                  <p className="font-semibold text-custom-dark text-base font-roboto">Espace de travail optimisé</p>
                  <p className="text-custom-gray text-base font-roboto">
                    Locaux récents et lumineux, avec amphithéâtre et salles de travail.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-custom-blue rounded-full mt-2" />
                <div>
                  <p className="font-semibold text-custom-dark text-base font-roboto">Localisation idéale</p>
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
  );
};
