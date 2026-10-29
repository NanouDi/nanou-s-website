
import { sanityClient } from './sanity';

export async function getArticles() {
    return sanityClient.fetch(`
    *[_type == "article"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      excerpt,
      text,
      publishedAt,
      featured,

      coverImage {
        ...,
        asset-> {
          _id,
          url,
          originalFilename
        }
      },

      media[] {
        ...,
        asset-> {
          _id,
          url
        }
      },

      content[] {
        ...,
        asset-> {
          _id,
          url,
          originalFilename,
          mimeType,
          size
        }
      }
    }
  `);
}
