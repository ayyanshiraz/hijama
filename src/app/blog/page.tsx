import type { Metadata } from 'next';
import BlogClient from './BlogClient';
import { blogPageMetadata } from './data';

export const metadata: Metadata = {
  title: blogPageMetadata.title,
  description: blogPageMetadata.description,
  alternates: {
    canonical: `https://www.almadinahijamacenter.com${blogPageMetadata.canonicalPath}`,
  },
  openGraph: {
    title: blogPageMetadata.title,
    description: blogPageMetadata.description,
    url: `https://www.almadinahijamacenter.com${blogPageMetadata.canonicalPath}`,
    siteName: 'Al Madina Hijama Center',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://www.almadinahijamacenter.com/blogs.webp',
        width: 1200,
        height: 630,
        alt: 'Al Madina Hijama Center Blog & Health Tips',
      },
    ],
  },
};

export default function Page() {
  return <BlogClient />;
}