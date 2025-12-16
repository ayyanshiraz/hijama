import type { Metadata } from 'next';
import BlogClient from './BlogClient';
import { blogPageMetadata } from './data';

export const metadata: Metadata = {
  title: blogPageMetadata.title,
  description: blogPageMetadata.description,
  alternates: {
    canonical: `https://www.almadinahijamacenter.com${blogPageMetadata.canonicalPath}`,
  },
};

export default function Page() {
  return <BlogClient />;
}