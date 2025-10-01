import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '2ug3o0qi',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-25'
});
