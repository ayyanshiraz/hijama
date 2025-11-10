import type { Metadata } from 'next';
import { blogPageMetadata } from './data'; 

// Server-side function to generate static metadata for /blog
export async function generateMetadata(): Promise<Metadata> {
    const canonicalUrl = `https://www.almadinahijamacenter.com${blogPageMetadata.canonicalPath}`;
    
    return {
        title: blogPageMetadata.title,
        description: blogPageMetadata.description, 
        alternates: {
            canonical: canonicalUrl,
        },
    };
}