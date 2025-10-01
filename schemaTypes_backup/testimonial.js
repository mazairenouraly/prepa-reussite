export default {
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Parent', value: 'parent' },
          { title: 'Élève', value: 'student' },
          { title: 'Autre', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Témoignage',
      type: 'text',
      validation: Rule => Rule.required()
    },

    {
      name: 'image',
      title: 'Photo (optionnel)',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'studentName',
      title: 'Nom de l\'élève (si parent)',
      type: 'string',
      description: 'À remplir seulement si c\'est un témoignage de parent'
    },
    {
      name: 'formation',
      title: 'Formation suivie',
      type: 'string',
      options: {
        list: [
          { title: 'PASS', value: 'pass' },
          { title: 'LAS', value: 'las' },
          { title: 'Autre', value: 'other' }
        ]
      }
    },
    {
      name: 'year',
      title: 'Année',
      type: 'number',
      validation: Rule => Rule.min(2015).max(new Date().getFullYear())
    },
    {
      name: 'isFeatured',
      title: 'Témoignage mis en avant',
      type: 'boolean',
      description: 'Cocher pour afficher ce témoignage en premier'
    },
    {
      name: 'isActive',
      title: 'Actif',
      type: 'boolean',
      description: 'Cocher pour afficher ce témoignage sur le site',
      initialValue: true
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Plus le chiffre est petit, plus le témoignage apparaît en premier'
    }
  ],
  preview: {
    select: {
      title: 'name',
      category: 'category',
      content: 'content',
      media: 'image'
    },
    prepare(selection) {
      const { title, category, content } = selection
      const categoryLabels = {
        parent: 'Parent',
        student: 'Élève',
        other: 'Autre'
      }
      return {
        title: `${title} (${categoryLabels[category]})`,
        subtitle: content?.substring(0, 50) + '...',
        media: selection.media
      }
    }
  }
} 