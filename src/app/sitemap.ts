import { MetadataRoute } from 'next';

const BASE_URL = 'https://almadinahijamacenter.com'; // Example: Use your real domain

const serviceSlugs = [
  'blood-cupping',
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

const blogPostSlugs = [
  'the-sunnah-of-hijama',
  'benefits-of-blood-cupping',
  'hijama-for-pain-relief',
  
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  // 1. Static Pages
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
      changeFrequency: 'yearly', // Booking form itself rarely changes
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly', // Assuming blog is updated
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 2. Dynamic Service Pages
  const servicePages = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const, // Explicitly type 'monthly'
    priority: 0.8,
  }));

  // 3. Dynamic Blog Post Pages
  const blogPages = blogPostSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: currentDate, // Ideally, fetch the actual publish/update date
    changeFrequency: 'yearly' as const, // Posts might not change often once published
    priority: 0.6,
  }));

  // Combine all pages
  return [...staticPages, ...servicePages, ...blogPages];
}