'use client';

import React, { useEffect, useRef } from 'react';
import type { Map as LeafletMap } from 'leaflet';
import type { LatLngTuple } from 'leaflet';

interface Center {
  id: string;
  name: string;
  address: string;
  phone: string;
  coordinates: LatLngTuple;
  hours: string;
  description: string;
}

const centers: Center[] = [
  {
    id: 'nord',
    name: 'Prépa Réussite Nord',
    address: '24 Rte Philibert Tsiranana, CS 61115 97495, La Réunion (CREPS REUNION)',
    phone: '+262 692 71 30 84',
    coordinates: [-20.8789, 55.4481],
    hours: 'Lun-Ven 8h-17h30',
    description: 'Notre centre principal au cœur de Saint-Denis',
  },
  {
    id: 'sud',
    name: 'Prépa Réussite Sud',
    address: '149 C Rue Marius et Ary Leblond, Saint-Pierre 97410, La Réunion (Nova assurances)',
    phone: '+262 692 71 30 84',
    coordinates: [-21.3393, 55.4781],
    hours: 'Lun-Ven 8h-17h30',
    description: "Notre antenne dans le sud de l'île",
  },
];

export const ReunionMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null); // ✅ Ajout du type

  useEffect(() => {
    // Vérifier si Leaflet est déjà chargé
    if (typeof window !== 'undefined' && window.L) {
      initializeMap();
    } else {
      // Charger Leaflet dynamiquement
      const loadLeaflet = async () => {
        // Charger CSS
        if (!document.querySelector('link[href*="leaflet"]')) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          document.head.appendChild(link);
        }

        // Charger JS
        if (!window.L) {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
          script.onload = initializeMap;
          document.head.appendChild(script);
        }
      };

      loadLeaflet();
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const initializeMap = () => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialiser la carte centrée sur La Réunion
    const map = window.L.map(mapRef.current, {
      center: [-21.1151, 55.5364], // Centre de La Réunion
      zoom: 10,
      zoomControl: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      dragging: true
    });

    // Ajouter les tuiles OpenStreetMap
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);

    // Icône personnalisée pour les markers
    const customIcon = window.L.divIcon({
      html: `
        <div class="custom-marker">
          <div class="marker-pin"></div>
          <div class="marker-pulse"></div>
        </div>
      `,
      className: 'custom-div-icon',
      iconSize: [30, 30],
      iconAnchor: [15, 30]
    });

    // Ajouter les markers pour chaque centre
    centers.forEach(center => {
      const marker = window.L.marker(center.coordinates, { icon: customIcon })
        .addTo(map);

      // Créer le contenu de la popup
      const popupContent = `
        <div class="custom-popup">
          <h3 class="popup-title">${center.name}</h3>
          <div class="popup-content">
            <div class="popup-item">
              <svg class="popup-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>${center.address}</span>
            </div>
            <div class="popup-item">
              <svg class="popup-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>${center.phone}</span>
            </div>
            <div class="popup-item">
              <svg class="popup-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>${center.hours}</span>
            </div>
            <p class="popup-description">${center.description}</p>
            <div class="popup-actions">
              <button class="popup-btn popup-btn-primary" onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${center.coordinates[0]},${center.coordinates[1]}', '_blank')">
                <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"/>
                </svg>
                Itinéraire
              </button>
              <button class="popup-btn popup-btn-secondary" onclick="window.open('tel:${center.phone}', '_self')">
                <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Appeler
              </button>
            </div>
          </div>
        </div>
      `;

      // Ajouter la popup au marker
      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'custom-leaflet-popup'
      });
    });

    mapInstanceRef.current = map;
  };

  return (
    <div 
      ref={mapRef} 
      className="reunion-map"
      style={{ 
        height: '500px', 
        width: '100%', 
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    />
  );
};
