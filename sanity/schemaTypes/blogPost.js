// schemas/blogPost.js
export default {
  name: 'blogPost',
  title: 'Article de Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Résumé',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'PASS/LAS', value: 'pass-las' },
          { title: 'Orientation', value: 'orientation' },
          { title: 'Méthodes', value: 'methodes' },
          { title: 'Témoignages', value: 'temoignages' },
          { title: 'Bien-être', value: 'bien-etre' },
          { title: 'Carrière', value: 'carriere' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Auteur',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'readTime',
      title: 'Temps de lecture',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }]
    },
    {
      name: 'featured',
      title: 'Article en vedette',
      type: 'boolean',
      initialValue: false
    }
  ]
};
