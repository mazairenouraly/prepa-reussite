import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes_backup'

export default defineConfig({
  name: 'default',
  title: 'prépa reussite',

  projectId: '2ug3o0qi',
  dataset: 'production',

  plugins: [
    structureTool({
      name: 'structure',
      title: 'Contenu',
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem()
              .title('Témoignages')
              .child(
                S.documentTypeList('testimonial')
                  .title('Témoignages')
              ),
            S.listItem()
              .title('Articles de blog')
              .child(
                S.documentTypeList('blogPost')
                  .title('Articles de blog')
              ),
          ])
    }),
    visionTool()
  ],

  tools: (prev) => {
    // Supprimer l'outil vision du menu principal si nécessaire
    return prev.filter((tool) => tool.name !== 'vision')
  },

  schema: {
    types: schemaTypes,
  },
  
  // Configuration CORS pour permettre l'accès depuis le frontend
  cors: {
    origin: [
      'https://prepareussite.com',
      'http://localhost:3000',
      'http://localhost:3001',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:3001',
    ],
    credentials: true,
  },

  // Configuration d'authentification
  auth: {
    redirectOnSingle: false,
    providers: [
      {
        name: 'sanity',
        title: 'Email / Password',
        url: 'https://api.sanity.io/v2021-10-21/auth/login/sanity'
      }
    ]
  }
}) 