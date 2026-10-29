
import { createClient } from '@sanity/client';
console.log('Project ID:', import.meta.env.VITE_SANITY_PROJECT_ID);
console.log('Dataset:', import.meta.env.VITE_SANITY_DATASET);
console.log('API version:', import.meta.env.VITE_SANITY_API_VERSION);
export const sanityClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
    useCdn: true,
});
