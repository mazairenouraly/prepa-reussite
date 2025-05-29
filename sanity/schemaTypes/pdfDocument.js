export default {
  name: 'pdfDocument',
  title: 'PDF Document',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'pdfFile',
      title: 'Fichier PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    },
  ],
};
