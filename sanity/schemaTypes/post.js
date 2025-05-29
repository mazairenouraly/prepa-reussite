export default {
  name: 'post',
  title: 'Article',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Titre' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
    { name: 'author', type: 'string', title: 'Auteur' },
    { name: 'publishedAt', type: 'datetime', title: 'Date de publication' },
    { name: 'readingTime', type: 'number', title: 'Temps de lecture (minutes)' },
    { name: 'excerpt', type: 'text', title: 'Résumé' },
    { name: 'mainImage', type: 'image', title: 'Image principale' },
    { name: 'content', type: 'array', title: 'Contenu', of: [{ type: 'block' }] },
  ],
};
