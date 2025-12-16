import { MetadataRoute } from 'next';
import { blogPosts } from './blog/data'; 

export const dynamic = 'force-dynamic'; 

const BASE_URL = 'https://www.almadinahijamacenter.com';

const serviceSlugs = [
  'wet-cupping',
  'dry-cupping',
  'hijama-for-pain-relief',
  'hijama-for-internal-health',
  'hijama-for-sports-recovery',
  'hijama-for-detox',
  'fire-cupping',
  'female-face-hijama',
  'beauty-hijama',
  'breast-cysts',
  'hijama-for-baldness',
  'hijama-for-fistula',
  'pcos'
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/booking`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    // 👇👇👇 UPDATED: Blog Main Page ab 'daily' check hoga 👇👇👇
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily', // ✅ Changed from 'weekly' to 'daily'
      priority: 0.9, // Priority bhi barha di taake Google jaldi aye
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const servicePages = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : currentDate,
    changeFrequency: 'weekly' as const, 
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}